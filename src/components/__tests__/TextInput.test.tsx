import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import TextInput, { Props } from '../TextInput'

const props: Props = {
	title: 'search',
	onChange: jest.fn(),
	value: '',
	classes: idObj,
}

describe('TextInput', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<TextInput {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
