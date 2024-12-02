export const day1 = (input: string): string => {
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
