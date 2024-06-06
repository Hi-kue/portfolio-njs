import React from 'react'

import { Spotlight } from '@/components/ui/SpotLight'
import { MagicButton } from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerator";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                {/* start: SpotLights */}
				<Spotlight
					className="-top-40 -left-10 md:-left-20 md:-top-10 h-[60vh]"
					fill="purple"
				/>
				<Spotlight
					className="-top-80 left-10 md:-left-20 md:top-10 h-[150vh]"
					fill="purple"
				/>
				<Spotlight
					className="-top-20 left-full h-[80vh] w-[60vw]"
					fill="white"
				/>
				<Spotlight className="top-28 left-80 h-[60vh] w-[40vw]" fill="orange" />
				{/* end: SpotLights */}
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] flex items-center justify-center absolute top-0 left-0">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<h2 className="uppercase tracking-widest text-xs text-center max-w-80">
						Muhammad Bilal Khan | Hi-kue
					</h2>
					<TextGenerateEffect
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
						words="Designer & Aspiring Software Engineer"
					/>
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hello! I&apos;m Bilal Khan, or BK. An aspiring software engineer
						based in Canada.
					</p>
					<a href="#about">
						<MagicButton 
							title="Show My Work" 
							position="right"
							icon= {<FaLocationArrow/>}
							otherClasses="gap-2"
						/>
					</a>
				</div>
			</div>
        </div>
    )
}

export default Hero