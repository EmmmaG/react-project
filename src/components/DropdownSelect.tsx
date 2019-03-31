import * as React from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

const styles = () => ({
	selectContainer: {
		textAlign: 'left' as 'left',
		marginTop: '10px',
		marginBottom: '20px',
		marginRight: '20px',
		display: 'inline-block',
	},
	select: {
		height: '35px',
		backgroundColor: 'white',
	},
	selectRoot: {
		display: 'flex',
		alignItems: 'center',
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
	options: Select[]
	width: string
}

export class DropdownSelect extends React.Component<Props> {
	private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		this.props.onChange(event.target.value)
	}

	private renderOptions = () => this.props.options.map(o => (
		<option value={o.value} key={o.value}>
			{o.text}
		</option>
	))

	public render() {
		const { classes, value, title, width } = this.props

		return (
			<div className={classes.selectContainer}>
				<Typography className={classes.title}>{title}</Typography>
				<FormControl variant='outlined'>
					<Select
						style={{ width }}
						className={classes.select}
						classes={{ root: classes.selectRoot }}
						native
						value={value}
						onChange={this.handleChange}
						input={
							<OutlinedInput
								name={title}
								labelWidth={0}
								id={title}
							/>
						}
						IconComponent={() => (
							<KeyboardArrowDown />
						)}>
					>
						{this.renderOptions()}
					</Select>
				</FormControl>
			</div>
		)
	}
}

export default withStyles(styles)(DropdownSelect)
