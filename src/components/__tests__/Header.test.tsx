import * as React from 'react'
import { shallow } from 'enzyme'

import Header, { Props } from '../Header'

const props: Props = {
	classes: {} as Record<string, string>,
}

describe('Header', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Header {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
