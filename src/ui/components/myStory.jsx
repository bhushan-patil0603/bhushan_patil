import React from "react";
export function Mystory(){
    return(
        
			<div className="w-[80%] m-auto">
            <div
                id="about"
                className="text-center text-[#333333] sm:mt-[5vw] mt-[10vw]"
            >
                <h1 className="font-semibold font-mono text-[7vw] sm:text-[4vw] p-2 ">
                    My Story
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-[3vw] sm:mt-[3vw]">
                <img
                    className="w-[15vw] rounded-[50%] mb-[3vw] sm:mb-[1vw]"
                    src="assets/Professional-Picture-Me.webp"
                    alt=""
                />
                <div className="text-[#555555] text-justify">
                    <p>
                        I am a junior in the College of Information and Computer Sciences
                        at the University of Massachusetts Amherst, pursuing an
                        undergraduate degree. I am majoring in Computer Science, with
                        intent to double major in Mathematics with Statistics and Data
                        Science concentration. I'm involved as a Software Developer for
                        BUILD UMass, where I use my software engineering skills for
                        pro-bono app/web development and tech consulting for the Amherst
                        community. I also serve as a Designer for the HackUMass Organizing
                        Team, responsible for graphics design and production for the
                        annual hackathon. I am interested in exploring the fields of
                        Software Engineering, Data Science, and Machine Learning, and I am
                        open to opportunities for the same.
                    </p>
                </div>
            </div>
        </div>
    )
}