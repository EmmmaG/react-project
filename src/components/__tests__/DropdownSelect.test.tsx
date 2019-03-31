import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import DropdownSelect, { Props } from '../DropdownSelect'

const props: Props = {
	title: 'select',
	onChange: jest.fn(),
	value: '1',
	options: [{
		value: '1',
		text: 'first',
	}, {
		value: '2',
		text: 'second',
	}],
	width: '200px',
	classes: idObj,
}

describe('DropdownSelect', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<DropdownSelect {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
