import { Launchpad } from '../views/LaunchDataInterfaces'
import { Props as DropdownSelectProps } from '../components/DropdownSelect'

/**
 * To grab launchPadOptions for filter from launchpadData fetched from server
 * @param launchpadData launchpadData get from server
 */
export default function getLaunchPadOptions(launchpadData: Launchpad[]): DropdownSelectProps['options'] {
	const launchPadOptions = launchpadData.map(data => ({
		value: data.id,
		text: data.full_name,
	}))

	launchPadOptions.unshift({
		value: 'any',
		text: 'Any',
	})

	return launchPadOptions
}
