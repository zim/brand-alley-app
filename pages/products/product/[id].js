import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

import Layout from "../../../components/layout";
import styles from "../../../styles/Grid.module.scss";

const fetcher = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	if (res.status !== 200) {
		throw new Error(data.message);
	}
	return data;
};

export default function Product() {
	const { query } = useRouter();
	const { data, error } = useSWR(
		() => query.id && `/api/products/${query.id}`,
		fetcher
	);

	console.log(data);

	if (error) return <div>{error.message}</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<Layout>
			<h1 className="title">{data.name}</h1>
			<p className="description">{data.description}</p>

			<Link href="/" as={`/`}>
				<a>Back to Product List</a>
			</Link>
		</Layout>
	);
}
