import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import Header, { Props } from '../Header'

const props: Props = {
	classes: idObj,
}

describe('Header', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Header {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
