import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) => ({
	footerContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		marginLeft: '35px',
		marginRight: '35px',
		paddingBottom: '20px',
	},
	copyRight: {
		color: theme.palette.grey[500],
	},
	/* eslint-disable quote-props */
	backToTop: {
		color: theme.palette.grey[600],
		'&:hover': {
			color: 'black',
			cursor: 'pointer',
		},
	},
	/* eslint-enable quote-props */
})

export interface Props extends WithStyles<typeof styles> {}

export class Footer extends React.Component<Props> {
	public render() {
		const { classes } = this.props

		return (
			<div className={classes.footerContainer}>
				<Typography className={classes.copyRight}>Copyright © 2018 Space Savvy</Typography>
				<Typography className={classes.backToTop}><u>Back to top</u></Typography>
			</div>
		)
	}
}

export default withStyles(styles)(Footer)
