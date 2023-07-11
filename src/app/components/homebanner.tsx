"use client";
import React from "react";
import Image from "next/image";
import peakyBlindersBanner from "../../../public/peakyBlindersText.png";

export default function HomeBanner() {
	return (
		<div className="homeBanner aspect-[9/4] max-h-[750px] bg-cover">
			<div className="homeBannerCasing h-full w-full">
				<Image
					className="titleImage pl-12"
					src={peakyBlindersBanner}
					alt="movie text"
					width={600}
				/>
				<div className="infochips mt-8 text-white flex flex-row place-content-between max-w-[350px] ml-52 tracking-wider">
					<div>2013</div>
					<div className="border p-1 -m-1 rounded-md">16+</div>
					<div>IMDB 8.8</div>
					<div>6 seasons</div>
				</div>
				<div className="moviedescription ml-52 text-white max-w-[500px] mt-16 tracking-wide text-left">
					Peaky Blinders is a crime drama centred on a family of mixed Irish
					Traveller and Romani origins based in Birmingham, England, starting in
					1919, several months after the end of the First World War. It centres
					on the Peaky Blinders street gang and their ambitious, cunning crime
					boss Tommy Shelby.
				</div>
			</div>
		</div>
	);
}
