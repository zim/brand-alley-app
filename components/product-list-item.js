import Link from "next/link";
import clsx from "clsx";
import styles from "../styles/Grid.module.scss";

export default function ProductListItem({ product }) {
	console.log(product.free);

	return (
		<Link
			href="/products/product/[name]"
			as={`/products/product/${product.name}`}
		>
			<a
				className={clsx(
					styles.card,
					product.free && styles.blue,
					product.new && styles.green
				)}
			>
				<div>{product.name}</div>
			</a>
		</Link>
	);
}
