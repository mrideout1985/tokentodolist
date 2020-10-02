import React, { useState } from "react";
import styles from "./todolist.module.scss";

const Todolist = () => {
	const myTodo: any = [];

	const [input, setInput] = useState("");
	const [todo, setTodo] = useState(myTodo);

	console.log(todo);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTodo([...todo, { id: Date.now(), text: input }]);
		e.target.reset();
	};

	const removeFromList = (id: number) => {
		setTodo(todo.filter((e: any) => e.id !== id));
	};

	// const colours = ["#feb236", "#d64161", "#ff7b25"];

	// const randomColour = () => {
	// 	let a = Math.random() * 2;
	// 	let b: any = a.toFixed(0);
	// 	return colours[b];
	// };

	return (
		<div className={styles["container"]}>
			<div className={styles["container__input"]}>
				<form onSubmit={handleSubmit}>
					<input
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							e.preventDefault();
							setInput(e.target.value);
						}}
					/>
				</form>
			</div>

			<div className={styles["container__list"]}>
				{todo.map((el: any) => (
					<div
						className={styles["todos"]}
						key={el.id}
						// style={{ backgroundColor: `${randomColour()}` }}
						onClick={() => removeFromList(el.id)}
					>
						{el.text}
					</div>
				))}
			</div>
		</div>
	);
};

export { Todolist };
