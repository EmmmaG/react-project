import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
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
	launchpadsData: Launchpad[]
	isLoading: boolean
	filterData: FilterData
}

export class LaunchMission extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			launchesData: {} as any,
			launchpadsData: {} as any,
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
				this.setState({ launchesData: data })
				console.log('launchesData', data)
			})

		await fetch('http://localhost:8001/launchpads')
			.then(response => {
				return response.json()
			}).then(data => {
				this.setState({ launchpadsData: data })
				console.log('launchpadsData', data)
			})

		this.setState({ isLoading: false })
	}

	private onFilterChange = (filterProp: keyof FilterData) => (value: string) => {
		const { filterData } = this.state

		this.setState({
			filterData: {
				...filterData,
				[filterProp]: value,
			},
		}, () => {
			console.log('filterData', this.state.filterData)
		})
	}

	private onFilterSearch= () => {
		const { launchesData, filterData } = this.state
		const filteredData = getFilteredData(launchesData, filterData)
	}

	private renderFilter = () => {
		const { launchesData, launchpadsData, filterData } = this.state
		const yearOptions = getYearOptions(launchesData)
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
					!isLoading && <LaunchList launchesData={launchesData} launchpadsData={launchpadsData} />
				}
				{
					!isLoading && <Footer />
				}
			</div>
		)
	}
}

export default withStyles(styles)(LaunchMission)
