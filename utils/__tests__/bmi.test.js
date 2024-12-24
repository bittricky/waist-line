import { describe, it, expect } from 'vitest';
import { calculateBMI, getBMICategory } from '../bmi.js';

describe('BMI Calculator', () => {
	describe('calculateBMI', () => {
		it('should calculate BMI correctly with metric units', () => {
			// Test case: 70kg, 1.75m = BMI 22.9
			expect(calculateBMI(1.75, 70, false)).toBe(22.9);
		});

		it('should calculate BMI correctly with imperial units', () => {
			// Test case: 154lbs, 70in = BMI 22.1
			expect(calculateBMI(70, 154, true)).toBe(22.1);
		});

		it('should handle edge cases with very low values', () => {
			// Test case: minimum healthy weight for 1.75m
			expect(calculateBMI(1.75, 56.6, false)).toBe(18.5);
		});

		it('should handle edge cases with very high values', () => {
			// Test case: height: 2m, weight: 100kg
			expect(calculateBMI(2, 100, false)).toBe(25);
		});

		it('should throw error for zero height', () => {
			expect(() => calculateBMI(0, 70, false)).toThrow('Height and weight must be positive numbers');
		});

		it('should throw error for zero weight', () => {
			expect(() => calculateBMI(1.75, 0, false)).toThrow('Height and weight must be positive numbers');
		});

		it('should throw error for negative height', () => {
			expect(() => calculateBMI(-1.75, 70, false)).toThrow('Height and weight must be positive numbers');
		});

		it('should throw error for negative weight', () => {
			expect(() => calculateBMI(1.75, -70, false)).toThrow('Height and weight must be positive numbers');
		});
	});

	describe('getBMICategory', () => {
		it('should categorize underweight BMI correctly', () => {
			expect(getBMICategory(18.4)).toBe('Underweight');
			expect(getBMICategory(16)).toBe('Underweight');
		});

		it('should categorize normal weight BMI correctly', () => {
			expect(getBMICategory(18.5)).toBe('Normal weight');
			expect(getBMICategory(24.9)).toBe('Normal weight');
			expect(getBMICategory(22)).toBe('Normal weight');
		});

		it('should categorize overweight BMI correctly', () => {
			expect(getBMICategory(25)).toBe('Overweight');
			expect(getBMICategory(29.9)).toBe('Overweight');
			expect(getBMICategory(27.5)).toBe('Overweight');
		});

		it('should categorize obese BMI correctly', () => {
			expect(getBMICategory(30)).toBe('Obese');
			expect(getBMICategory(35)).toBe('Obese');
			expect(getBMICategory(40)).toBe('Obese');
		});

		it('should handle edge cases at category boundaries', () => {
			expect(getBMICategory(18.5)).toBe('Normal weight'); // Lower bound of normal
			expect(getBMICategory(24.9)).toBe('Normal weight'); // Upper bound of normal
			expect(getBMICategory(25.0)).toBe('Overweight');   // Lower bound of overweight
			expect(getBMICategory(29.9)).toBe('Overweight');   // Upper bound of overweight
			expect(getBMICategory(30.0)).toBe('Obese');        // Lower bound of obese
		});
	});
});
