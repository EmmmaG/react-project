import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import { launchpadData } from '../../utils/__tests__/getLaunchpadOptions.test'
import { launchData } from '../../utils/__tests__/getFilteredData.test'

import LaunchList, { Props } from '../LaunchList'

const props: Props = {
	classes: idObj,
	launchesData: launchData,
	launchpadsData: launchpadData,
}

describe('LaunchList', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<LaunchList {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
