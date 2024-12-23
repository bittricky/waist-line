import meowHelp from 'cli-meow-help';
import meow from 'meow';

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		shortFlag: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		shortFlag: `d`,
		desc: `Print debug info`
	},
	height: {
		type: `number`,
		desc: `Height in meters`,
		shortFlag: 'h'
	},
	weight: {
		type: `number`,
		desc: `Weight in kilograms`,
		shortFlag: 'w'
	},
	imperial: {
		type: `boolean`,
		default: false,
		shortFlag: 'i',
		desc: `Use imperial units (height in inches, weight in pounds)`
	}
};

const commands = {
	help: { desc: `Print help info` },
	bmi: { desc: `Calculate BMI (Body Mass Index)` }
};

const helpText = meowHelp({
	name: `waistline`,
	flags,
	commands
});

const options = {
	importMeta: import.meta,
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

export default meow(helpText, options);
