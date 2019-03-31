import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Button from '../components/Button'
import { Launch, Launchpad } from '../views/LaunchDataInterfaces'
import getNumberWithSuffix from '../utils/getNumberWithSuffix'
import getTime from '../utils/getTime'

const styles = (theme: Theme) => ({
	cardContainer: {
		display: 'flex',
		margin: '20px',
		justifyContent: 'start',
		alignItems: 'flex-start',
		borderBottom: `1px solid ${theme.palette.grey[200]}`,
	},
	picture: {
		height: '70px',
		width: '70px',
		marginRight: '10px',
	},
	textWrapper: {
		textAlign: 'left' as 'left',
	},
	failedText: {
		color: 'red',
	},
	subtitle: {
		fontSize: '12px',
		marginTop: '8px',
		color: theme.palette.grey[600],
	},
	buttonWrapper: {
		marginTop: '30px',
	},
	detailContainer: {
		marginTop: '10px',
		marginLeft: '10px',
	},
	flightNumberContainer: {
		marginTop: '15px',
		marginLeft: 'auto',
		textAlign: 'center' as 'center',
	},
})

const monthNames = [
	'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
]

export interface Props extends WithStyles<typeof styles> {
	launchData: Launch
	launchpadsData: Launchpad[]
}

export class LaunchCard extends React.Component<Props> {
	private get isFailedMission() {
		const { launchData } = this.props

		return (!launchData.land_success || !launchData.launch_success)
	}

	private get launchPadName() {
		const { launchData, launchpadsData } = this.props
		const launchpadData = launchpadsData.find(data => data.id === launchData.launch_site.site_id)

		return launchpadData && launchpadData.full_name
	}

	private get subtitle() {
		const { launchData, classes} = this.props
		const trimedDte = launchData.launch_date_local.slice(0, -6)
		const date = new Date(trimedDte)

		const year = date.getFullYear()
		const month = monthNames[date.getMonth()]
		const day = getNumberWithSuffix(date.getDate())
		const time = getTime(date)

		return (
			<div className={classes.textWrapper}>
				<Typography className={classes.subtitle}>Launched <b>{`${day} ${month} ${year}`}</b> at <b>{time}</b> from <b>{this.launchPadName}</b></Typography>
			</div>
		)
	}

	private renderButtons = () => {
		const { launchData, classes} = this.props

		return (
			<div className={classes.buttonWrapper}>
				{launchData.links.reddit_campaign && (
					<Button buttonContent='Reddit Campaign' link={launchData.links.reddit_campaign} />
				)}
				{launchData.links.reddit_launch && (
					<Button buttonContent='Reddit Launch' link={launchData.links.reddit_launch} />
				)}
				{launchData.links.reddit_recovery && (
					<Button buttonContent='Reddit Recovery' link={launchData.links.reddit_recovery} />
				)}
				{launchData.links.reddit_media && (
					<Button buttonContent='Reddit Media' link={launchData.links.reddit_media} />
				)}
				{launchData.links.presskit && (
					<Button buttonContent='Press Kit' link={launchData.links.presskit} />
				)}
				{launchData.links.article_link && (
					<Button buttonContent='Article' link={launchData.links.article_link} />
				)}
				{launchData.links.video_link && (
					<Button buttonContent='Watch Video' link={launchData.links.video_link} />
				)}
			</div>
		)
	}

	private renderLaunchDetails = () => {
		const { launchData, classes } = this.props

		return (
			<div className={classes.detailContainer}>
				<div className={classes.textWrapper}>
					<Typography><b>{`${launchData.rocket.rocket_name} - ${launchData.payloads[0].payload_id}`}</b>{this.isFailedMission && (<span className={classes.failedText}> - Failed Mission</span>)}</Typography>
				</div>
				{this.subtitle}
				{this.renderButtons()}
			</div>
		)
	}

	private renderFlightNumber = () => {
		const { launchData, classes } = this.props

		return (
			<div className={classes.flightNumberContainer}>
				<Typography style={{fontSize: '18px'}}>{`#${launchData.flight_number}`}</Typography>
				<Typography style={{fontSize: '12px', color: 'grey'}}>Flight Number</Typography>
			</div>
		)
	}

	public render() {
		const { classes, launchData } = this.props

		return (
			<div className={classes.cardContainer}>
				<img
					src={launchData.links && launchData.links.mission_patch}
					className={classes.picture}
					alt='No Pic Available'
				/>
				{this.renderLaunchDetails()}
				{this.renderFlightNumber()}
			</div>
		)
	}
}

export default withStyles(styles)(LaunchCard)
