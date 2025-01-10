import React from "react";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
export function Preferred_tech(){
    return(
        
			<div>
            <div className="text-center text-[#333333] sm:mt-[5vw] mt-[10vw]">
                <h1 className="font-semibold font-mono text-[7vw] sm:text-[4vw] p-2">
                    Preferred Technologies
                </h1>
            </div>
            <div>
                <div className="flex justify-around items-center w-[80%] m-auto text-[10vw] sm:text-[7vw]">
                    <FontAwesomeIcon className="text-[#e54d26]" icon={faHtml5} />
                    <FontAwesomeIcon className="text-[#3d8fc6]" icon={faCss3Alt} />
                    <FontAwesomeIcon className="text-[#f0db4f]" icon={faJs} />
                    <FontAwesomeIcon className="text-[#61dafb]" icon={faReact} />
                    <FontAwesomeIcon className="text-[#ea2d2e]" icon={faJava} />
                </div>
            </div>
        </div>
    )
}