import getLaunchpadOptions from '../getLaunchpadOptions'

export const launchpadData = [{
	full_name: 'Kwajalein Atoll',
	id: 'kwajalein_atoll',
}, {
	full_name: 'Cape Canaveral Air Force Station Space Launch Complex 40',
	id: 'ccafs_slc_40',
}] as any

describe('getLaunchpadOptions', () => {
	it('gets correct launch pad options', () => {
		const options = getLaunchpadOptions(launchpadData)

		expect(options.length).toEqual(launchpadData.length + 1)
		expect(options[0]).toEqual({
			value: 'any',
			text: 'Any',
		})
	})
})
