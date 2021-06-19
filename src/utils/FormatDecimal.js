export function formatDecimal(val) {
	//thousand separator and decimal places

	// console.log('val 1', val);

	return val.replaceAll(',', '99999');

	// console.log('val 2', val);
}
