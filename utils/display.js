import chalk from 'chalk';

const createBMIScale = bmi => {
	const width = 40;
	const ranges = [
		{ max: 18.5, color: chalk.yellow, label: 'Underweight' },
		{ max: 25, color: chalk.green, label: 'Normal' },
		{ max: 30, color: chalk.yellow, label: 'Overweight' },
		{ max: 40, color: chalk.red, label: 'Obese' }
	];

	const markers = ranges.map(r => r.max);
	const scaleWidth = width - 2;
	const scale = '─'.repeat(scaleWidth);

	const position = Math.floor(
		((Math.min(Math.max(bmi, 15), 40) - 15) / 25) * scaleWidth
	);

	let coloredScale = '';
	let currentPos = 0;

	ranges.forEach((range, i) => {
		const nextPos = Math.floor(((range.max - 15) / 25) * scaleWidth);
		const section = scale.slice(currentPos, nextPos);
		coloredScale += range.color(section);
		currentPos = nextPos;
	});

	const pointer = '▼';
	const spaces = ' '.repeat(position);
	const pointerLine = `${spaces}${chalk.cyan.bold(pointer)}`;

	return {
		scale: `[-${coloredScale}-]`,
		pointer: pointerLine,
		legend: ranges.map(r => r.color(r.label)).join('  ')
	};
};

const getCategoryEmoji = category => {
	switch (category) {
		case 'Underweight':
			return '🥗';
		case 'Normal weight':
			return '🎯';
		case 'Overweight':
			return '💪';
		case 'Obese':
			return '🏥';
		default:
			return '🤷';
	}
};

const getCategoryColor = category => {
	switch (category) {
		case 'Underweight':
			return chalk.yellow;
		case 'Normal weight':
			return chalk.green;
		case 'Overweight':
			return chalk.yellow;
		case 'Obese':
			return chalk.red;
		default:
			return chalk.white;
	}
};

export const displayBMIResult = (bmi, category, imperial = false) => {
	const scale = createBMIScale(bmi);
	const unitInfo = imperial
		? '(Imperial: inches, pounds)'
		: '(Metric: meters, kilograms)';
	const emoji = getCategoryEmoji(category);
	const categoryColor = getCategoryColor(category);

	console.log('\n' + chalk.bold('Your BMI Results'));
	console.log(chalk.dim('─'.repeat(40)));

	console.log(
		`${chalk.bold('Value:')}     ${chalk.cyan.bold(bmi.toFixed(1))}  ${chalk.dim(
			unitInfo
		)}`
	);

	console.log(
		`${chalk.bold('Category:')}  ${categoryColor(category)} ${emoji}`
	);

	console.log(chalk.dim('─'.repeat(40)));

	console.log('\n' + chalk.bold('Where You Are: \n'));
	console.log(scale.scale);
	console.log(scale.pointer);
	console.log(`\n${scale.legend}\n`);

	console.log(chalk.bold('🩺 Health Tip: \n'));
	switch (category) {
		case 'Underweight':
			console.log(
				chalk.yellow(
					'Consider consulting a nutritionist for a healthy weight gain plan.'
				)
			);
			break;
		case 'Normal weight':
			console.log(
				chalk.green('Great job! Maintain your healthy lifestyle.')
			);
			break;
		case 'Overweight':
			console.log(
				chalk.yellow(
					'Focus on balanced nutrition and regular exercise. Hit the weights!'
				)
			);
			break;
		case 'Obese':
			console.log(
				chalk.red(
					'Consider consulting a licensed healthcare provider for personalized advice before severe medical problems manifest.'
				)
			);
			break;
	}
	console.log();
};
