import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaIntercom } from "react-icons/fa";

export default function Home() {
	return (
		<div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={[
					{name: "Home", link: "/", icon: <FaHome />},
					{name: "About", link: "/about", icon: <FaIntercom />}
				]} />
				<Hero />
			</div>
		</div>
	);
}
