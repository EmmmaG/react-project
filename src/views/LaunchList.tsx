import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { Launch, Launchpad } from './LaunchDataInterfaces'
import LaunchCard from '../components/LaunchCard'

const styles = (theme: Theme) => ({
	listContainer: {
		marginLeft: '35px',
		marginRight: '35px',
		backgroundColor: 'white',
		paddingTop: '20px',
	},
	titleContainer: {
		textAlign: 'center' as 'center',
	},
	title: {
		color: theme.palette.grey[600],
		fontSize: '12px',
		fontWeight: 'bold' as 'bold',
	},
})

export interface Props extends WithStyles<typeof styles> {
	launchesData: Launch[]
	launchpadsData: Launchpad[]
}

export class LaunchList extends React.Component<Props> {
	private renderLaunchList = () => {
		const { launchesData, launchpadsData } = this.props

		return launchesData.map(data =>
			<LaunchCard
				key={`${data.rocket.rocket_name} - ${data.payloads[0].payload_id}`}
				launchData={data}
				launchpadsData={launchpadsData}
			/>,
		)
	}

	public render() {
		const { classes, launchesData } = this.props

		return (
			<div className={classes.listContainer}>
				<div className={classes.titleContainer}>
					<Typography className={classes.title}>{`Showing ${launchesData.length} Missions`}</Typography>
				</div>
				{this.renderLaunchList()}
			</div>
		)
	}
}

export default withStyles(styles)(LaunchList)
