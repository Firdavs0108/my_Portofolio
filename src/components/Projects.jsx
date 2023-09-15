import React, { useState } from "react";

import kitchen from "../assets/chef.png";
import kitchen2 from "../assets/welcome.png";
import Mek from "../assets/mek.png";
import Mek2 from "../assets/mek2.png";
import Houzing from "../assets/houzing-2.jpg";
import Houzing2 from "../assets/houzing.png";
import Memory from "../assets/game-1.jpg";
import Memory2 from "../assets/mole.jpg";
import Logo2 from "../assets/logo3.png";
import Logo from "../assets/bankist-landing-2.jpg";
import { FaTimes } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import Img3 from "../assets/cosmos-3.jpg";
import "../style/projects.css";
function Projects() {
	const projectList = [
		{
			name: "E-Catalog",
			tools: "Html, Css, Javascript",
			mainPic: Logo,
			webPic: Logo2,
			type: "electron catalog",
			info: " It is awesome electron catalog and short slide information about company ",
			link: "https://ecatalog.netlify.app/",
			gitLink: "https://github.com/Firdavs0108/atechelthermo_en",
		},
		{
			name: "Whac a Mole",
			tools: "Html, Css, JavaScript",
			mainPic: Memory,
			webPic: Memory2,
			type: "Web-Game",
			info: "The Whac-a-Mole kids game is a silly, whacky, bopping blast with lights and delightful sounds that can be played alone or with a friend! ",
			link: "https://firstprojectbynazarov.netlify.app/",
			gitLink: "https://github.com/Firdavs0108/New-Project",
		},
		
		{
			
			name: "Fred Kitchen",
			tools: "React JS, Styled Component",
			mainPic: kitchen,
			webPic: kitchen2,
			type: "Simple online fred_kitchen app",
			info: "This application allows users to login, select and order foods",
			link: "https://fndevrestaurant.netlify.app/",
			gitLink: "https://github.com/Firdavs0108/fred-restaurant",
		},
		{
			name: "Houzing",
			tools: "React JS / Styled Component / Swagger ",
			mainPic: Houzing,
			webPic: Houzing2,
			type: "This site is for selling, renting and buying houses.",
			info: "This is fully developed web-site which integrates with back-end also. There are almost all the features and parts that modern site can contain in this site. It is almost finished, I am STILL WORKING on it ",
			link: "https://houzingkor.netlify.app/",
			gitLink: "https://github.com/Firdavs0108/houzing-with-antd-master",
		},
		{
			name: "MEK",
			tools: "Html,Css,Javascript,PHP",
			mainPic: Mek,
			webPic: Mek2,
			type: "MEK Wepsite Homepage",
			info: "It is official Homepage of MEK company with many facilities",
			link: "https://mek0209.netlify.app/",
			gitLink: "https://github.com/Firdavs0108/mek_new",
		},
	];

	const [click, setClick] = useState({ show: false, id: "" });

	const clickHandler = (n) => setClick({ show: true, id: n });
	const clickExit = () => setClick({ show: false, id: "" });

	return (
		<Parallax
			// blur={10}
			bgImage={Img3}
			bgImageAlt="the cat"
			strength={200}
		>
			<div className="projects" id="projects">
				<h1 className="projects__header">Projects</h1>
				<div className="projects__grid">
					{projectList.map((val, index) => {
						// console.log(projectList);
						return (
							<div className="projects__project1 projects__project">
								<img
									src={val.mainPic}
									alt="projects picture"
									className="projects__img"
								/>
								<div className="projects__top">
									<h1>{val.name}</h1>
									<h2>{val.tools}</h2>
								</div>
								<div className="projects__bottom">
									<button
										className="projects__btn--1 projects__btn"
										onClick={() => clickHandler(index)}
									>
										Learn More
									</button>
								</div>
								
								{click.show && (
									<div className={"projects__overlay"}>
										<div className={"projects__learn-more-box"}>
											<img
												src={projectList[click.id].webPic}
												alt="web picture"
												className="projects__webpics"
											/>

											<div className="projects__content">
												<h1>{projectList[click.id].name}</h1>
												<h2>{projectList[click.id].type}</h2>
												<p>{projectList[click.id].info}</p>
												<div className="projects__visit-site-box">
													<div className="row">
														<button className="projects__btn--2 projects__btn">
															<a
																href={projectList[click.id].link}
																target="_blank"
																className="projects__link"
															>
																Visit Site
															</a>
														</button>
														<button className="projects__btn--2 projects__btn">
															<a
																href={projectList[click.id].gitLink}
																target="_blank"
																className="projects__link"
															>
																See Code
															</a>
														</button>
													</div>

													<FaTimes
														className="projects__exit"
														onClick={clickExit}
													/>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</Parallax>
	);
}
export default Projects;
