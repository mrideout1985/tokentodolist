import React from "react";
import { Layout } from "./pages/layout";
import styles from "./App.module.scss";
import "./main.scss";
import { Todolist } from "./components/todo/todolist";

function App() {
	return (
		<>
			<Layout>
				<div className={styles["main"]}>
					<Todolist />
				</div>
			</Layout>
		</>
	);
}

export default App;
