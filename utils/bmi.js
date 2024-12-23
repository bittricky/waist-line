export function calculateBMI(height, weight, isImperial = false) {
	if (isImperial) {
		height = height * 0.0254;
		weight = weight * 0.453592;
	}

	if (height <= 0 || weight <= 0) {
		throw new Error('Height and weight must be positive numbers');
	}

	const bmi = weight / (height * height);
	return Number(bmi.toFixed(1));
}

export function getBMICategory(bmi) {
	if (bmi < 18.5) return 'Underweight';
	if (bmi < 25) return 'Normal weight';
	if (bmi < 30) return 'Overweight';
	return 'Obese';
}
