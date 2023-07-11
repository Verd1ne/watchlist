import React from "react";
import Navbar from "./components/navbar";
import HomeBanner from "./components/homebanner";
// import MovieData from "./movie/movieData";

export default function page() {
	return (
		<div>
			<Navbar />
			<HomeBanner />
		</div>
	);
}
