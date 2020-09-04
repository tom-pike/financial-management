export function pensionBenefitCalc(taxData, taxYearIndex, income, pensionContribution) {
	//Tax benefit available to a fixed percentage of the salary with a ceiling based on the national avaerage salary. Part of that can be deducted as an expense and the remaining part a tax credit, up to a ceiling

	const { taxDeductablePercent, taxCreditPercent, taxCredit, salaryCeiling } = taxData[
		taxYearIndex
	].pension.taxRelief.selfEmployed;
	const maxTaxDeductable = (salaryCeiling / 12) * (taxDeductablePercent / 100);
	const maxTaxCredit = (salaryCeiling / 12) * (taxCreditPercent / 100);
	const maxSalaryDeductable = income * (taxDeductablePercent / 100);
	const maxSalaryCredit = income * (taxCreditPercent / 100);
	let pensionTaxDeductible;
	let pensionTaxCredit = 0;

	const additionBenefit = () => {
		const remainingContribution = pensionContribution - maxSalaryDeductable;

		if (remainingContribution > maxSalaryCredit) {
			if (maxSalaryCredit > maxTaxCredit) {
				pensionTaxCredit = maxTaxCredit * (taxCredit / 100);
			} else {
				pensionTaxCredit = maxSalaryCredit * (taxCredit / 100);
			}
		} else if (remainingContribution > maxTaxCredit) {
			pensionTaxCredit = maxTaxCredit * (taxCredit / 100);
		} else {
			pensionTaxCredit = remainingContribution * (taxCredit / 100);
		}
	};

	if (pensionContribution > maxSalaryDeductable) {
		additionBenefit();
		if (maxSalaryDeductable > maxTaxDeductable) {
			pensionTaxDeductible = maxTaxDeductable;
		} else {
			pensionTaxDeductible = maxSalaryDeductable;
		}
	} else if (pensionContribution > maxTaxDeductable) {
		pensionTaxDeductible = maxTaxDeductable;
	} else {
		pensionTaxDeductible = pensionContribution;
	}

	return { pensionTaxDeductible, pensionTaxCredit };
}
