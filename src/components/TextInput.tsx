import * as React from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const styles = () => ({
	inputContainer: {
		textAlign: 'left' as 'left',
		marginTop: '10px',
		marginBottom: '20px',
	},
	textField: {
		height: '35px',
		backgroundColor: 'white',
	},
	inputRoot: {
		height: '35px',
	},
	title: {
		marginBottom: '2px',
	},
})

export interface Select {
	value: string
	text: string
}

export interface Props extends WithStyles<typeof styles> {
	title: string
	onChange: (selectedValue: string) => void
	value: string
}

export class TextInput extends React.Component<Props> {
	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.onChange(event.target.value)
	}

	public render() {
		const { classes, value, title } = this.props

		return (
			<div className={classes.inputContainer}>
				<Typography className={classes.title}>{title}</Typography>
				<TextField
					id={title}
					className={classes.textField}
					value={value}
					onChange={this.handleChange}
					variant='outlined'
					placeholder='eg Falcon'
					InputProps={{ classes: { root: classes.inputRoot } }}
				/>
			</div>
		)
	}
}

export default withStyles(styles)(TextInput)
