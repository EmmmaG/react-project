/**
 * to get time in 12 hour format
 * @param date date
 */
export default function getTime(date: Date) {
	let hours = date.getHours()
	let minutes : string | number = date.getMinutes()

	const suffix = hours >= 12 ? 'pm' : 'am'

	hours = hours % 12
	// hour 0 should be 12
	hours = hours ? hours : 12

	minutes = minutes < 10 ? `0${minutes}` : `${minutes}`

	return `${hours}:${minutes} ${suffix}`
}
