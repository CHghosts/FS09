const populations = [
	{ id: 0, name: "Alan" },
	{ id: 1, name: "Albert" },
	{ id: 2, name: "Jhon" },
	{ id: 3, name: "Brice" },
	{ id: 4, name: "Alexendra" },
	{ id: 5, name: "Brad" },
	{ id: 6, name: "Carl" },
	{ id: 7, name: "Dallas" },
	{ id: 8, name: "Dennis" },
	{ id: 9, name: "Edgar" },
	{ id: 10, name: "Erika" },
	{ id: 11, name: "Isaac" },
	{ id: 12, name: "Ian" },
];

populations.sort((a, b) => a.name.length - b.name.length);

console.log(populations);
console.log('-----------------------------------------------------');
for (const population of populations) {
	population.lenName = population.name.length;
}
console.log(populations);
console.log('-----------------------------------------------------');

const lenName = new Set(populations.map((population) => population.lenName));
console.log(lenName);