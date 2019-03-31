import getTime from '../getTime'

describe('getTime', () => {
	it('gets correct time', () => {
		expect(getTime(new Date('2019-03-31T00:00'))).toEqual('12:00 am')
		expect(getTime(new Date('2019-03-31T01:01'))).toEqual('1:01 am')
		expect(getTime(new Date('2019-03-31T12:00'))).toEqual('12:00 pm')
		expect(getTime(new Date('2019-03-31T13:00'))).toEqual('1:00 pm')
	})
})
