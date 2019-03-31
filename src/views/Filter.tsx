import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import DropdownSelect, { Props as DropdownSelectProps } from '../components/DropdownSelect'
import TextInput, { Props as TextInputProps } from '../components/TextInput'

const styles = (theme: Theme) => ({
	filterContainer: {
		backgroundColor: theme.palette.grey[100],
		marginTop: '30px',
		marginLeft: '35px',
		marginRight: '35px',
		paddingLeft: '20px',
		borderBottom: `2px solid ${theme.palette.grey[300]}`,
	},
	/* eslint-disable quote-props */
	applyButton: {
		color: 'white',
		backgroundColor: '#0ebfae',
		height: '35px',
		width: '100px',
		marginTop: '11px',
		textTransform: 'none' as 'none',
		fontWeight: 700,
		'&:hover': {
			background: '#0e978a',
		},
	},
	/* eslint-enable quote-props */
})

type DropdownSelectP = Pick<DropdownSelectProps, Exclude<keyof DropdownSelectProps, 'classes'>>
type TextInputP = Pick<TextInputProps, Exclude<keyof TextInputProps, 'classes'>>

export interface Props extends WithStyles<typeof styles> {
	keywords: TextInputP
    launchPad: DropdownSelectP
    minYear: DropdownSelectP
	maxYear: DropdownSelectP
	onFilterSearch: () => void
}

export class Filter extends React.Component<Props> {
private renderDropdownSelects = () => {
	const dropdownSelectData = [this.props.launchPad, this.props.minYear, this.props.maxYear]

	return dropdownSelectData.map(data => <DropdownSelect key={`${data.title}_${data.value}`} {...data} />)
}

private renderTextInput = () => <TextInput {...this.props.keywords} />

private renderApplyButton = () =>
	<Button
		className={this.props.classes.applyButton}
		onClick={this.props.onFilterSearch}
	>
		Apply
	</Button>

public render() {
	const { classes } = this.props

	return (
		<div className={classes.filterContainer} id='filter'>
			{this.renderTextInput()}
			{this.renderDropdownSelects()}
			{this.renderApplyButton()}
		</div>
	)
}
}

export default withStyles(styles)(Filter)
