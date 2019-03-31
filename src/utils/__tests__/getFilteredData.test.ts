import getFilteredData from '../getFilteredData'

export const launchData = [{
	flight_number: 1,
	launch_date_local: '2006-03-25T10:30:00+12:00',
	launch_site: {
		site_id: 'kwajalein_atoll',
		site_name: 'Kwajalein Atoll',
	},
	payloads: [{
		payload_id: 'FalconSAT-2',
	}],
	rocket: {
		rocket_id: 'falcon1',
		rocket_name: 'Falcon 1',
		rocket_type: 'Merlin A',
	},
}, {
	flight_number: 2,
	launch_date_local: '2007-03-25T10:30:00+12:00',
	launch_site: {
		site_id: 'ccafs_slc_40---',
		site_name: 'Kwajalein Atoll',
	},
	payloads: [{
		payload_id: 'FalconSAT-3',
	}],
	rocket: {
		rocket_id: 'falcon1',
		rocket_name: 'Falcon 2',
		rocket_type: 'Merlin A',
	},
}, {
	flight_number: 3,
	launch_date_local: '2008-03-25T10:30:00+12:00',
	launch_site: {
		site_id: 'ccafs_slc_40---',
		site_name: 'Kwajalein Atoll',
	},
	payloads: [{
		payload_id: 'FalconSAT-33',
	}],
	rocket: {
		rocket_id: 'falcon1',
		rocket_name: 'Falcon 3',
		rocket_type: 'Merlin A',
	},
}, {
	flight_number: 4,
	launch_date_local: '2009-03-25T10:30:00+12:00',
	launch_site: {
		site_id: 'kwajalein_atoll',
		site_name: 'Kwajalein Atoll',
	},
	payloads: [{
		payload_id: 'FalconSAT-44',
	}],
	rocket: {
		rocket_id: 'falcon1',
		rocket_name: 'Falcon 4',
		rocket_type: 'Merlin A',
	},
}, {
	flight_number: 5,
	launch_date_local: '2010-03-25T10:30:00+12:00',
	launch_site: {
		site_id: 'kwajalein_atoll',
		site_name: 'Kwajalein Atoll',
	},
	payloads: [{
		payload_id: 'FalconSAT-55',
	}],
	rocket: {
		rocket_id: 'falcon1',
		rocket_name: 'Falcon 5',
		rocket_type: 'Merlin A',
	},
}, {
	flight_number: 66,
	launch_date_local: '2011-03-25T10:30:00+12:00',
	launch_site: {
		site_id: 'kwajalein_atoll',
		site_name: 'Kwajalein Atoll',
	},
	payloads: [{
		payload_id: 'FalconSAT-77',
	}],
	rocket: {
		rocket_id: 'falcon6',
		rocket_name: 'Falcon 6',
		rocket_type: 'Merlin A',
	},
}] as any

describe('getFilteredData', () => {
	it('filter by keywords', () => {
		const filterData = {
			keywords: '66',
			launchPad: 'any',
			minYear: 'any',
			maxYear: 'any',
		}

		const data = getFilteredData(launchData, filterData)

		expect(data.length).toEqual(1)
	})

	it('filter by launchPad', () => {
		const filterData = {
			keywords: '',
			launchPad: 'ccafs_slc_40---',
			minYear: 'any',
			maxYear: 'any',
		}

		const data = getFilteredData(launchData, filterData)

		expect(data.length).toEqual(2)
	})

	it('filter by minYear', () => {
		const filterData = {
			keywords: '',
			launchPad: 'any',
			minYear: '2009',
			maxYear: 'any',
		}

		const data = getFilteredData(launchData, filterData)

		expect(data.length).toEqual(3)
	})

	it('filter by maxYear', () => {
		const filterData = {
			keywords: '',
			launchPad: 'any',
			minYear: 'any',
			maxYear: '2007',
		}

		const data = getFilteredData(launchData, filterData)

		expect(data.length).toEqual(2)
	})

	it('filter by empty filter', () => {
		const filterData = {
			keywords: '',
			launchPad: 'any',
			minYear: 'any',
			maxYear: 'any',
		}

		const data = getFilteredData(launchData, filterData)

		expect(data.length).toEqual(launchData.length)
		expect(data).toEqual(launchData)
	})
})
