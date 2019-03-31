import { Launch } from '../views/LaunchDataInterfaces'
import { Props as DropdownSelectProps } from '../components/DropdownSelect'

export function getUnique(value: number, index: number, self: number[]) {
	return self.indexOf(value) === index
}

export function sortYear(a: number, b: number) {
	return a - b
}

/**
 * To grab all available years from launchData fetched from server
 * @param launchData launchData get from server
 */
export default function getYearOptions(launchData: Launch[]): DropdownSelectProps['options'] {
	const yearArray = launchData.map(data => new Date(data.launch_date_local).getFullYear())
	const uniqueYearArray = yearArray.filter(getUnique)
	const sortedYearArray = uniqueYearArray.sort(sortYear)
	const yearOptions = sortedYearArray.map(year => ({
		value: year.toString(),
		text: year.toString(),
	}))

	yearOptions.unshift({
		value: 'any',
		text: 'Any',
	})

	return yearOptions
}
