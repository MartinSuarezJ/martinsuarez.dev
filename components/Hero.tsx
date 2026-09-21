import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";


const Hero = () => {
    return (
        <div className = "pb-20 pt-36">
            <div>
               <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill = "white" />
               <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill = "orange" />
               <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill = "blue" />
            </div>

            <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 bg-grid-black-100 dark:bg-grid-white absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div 
                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_75%)]"
                />
            </div>

            <div className ="flex justify-center relative my-20 z-10">
                <div className ='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Transforming Innovation into Climate Solutions"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Martin Suarez BS/MS Mechanical Engineering Student @ Northwestern.
                    </p>

                    <a href = "#projects">
                        <MagicButton 
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;

