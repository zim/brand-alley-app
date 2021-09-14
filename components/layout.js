import Head from "next/head";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Brand Alley Test</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>Created by Jolyon Segal</footer>
		</div>
	);
}