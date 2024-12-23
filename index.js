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
import { calculateBMI, getBMICategory } from './utils/bmi.js';

const { flags, input, showHelp } = cli;
const { clear, debug, height, weight, imperial } = flags;

(async () => {
	await init({ clear });
	debug && log(flags);
	input.includes(`help`) && showHelp(0);

	if (input.includes('bmi')) {
		if (!height || !weight) {
			console.error('Error: Both height and weight are required.');
			console.log('Example usage:');
			console.log('  With metric units (default):');
			console.log('    waistline bmi --height 1.75 --weight 70');
			console.log('  With imperial units:');
			console.log('    waistline bmi --height 69 --weight 154 --imperial');
			process.exit(1);
		}

		try {
			const bmi = calculateBMI(height, weight, imperial);
			const category = getBMICategory(bmi);
			console.log(`\nBMI Result:`);
			console.log(`BMI: ${bmi}`);
			console.log(`Category: ${category}\n`);
		} catch (error) {
			console.error(`Error: ${error.message}`);
			process.exit(1);
		}
	}
})();
