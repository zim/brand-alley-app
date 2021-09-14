import React, { useState, useEffect } from "react";
import styles from "../styles/Grid.module.scss";
import ProductListItem from "./product-list-item";

export const ProductList = ({ products }) => {
	return (
		<>
			{products["products"].map((product, i) => (
				<ProductListItem key={product.name} product={product} />
			))}
		</>
	);
};

export default ProductList;
