import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import Footer, { Props } from '../Footer'

const props: Props = {
	classes: idObj,
}

describe('Footer', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Footer {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
