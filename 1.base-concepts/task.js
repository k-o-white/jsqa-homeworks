"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const d = Math.pow(b, 2) - 4 * a * c;
	if (d === 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const p = Number(percent);
	const c = Number(contribution);
	const a = Number(amount);
	const m = Number(countMonths);
	if (Number.isNaN(p) || Number.isNaN(c) || Number.isNaN(a) || Number.isNaN(m)) {
		return false;
	}
	const monthlyPercent = (p / 100) / 12;
	const loanBody = a - c;
	if (loanBody <= 0) {
		return 0;
	}
	const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), m) - 1)));
	const totalAmount = monthlyPayment * m;
	return Number(totalAmount.toFixed(2));
}