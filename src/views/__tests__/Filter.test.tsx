import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import Filter, { Props } from '../Filter'

const props: Props = {
	keywords: {
		title: 'Keywords',
		onChange: jest.fn(),
		value: 'keyyy',
	},
	launchPad: {
		title: 'Launch Pad',
		onChange: jest.fn(),
		value: 'launchPadValue',
		options: [{ value: 'launchPadValue', text: 'launchPadText'}],
		width: '220px',
	},
	minYear: {
		title: 'Min Year',
		onChange: jest.fn(),
		value: 'minyearValue',
		options: [{ value: 'minyearValue', text: 'minyearText'}],
		width: '110px',
	},
	maxYear: {
		title: 'Max Year',
		onChange: jest.fn(),
		value: 'maxyearValue',
		options: [{ value: 'maxyearValue', text: 'maxyearText'}],
		width: '110px',
	},
	onFilterSearch: jest.fn(),
	classes: idObj,
}

describe('Filter', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Filter {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
