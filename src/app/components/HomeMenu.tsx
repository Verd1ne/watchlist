"use client";
import React from "react";
import Image from "next/image";
import ParticleBackground from "./particleBackground";

export default function HomeMenu() {
	return (
		<div className="homeMenu text-white flex flex-row font-bold text-xl tracking-wider h-screen mb-20">
			<ParticleBackground />
			<div className="menu-1 h-full w-1/3">
				<div>
					<div className="border-b-2 flex flex-row w-[380px] mb-20 mx-auto pt-16">
						<div className="text-left">RECOMMENDED</div>
						<div className="text-right grow">8</div>
					</div>
				</div>
				<Image
					src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w7zI2HzKY6YjiW3ArYhMqzjZN1I.jpg"
					alt="Movie Banner"
					className="mx-auto"
					width={380}
					height={500}
				/>
				<div className="mx-auto w-[380px]">
					<a href="/my-list">
						<button className="border-[1px] border-white py-4 w-[380px] mt-16 tracking-widest hover:bg-white hover:text-black hover:scale-105 transition ease duration-300">
							SEE ALL
						</button>
					</a>
				</div>
			</div>
			<div className="menu-2 h-full w-1/3">
				<div>
					<div className="border-b-2 flex flex-row w-[380px] mb-20 mx-auto pt-16">
						<div className="text-left">MOVIES</div>
						<div className="text-right grow">12</div>
					</div>
				</div>
				<Image
					src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l1f9JSPjCfNftigEii1SDK1g2b3.jpg"
					alt="Movie Banner"
					className="mx-auto"
					width={380}
					height={500}
				/>
				<div className="mx-auto w-[380px]">
					<a href="/movies">
						<button className="border-[1px] border-white py-4 w-[380px] mt-16 tracking-widest hover:bg-white hover:text-black hover:scale-105 transition ease duration-300">
							SEE ALL
						</button>
					</a>
				</div>
			</div>
			<div className="menu-3 h-full w-1/3">
				<div>
					<div className="border-b-2 flex flex-row w-[380px] mb-20 mx-auto pt-16">
						<div className="text-left">TV SHOW</div>
						<div className="text-right grow">34</div>
					</div>
				</div>
				<Image
					src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8CYSvYTw9tbFynivdcBcoqRWPGM.jpg"
					alt="Movie Banner"
					className="mx-auto"
					width={380}
					height={500}
				/>
				<div className="mx-auto w-[380px]">
					<a href="/tv-show">
						<button className="border-[1px] border-white py-4 w-[380px] mt-16 tracking-widest hover:bg-white hover:text-black hover:scale-105 transition ease duration-300">
							SEE ALL
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
