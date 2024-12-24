#!/usr/bin/env node

/**
 * waist-line
 * Command line tool to calculate your BMI
 *
 * @author Mitul Patel <https://mitulpa.tel>
 */

import cli from './utils/cli.js';
import init from './utils/init.js';
import log from './utils/log.js';
import chalk from 'chalk';
import { calculateBMI, getBMICategory } from './utils/bmi.js';
import { displayBMIResult } from './utils/display.js';

const { flags, input, showHelp } = cli;
const { clear, debug, height, weight, imperial } = flags;

(async () => {
	await init({ clear });
	debug && log(flags);
	input.includes(`help`) && showHelp(0);

	if (input.includes('bmi')) {
		if (!height || !weight) {
			console.error(chalk.red.bold('Error: Both height and weight are required.'));
			console.log('\nExample usage:');
			console.log(chalk.cyan('  With metric units (default):'));
			console.log(chalk.green('    waistline bmi --height 1.75 --weight 70'));
			console.log(chalk.cyan('\n  With imperial units:'));
			console.log(chalk.green('    waistline bmi --height 70 --weight 154 --imperial'));
			process.exit(1);
		}

		try {
			const bmi = calculateBMI(height, weight, imperial);
			const category = getBMICategory(bmi);
			displayBMIResult(bmi, category, imperial);
		} catch (error) {
			console.error(chalk.red.bold(`\n✖ Error: ${error.message}\n`));
			process.exit(1);
		}
	}
})();
