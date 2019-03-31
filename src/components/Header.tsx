import * as React from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import space from '../assets/space-photo.jpg'
import down from '../assets/down-chevron.svg'

const styles = () => ({
	headerContainer: {
		border: '1px solid',
		backgroundImage: `url(${space})`,
		backgroundSize: '100% 125%',
		height: '410px',
		position: 'relative' as 'relative',
		width: '100%',
	},
	headerTitle: {
		color: 'white',
		position: 'absolute' as 'absolute',
		top: '18px',
		left: '40px',
	},
	headerMainText: {
		color: 'white',
		fontSize: '50px',
		marginTop: '135px',
		textAlign: 'center' as 'center',
	},
	arrowContainer: {
		textAlign: 'center' as 'center',
	},
	arrow: {
		height: '20px',
		bottom: '30px',
		position: 'absolute' as 'absolute',
	},
})

export interface Props extends WithStyles<typeof styles> {}

export class Header extends React.Component<Props> {
	public render() {
		const { classes } = this.props

		return (
			<div className={classes.headerContainer}>
				<Typography className={classes.headerTitle}>SPACE SAVVY</Typography>
				<Typography className={classes.headerMainText}>Discover Space Missions</Typography>
				<div className={classes.arrowContainer}>
					<img src={down} className={classes.arrow} />
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Header)
