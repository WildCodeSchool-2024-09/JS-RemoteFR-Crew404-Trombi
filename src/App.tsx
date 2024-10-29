import Card from "./components/Card";
import students from "./data/students.json";

function App() {
	return (
		<div>
			<input
				type="text"
				placeholder="Rechercher un étudiant 🔍"
				className="search"
			/>
			<main className="container">
				{students.map((student) => (
					<Card
						fullname={student.fullname}
						github={student.github}
						linkedin={student.linkedin}
						avatar={student.avatar}
						description={student.description}
					/>
				))}
			</main>
		</div>
	);
}

export default App;
