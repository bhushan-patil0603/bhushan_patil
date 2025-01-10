import React from "react";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
export function Featured_project(){
    return(
        
			<div>
            <div
                id="projects"
                className="text-center text-[#333333] sm:mt-[5vw] mt-[10vw]"
            >
                <h1 className="font-semibold font-mono text-[7vw] sm:text-[4vw] p-2 ">
                    Featured Projects
                </h1>
            </div>
            <div className="flex flex-col gap-10">
                <div className="sm:w-[80%] m-auto mt-5">
                    <img
                        className="w-[85vw] m-auto rounded-lg sm:float-right sm:w-[38vw] sm:pt-8"
                        src="assets/Personal-Resume-Website.webp"
                        alt=""
                    />
                    <div className="w-[80%] m-auto sm:w-[48%] sm:m-0">
                        <div className="text-center m-4 sm:m-6">
                            <h1 className="font-semibold font-mono text-[5vw] sm:text-[3vw]">
                                Mess Management Website
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex justify-around items-center w-[80%] m-auto text-[10vw] sm:text-[4vw] mb-[4vw] sm:mb-[1vw]">
                                <FontAwesomeIcon className="text-[#e54d26]" icon={faHtml5} />
                                <FontAwesomeIcon
                                    className="text-[#3d8fc6]"
                                    icon={faCss3Alt}
                                />
                                <FontAwesomeIcon className="text-[#f0db4f]" icon={faJs} />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-[#555555] text-justify">
                                I developed and designed a website using ReactJS and
                                Bootstrap, hosted on Github Pages, to showcase my web
                                presence, story, work experience, education, projects, and
                                achievements in an interactive and visually-appealing format.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:w-[80%] m-auto mt-5">
                    <img
                        className="w-[85vw] m-auto rounded-md sm:float-left sm:w-[38vw] sm:pt-8"
                        src="assets/Personal-Resume-Website.webp"
                        alt=""
                    />
                    <div className="w-[80%] m-auto sm:w-[48%] sm:m-0 sm:float-right">
                        <div className="text-center m-4 sm:m-6">
                            <h1 className="font-semibold font-mono text-[5vw] sm:text-[3vw]">
                                Dynamic Invoice Generator
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex justify-around items-center w-[80%] m-auto text-[10vw] sm:text-[4vw] mb-[4vw] sm:mb-[1vw]">
                                <FontAwesomeIcon className="text-[#e54d26]" icon={faHtml5} />
                                <FontAwesomeIcon
                                    className="text-[#3d8fc6]"
                                    icon={faCss3Alt}
                                />
                                <FontAwesomeIcon className="text-[#f0db4f]" icon={faJs} />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-[#555555] text-justify">
                                I developed and designed a website using ReactJS and
                                Bootstrap, hosted on Github Pages, to showcase my web
                                presence, story, work experience, education, projects, and
                                achievements in an interactive and visually-appealing format.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:w-[80%] m-auto mt-5">
                    <img
                        className="w-[85vw] m-auto rounded-md sm:float-right sm:w-[38vw] sm:pt-8"
                        src="assets/Personal-Resume-Website.webp"
                        alt=""
                    />
                    <div className="w-[80%] m-auto sm:w-[48%] sm:m-0">
                        <div className="text-center m-4 sm:m-6">
                            <h1 className="font-semibold font-mono text-[5vw] sm:text-[3vw]">
                                Costom todo list webapp
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex justify-around items-center w-[80%] m-auto text-[10vw] sm:text-[4vw] mb-[4vw] sm:mb-[1vw]">
                                <FontAwesomeIcon className="text-[#e54d26]" icon={faHtml5} />
                                <FontAwesomeIcon
                                    className="text-[#3d8fc6]"
                                    icon={faCss3Alt}
                                />
                                <FontAwesomeIcon className="text-[#f0db4f]" icon={faJs} />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-[#555555] text-justify">
                                I developed and designed a website using ReactJS and
                                Bootstrap, hosted on Github Pages, to showcase my web
                                presence, story, work experience, education, projects, and
                                achievements in an interactive and visually-appealing format.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}