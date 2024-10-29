import { useState } from "react";

import Card from "./components/Card";
import Footer from "./components/Footer";
import students from "./data/students.json";

function App() {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState(students);

	const filterStudents = (search: string) => {
		const filteredStudents = students.filter((student) =>
			student.fullname.toLowerCase().includes(search.toLowerCase())
		);
		setFilter(filteredStudents);
	};

	return (
		<div className="container">
			<h1>La team 404 au complet</h1>
			<input
				type="text"
				placeholder="Rechercher un étudiant 🔍"
				className="search"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					filterStudents(e.target.value);
				}}
			/>
			<main className="cards">
				{filter.map((student) => (
					<Card
						key={student.id}
						fullname={student.fullname}
						github={student.github}
						linkedin={student.linkedin}
						avatar={student.avatar}
						description={student.description}
					/>
				))}
			</main>
			<Footer />
		</div>
	);
}

export default App;
