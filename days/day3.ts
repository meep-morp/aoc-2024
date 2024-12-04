/** @see https://adventofcode.com/2024/day/3 */

const part1 = (input: string): string => {
	const regex = /mul\((\d+),(\d+)\)/g;
	let match: RegExpExecArray | null;
	let totalSum = 0;

	while ((match = regex.exec(input)) !== null) {
		const num1 = parseInt(match[1], 10);
		const num2 = parseInt(match[2], 10);
		totalSum += num1 * num2;
	}

	return totalSum.toString();
};

const part2 = (input: string): string => {
	let totalSum = 0;
	let enabled = true;

	const mulRegex = /mul\((\d+),(\d+)\)/g;
	const doRegex = /do\(\)/g;
	const dontRegex = /don't\(\)/g;

	let position = 0;

	while (position < input.length) {
		const mulMatch = mulRegex.exec(input.slice(position));
		const doMatch = doRegex.exec(input.slice(position));
		const dontMatch = dontRegex.exec(input.slice(position));

		if (mulMatch) {
			const num1 = parseInt(mulMatch[1], 10);
			const num2 = parseInt(mulMatch[2], 10);

			if (enabled) {
				totalSum += num1 * num2;
			}

			position += mulMatch.index + mulMatch[0].length;
		} else if (doMatch) {
			enabled = true;
			position += doMatch.index + doMatch[0].length;
		} else if (dontMatch) {
			enabled = false;
			position += dontMatch.index + dontMatch[0].length;
		} else {
			position++;
		}
	}

	return totalSum.toString();
};

export const day3 = {
	part1,
	part2,
};
