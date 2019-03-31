import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import LaunchMission, { Props } from '../LaunchMission'

const props: Props = {
	classes: idObj,
}

describe('LaunchMission', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<LaunchMission {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
