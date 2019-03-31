import { Launch } from '../views/LaunchDataInterfaces'
import { FilterData } from '../views/LaunchMission'

/**
 * to filter launches data with given filter options
 * @param launchesData data to be filtered
 * @param filterData data from selected filter
 */
export default function getFilteredData(launchesData: Launch[], filterData: FilterData) {
	let filteredData = launchesData
	// filter by keywords
	if (filterData.keywords) {
		const keywords = `${filterData.keywords}`.replace(/\s/g, '').toLowerCase()
		const filteredByKeywords = launchesData.filter(data =>
			`${data.flight_number}` === keywords
			|| `${data.rocket.rocket_name}`.toLowerCase().includes(keywords)
			|| `${data.payloads[0].payload_id}`.toLowerCase().includes(keywords),
		)

		filteredData = filteredByKeywords
	}

	// filter by launchPad
	if (filterData.launchPad !== 'any') {
		const filteredByLaunchPad = filteredData.filter(data => data.launch_site.site_id === filterData.launchPad)

		filteredData = filteredByLaunchPad
	}

	// filter by Min Year
	if (filterData.minYear !== 'any') {
		const filteredByMinYear = filteredData.filter(data => {
			const year = new Date(data.launch_date_local).getFullYear()

			return year >= parseInt(filterData.minYear, 10)
		})

		filteredData = filteredByMinYear
	}

	// filter by Max Year
	if (filterData.maxYear !== 'any') {
		const filteredByMaxYear = filteredData.filter(data => {
			const year = new Date(data.launch_date_local).getFullYear()

			return year <= parseInt(filterData.maxYear, 10)
		})

		filteredData = filteredByMaxYear
	}

	return filteredData
}
