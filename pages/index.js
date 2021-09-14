import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Grid.module.scss";

import Products from "./api/products.json";
import ProductList from "../components/product-list";

// console.log(Products);

export default function Home() {
	return (
		<Layout>
			<h1 className="title-home">Product List</h1>

			<div className={styles.grid}>
				<ProductList products={Products} />
			</div>
		</Layout>
	);
}
