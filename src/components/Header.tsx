import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) => ({
	messageContainer: {
		marginTop: '5rem',
		textAlign: 'center' as 'center',
	},
	message: {
		color: theme.palette.text.hint,
		fontSize: '14px',
	},
})

export interface Props extends WithStyles<typeof styles> {}

export class Header extends React.Component<Props, {}> {
	render() {
		const { classes } = this.props

		return (
			<div className={classes.messageContainer}>
				<Typography variant='body2' className={classes.message}>
					This is a tool to convert a fixed file into csv, and download it to local.
				</Typography>

				<Typography variant='body2' className={classes.message}>
					Error will be shown if error example has been selected.
				</Typography>
			</div>
		)
	}
}

export default withStyles(styles)(Header)
