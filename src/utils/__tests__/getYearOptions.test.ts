import getYearOptions from '../getYearOptions'
import { launchData } from './getFilteredData.test'

describe('getYearOptions', () => {
	it('gets correct year options', () => {
		const options = getYearOptions(launchData)

		expect(options.length).toEqual(launchData.length + 1)
		expect(options[0]).toEqual({
			value: 'any',
			text: 'Any',
		})
	})
})
