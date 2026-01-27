import Footer from "@/app/Footer";
import MoveUpButton from "@/app/MoveUpButton";
import Navbar from "@/app/Navbar";
import Info from "./Info";

export default function About() {
	return (
		<>
			<Navbar />
			<main>
				<Info />
			</main>

			<Footer />
			<MoveUpButton />
		</>
	);
}
