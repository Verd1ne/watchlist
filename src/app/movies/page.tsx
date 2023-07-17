"use client";
import React from "react";
import Navbar from "../components/navbar";
import HomeBanner from "../components/homeBanner";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

export default function page() {
	return (
		<div>
			<Navbar />
			<HomeBanner />
			<div className="border-b-2 flex flex-row mb-20 mx-40 pt-16 font-bold text-4xl">
				<div className="text-left">MOVIES</div>
				<div className="text-right grow">12</div>
			</div>

			<Splide hasTrack={false} aria-label="My Favorite Images">
				<SplideTrack>
					<SplideSlide>
						<img src="peakyBlindersBanner.jpg" alt="Image 1" />
					</SplideSlide>
					<SplideSlide>
						<img src="peakyBlindersBanner.jpg" alt="Image 2" />
					</SplideSlide>
				</SplideTrack>
				<div className="splide__arrows">
					<button className="splide__arrow splide__arrow--prev">Prev</button>
					<button className="splide__arrow splide__arrow--next">Next</button>
				</div>
			</Splide>
		</div>
	);
}
