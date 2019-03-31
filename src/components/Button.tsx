import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import ButtonComponent from '@material-ui/core/Button'

const styles = (theme: Theme) => ({
	/* eslint-disable quote-props */
	button: {
		color: theme.palette.grey[500],
		backgroundColor: 'white',
		fontSize: '13px',
		textTransform: 'none' as 'none',
		fontWeight: 700,
		padding: '3px 20px',
		borderRadius: '3px',
		marginRight: '10px',
		marginBottom: '10px',
		border: `1px solid ${theme.palette.grey[500]}`,
		'&:hover': {
			background: theme.palette.grey[600],
			color: 'white',
		},
	},
	/* eslint-enable quote-props */
})

export interface Props extends WithStyles<typeof styles> {
    buttonContent: string
    link: string
}

export class Button extends React.Component<Props> {
	private onClick = () => {
		window.open(
			this.props.link,
			'_blank',
		)
	}
	public render() {
		const { classes, buttonContent } = this.props

		return (
			<ButtonComponent
				className={classes.button}
				onClick={this.onClick}
			>
				{buttonContent}
			</ButtonComponent>
		)
	}
}

export default withStyles(styles)(Button)
