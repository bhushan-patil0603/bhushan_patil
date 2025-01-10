import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
	return (
		<div className="header w-[100%] h-[100vh] bg-gradient-to-r from-[#2B32B2] to-[#1488CC] relative flex items-center justify-center">
			{/* <video className="blur-sm" autoplay muted loop id="myVideo">
  				<source src="assets/background_video.mp4" type="video/mp4"/>
  				Your browser does not support HTML5 video.
			</video> */}
			<div className="absolute flex flex-col items-center justify-center text-white ">
				<div className="flex flex-col sm:flex-row text-[11vw] sm:text-[6vw] justify-center items-center gap-[2vw]">
					<h1 className="font-semibold font-[rubik] ">BHUSHAN</h1>
					<h1 className="font-semibold font-[rubik]">RAMKRISHNA</h1>
					<h1 className="font-semibold font-[rubik]">PATIL</h1>
				</div>
				<h1 className="font-semibold font-mono text-[7vw] sm:text-[4vw]">
					<span>&#8226;</span>Web Developer<span>&#8226;</span>
				</h1>
				<div className="flex gap-[2vw] text-[8vw] sm:text-[4vw] m-6">
					<a href="https://github.com/bhushan-patil0603">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a href="https://pbhushan0603@gmail.com">
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
					<a href="https://pbhushan0603@gmail.com">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
				<div className="flex gap-[2vw] 4vw sm:text-[2vw]">
					<a href="#about">About me</a>
					<a href="#projects">Projects</a>
				</div>
			</div>
		</div>
	);
};
