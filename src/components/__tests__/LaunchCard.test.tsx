import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import LaunchCard, { Props } from '../LaunchCard'

const launchData = [{
	cap_serial: null,
	core_serial: 'Merlin 1A',
	details: 'Engine failure at 33 seconds and loss of vehicle',
	flight_number: 1,
	landing_type: null,
	landing_vehicle: null,
	launch_date_local: '2006-03-25T10:30:00+12:00',
	launch_site: {
		site_id: 'kwajalein_atoll',
		site_name: 'Kwajalein Atoll',
	},
	links: {
		article_link: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
		mission_patch: 'http://spacexpatchlist.space/images/thumbs/falcon_1_flight_1.png',
		video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
	},
	payloads: [{
		customers: ['DARPA'],
		orbit: 'LEO',
		payload_id: 'FalconSAT-2',
		payload_mass_kg: 20,
		payload_mass_lbs: 43,
		payload_type: 'Satellite',
	}],
	rocket: {
		rocket_id: 'falcon1',
		rocket_name: 'Falcon 1',
		rocket_type: 'Merlin A',
	},
	telemetry: {
		flight_club: null,
	},
}] as any

export const launchpadsData = [{
	details: 'SpaceX original launch site, where all of the Falcon 1 launches occured. Abandoned as SpaceX decided against upgrading the pad to support Falcon 9.',
	full_name: 'Kwajalein Atoll',
	id: 'kwajalein_atoll',
	location: {name: 'Omelek Island', region: 'Marshall Islands', latitude: 9.0477206, longitude: 167.7431292},
	status: 'retired',
	vehicles_launched: 'falcon 1',
}] as any

export const props: Props = {
	launchData,
	launchpadsData,
	classes: idObj,
}

describe('LaunchCard', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<LaunchCard {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
