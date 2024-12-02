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

const part2 = (input: string): string => {
	return "";
};

export const day2 = {
	part1,
	part2,
};
