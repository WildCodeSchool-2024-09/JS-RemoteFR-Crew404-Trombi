import Card from "./components/Card";
import Footer from "./components/Footer";
import students from "./data/students.json";

function App() {
	return (
		<div className="container">
			<input
				type="text"
				placeholder="Rechercher un étudiant 🔍"
				className="search"
			/>
			<main className="cards">
				{students.map((student) => (
					<Card
						key={student.id}
						fullname={student.fullname}
						github={student.github}
						linkedin={student.linkedin}
						avatar={student.avatar}
					/>
				))}
			</main>
			<Footer />
		</div>
	);
}

export default App;
