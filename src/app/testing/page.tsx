import React from "react";

async function getData() {
	const res = await fetch(
		"https://api.themoviedb.org/3/movie/11?api_key=96a0f6de0d8648b87be78503fc99fb76"
	);
	const data = await res.json();
}
export default async function page() {
	// console.log(data);
	return <div>{data}</div>;
}
