import { useState } from "react";
import "./App.css";
import { Header } from "./ui/components/header";
import { Footer } from "./ui/components/footer";
import { Preferred_tech } from "./ui/components/preferred_tech";
import { Featured_project } from "./ui/components/featured_projects";
import { Mystory } from "./ui/components/myStory";

function App() {
	return (
		<>
			<Header />
			<Preferred_tech/>
			<Featured_project/>
			<Mystory/>
			<Footer/>
		</>
	);
}

export default App;
