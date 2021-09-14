import { products } from "../products.json";
console.log(products);

export default function productHandler({ query: { id } }, res) {
	console.log("hellloooo");
	console.log(id);
	const filtered = products.filter((product) => product.name === id);

	// User with id exists
	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `Product with Name: ${id} not found.` });
	}
}
