import { day1 } from "./days/day1.ts";

const days = [day1];

if (import.meta.main) {
	if (Deno.args.length === 0) {
		console.error("Please provide a day number as an argument.");
		Deno.exit(1);
	}

	console.log(`⛄️ Running day: ${Deno.args[0]} 🎄`);

	const day = parseInt(Deno.args[0]);

	const input = Deno.readTextFileSync(`./days/inputs/day${day}.txt`);

	days[day - 1](input);
	console.log("Solution: ", days[day - 1](input));
	console.log("🎄 Done! 🎄");
}
