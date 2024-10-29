import Card from "./components/Card";

function App() {
	return (
		<div>
			<input
				type="text"
				placeholder="Rechercher un étudiant 🔍"
				className="search"
			/>
			<main className="container">
				<Card />
				<Card />
				<Card />
				<Card />
			</main>
		</div>
	);
}

export default App;
