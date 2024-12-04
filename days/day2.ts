/** @see https://adventofcode.com/2024/day/2 */

function compare(arr1: number[], arr2: number[]): boolean {
	const eq: boolean[] = [];
	arr1.forEach((num, i) => {
		if (num == arr2[i]) eq.push(true);
		else eq.push(false);
	});

	return !eq.includes(false);
}

const part1 = (input: string): string => {
	const minThreshold = 1;
	const maxThreshold = 3;

	const lines = input.split("\n");
	let safeCount = 0;

	lines.forEach(line => {
		// @ts-ignore
		const levels: number[] = line.split(" ");

		const increasing = [...levels].sort((a, b) => a - b);
		const decreasing = [...levels].sort((a, b) => b - a);

		if (compare(levels, increasing) || compare(levels, decreasing)) {
			const isSafe: boolean[] = [];
			[...levels].sort((a, b) => {
				if (minThreshold <= Math.abs(a - b) && Math.abs(a - b) <= maxThreshold) {
					isSafe.push(true);
				} else isSafe.push(false);
				return 0;
			});
			if (!isSafe.includes(false)) safeCount++;
		}
	});

	return safeCount.toString();
};

function isSafe(levels: number[]): boolean {
	const minThreshold = 1;
	const maxThreshold = 3;

	// Check if the report is strictly increasing or strictly decreasing
	const increasing = [...levels].sort((a, b) => a - b);
	const decreasing = [...levels].sort((a, b) => b - a);

	// First check if it's strictly increasing or strictly decreasing
	if (compare(levels, increasing) || compare(levels, decreasing)) {
		// Then check if the differences between adjacent levels are within the allowed range
		for (let i = 1; i < levels.length; i++) {
			const diff = Math.abs(levels[i] - levels[i - 1]);
			if (diff < minThreshold || diff > maxThreshold) {
				return false;
			}
		}
		return true;
	}

	return false;
}

const part2 = (input: string): string => {
	const lines = input.split("\n");
	let safeCount = 0;

	lines.forEach(line => {
		const levels: number[] = line.split(" ").map(Number);

		if (isSafe(levels)) {
			safeCount++;
		} else {
			let safeWithOneRemoval = false;

			for (let i = 0; i < levels.length; i++) {
				const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];

				if (isSafe(modifiedLevels)) {
					safeWithOneRemoval = true;
					break; // No need to check further, one removal made it safe
				}
			}

			if (safeWithOneRemoval) {
				safeCount++;
			}
		}
	});

	return safeCount.toString();
};

export const day2 = {
	part1,
	part2,
};
