/** @see https://adventofcode.com/2024/day/1 */

const part1 = (input: string): string => {
	const regex = /(\d+)\s+(\d+)/;

	const lines = input.split("\n");

	let list1: number[] = [];
	let list2: number[] = [];

	lines.forEach(line => {
		const match = regex.exec(line);

		if (match) {
			list1.push(parseInt(match[1]));
			list2.push(parseInt(match[2]));
		}
	});

	if (list1.length !== list2.length) {
		console.error("Lists are not the same length.");
		return "";
	}

	let differences: number[] = [];

	list1.sort();
	list2.sort();

	list1.forEach((num1, index) => {
		differences.push(Math.abs(num1 - list2[index]));
	});

	return differences.reduce((acc, curr) => acc + curr, 0).toString();
};

const part2 = (input: string): string => {
	const count: Record<number, number> = {};

	const regex = /(\d+)\s+(\d+)/;

	const lines = input.split("\n");

	let list1: number[] = [];
	let list2: number[] = [];

	lines.forEach(line => {
		const match = regex.exec(line);

		if (match) {
			list1.push(parseInt(match[1]));
			list2.push(parseInt(match[2]));

			count[parseInt(match[1])] = 0;
		}
	});

	list2.forEach(num => {
		if (!count[num] && count[num] !== 0) {
			return;
		}

		count[num] = count[num] + 1;
	});

	let similarities: number[] = [];

	Object.keys(count).forEach(key => {
		similarities.push(parseInt(key) * count[parseInt(key)]);
	});
	return similarities.reduce((acc, curr) => acc + curr, 0).toString();
};

export const day1 = {
	part1,
	part2,
};
