export function pensionContributionCalc(income, legalMin, option, amount, type) {
	let contribution;

	if (option === 'legalMin') {
		contribution = legalMin;
	} else if (option === 'additional' && type === 'shekel') {
		contribution = amount;
	} else {
		contribution = income * (amount / 100);
	}
	return contribution;
}
