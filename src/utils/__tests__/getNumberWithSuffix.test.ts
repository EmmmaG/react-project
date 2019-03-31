import getNumberWithSuffix from '../getNumberWithSuffix'

describe('getNumberWithSuffix', () => {
	it('add correct suffix to number', () => {
		expect(getNumberWithSuffix(1)).toEqual('1st')
		expect(getNumberWithSuffix(2)).toEqual('2nd')
		expect(getNumberWithSuffix(3)).toEqual('3rd')
		expect(getNumberWithSuffix(4)).toEqual('4th')
		expect(getNumberWithSuffix(11)).toEqual('11th')
		expect(getNumberWithSuffix(12)).toEqual('12th')
		expect(getNumberWithSuffix(21)).toEqual('21st')
		expect(getNumberWithSuffix(22)).toEqual('22nd')
		expect(getNumberWithSuffix(23)).toEqual('23rd')
	})
})
