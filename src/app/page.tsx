import React from "react";
import Navbar from "./components/navbar";
import HomeBanner from "./components/homeBanner";
import HomeMenu from "./components/homeMenu";

export default function page() {
	return (
		<div className="homePage">
			<Navbar />
			<HomeBanner />
			<HomeMenu />
		</div>
	);
}
