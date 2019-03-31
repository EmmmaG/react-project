import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core'
import { Launch, Launchpad } from './LaunchDataInterfaces'
import getYearOptions from '../utils/getYearOptions'
import getLaunchpadOptions from '../utils/getLaunchpadOptions'
import getFilteredData from '../utils/getFilteredData'

import Filter from './Filter'
import LaunchList from './LaunchList'
import Footer from './Footer'


const styles = (theme: Theme) => ({
	loaderContainer: {
		textAlign: 'center' as 'center',
	},
	loader: {
		color: theme.palette.grey[600],
		marginTop: '50px',
	},
	textContainer: {
		textAlign: 'center' as 'center',
		paddingTop: '50px',
		paddingBottom: '50px',
	},
	text: {
		fontSize: '20px',
		color: theme.palette.grey[700],
	},
})

export interface FilterData {
	keywords: string
	launchPad: string
	minYear: string
	maxYear: string
}

export interface Props extends WithStyles<typeof styles> {}
export interface State {
	launchesData: Launch[]
	launchesDataBack: Launch[]
	launchpadsData: Launchpad[]
	isLoading: boolean
	filterData: FilterData
}

export class LaunchMission extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			launchesData: [],
			launchesDataBack: [],
			launchpadsData: [],
			isLoading: true,
			filterData: {
				keywords: '',
				launchPad: 'any',
				minYear: 'any',
				maxYear: 'any',
			},
		}
	}

	public componentDidMount() {
		this.getData()
	}

	private getData = async() => {
		this.setState({ isLoading: true})

		await fetch('http://localhost:8001/launches')
			.then(response => {
				return response.json()
			}).then(data => {
				this.setState({ launchesData: data, launchesDataBack: data })
			})

		await fetch('http://localhost:8001/launchpads')
			.then(response => {
				return response.json()
			}).then(data => {
				this.setState({ launchpadsData: data })
			})

		this.setState({ isLoading: false })
		console.log(this.state.launchesData)
		console.log(this.state.launchpadsData)
	}

	private onFilterChange = (filterProp: keyof FilterData) => (value: string) => {
		const { filterData } = this.state

		this.setState({
			filterData: {
				...filterData,
				[filterProp]: value,
			},
		})
	}

	private onFilterSearch= () => {
		const { launchesDataBack, filterData } = this.state

		if (parseInt(filterData.maxYear, 10) < parseInt(filterData.minYear, 10)) {
			alert('Invalid year range')
			return
		}
		const filteredData = getFilteredData(launchesDataBack, filterData)

		this.setState({ launchesData: filteredData })
	}

	private renderFilter = () => {
		const { launchesDataBack, launchpadsData, filterData } = this.state
		const yearOptions = getYearOptions(launchesDataBack)
		const launchpadOptions = getLaunchpadOptions(launchpadsData)

		return (
			<Filter
				keywords={{
					title: 'Keywords',
					onChange: this.onFilterChange('keywords'),
					value: filterData.keywords,
				}}
				launchPad={{
					title: 'Launch Pad',
					onChange: this.onFilterChange('launchPad'),
					value: filterData.launchPad,
					options: launchpadOptions,
					width: '220px',
				}}
				minYear={{
					title: 'Min Year',
					onChange: this.onFilterChange('minYear'),
					value: filterData.minYear,
					options: yearOptions,
					width: '120px',
				}}
				maxYear={{
					title: 'Max Year',
					onChange: this.onFilterChange('maxYear'),
					value: filterData.maxYear,
					options: yearOptions,
					width: '120px',
				}}
				onFilterSearch={this.onFilterSearch}
			/>
		)
	}

	public render() {
		const { classes } = this.props
		const { isLoading, launchesData, launchpadsData } = this.state

		return (
			<div>
				{
					isLoading && (
						<div className={classes.loaderContainer}>
							<CircularProgress
								className={classes.loader}
								size={100}
								variant='indeterminate' />
						</div>
					)
				}
				{
					!isLoading && (this.renderFilter())
				}
				{
					!isLoading && !!launchesData.length && (
						<LaunchList launchesData={launchesData} launchpadsData={launchpadsData} />
					)
				}
				{
					!isLoading && !launchesData.length && (
						<div className={classes.textContainer}>
							<Typography className={classes.text}>No launch matches with the filter</Typography>
						</div>
					)
				}
				{
					!isLoading && <Footer />
				}
			</div>
		)
	}
}

export default withStyles(styles)(LaunchMission)
