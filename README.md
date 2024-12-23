# Waist Line

> Those denim jeans collecting dust in your closet? No problem! With waist line, you can easily find out exactly how many sizes away you are from making them a reality again—no stretchy excuses included!

A command-line tool to calculate your Body Mass Index (BMI) with support for both metric and imperial units to get you started on your fitness journey.

## 🚀 Installation

```bash
# Using npm
npm install -g waistline

# Using pnpm
pnpm add -g waistline

# Using yarn
yarn global add waistline
```

## 📖 Usage

### Calculate BMI using metric units (default)

```bash
waistline bmi --height 1.75 --weight 70
```

- Height in meters
- Weight in kilograms

### Calculate BMI using imperial units

```bash
waistline bmi --height 69 --weight 154 --imperial
```

- Height in inches
- Weight in pounds

### Get help

```bash
waistline help
```

## 🛠️ Available Commands

### `bmi`

Calculate your Body Mass Index (BMI)

#### Options:

- `--height, -h`: Your height (in meters or inches)
- `--weight, -w`: Your weight (in kilograms or pounds)
- `--imperial, -i`: Use imperial units (height in inches, weight in pounds)
- `--clear, -c`: Clear the console
- `--debug, -d`: Print debug info

## 📊 BMI Categories

The tool categorizes your BMI into one of these ranges:

- Underweight: < 18.5
- Normal weight: 18.5 - 24.9
- Overweight: 25 - 29.9
- Obese: ≥ 30

## 🔧 Development

### Prerequisites

- Node.js >= 18

### Setup

```bash
# Clone the repository
git clone https://github.com/bittricky/death.git
cd waist-line

# Install dependencies
pnpm install

# Run locally
pnpm dev
```

### Available Scripts

- `pnpm dev`: Run the CLI locally
- `pnpm start`: Run the CLI
- `pnpm format`: Format code using Prettier
- `pnpm publish:patch`: Publish a patch version
- `pnpm publish:minor`: Publish a minor version
- `pnpm publish:major`: Publish a major version

## 📝 License

MIT © [Mitul Patel](https://mitulpa.tel)
