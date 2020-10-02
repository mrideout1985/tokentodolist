import React from "react";
import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles["header"]}>
			<h1>Token To-Do List</h1>
		</header>
	);
};

export { Header };
