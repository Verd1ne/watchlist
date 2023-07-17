import React from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import HomeMenu from "./components/HomeMenu";

export default function page() {
	return (
		<div className="homePage">
			<Navbar />
			<HomeBanner />
			<HomeMenu />
		</div>
	);
}
