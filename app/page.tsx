import { Spotlight } from "@/components/ui/SpotLight";

export default function Home() {
	return (
		<div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<Spotlight
					className="-top-40 -left-10 md:-left-20 md:-top-10 h-[80vh]"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[60vw]"
					fill="white"
				/>
				<Spotlight className="top-28 left-80 h-[60vh] w-[50vw]" fill="orange" />
			</div>

			<div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			<div className="flex justify-center">
				<div className="max-w-[89vw]"></div>
			</div>
		</div>
	);
}
