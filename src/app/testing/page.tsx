import React from "react";
import { moviesUrl } from "../constant";

const API_KEY = "?api_key=96a0f6de0d8648b87be78503fc99fb76";
const BASE_URL = moviesUrl;
const API_URL = BASE_URL + API_KEY;

async function getData(): Promise<any> {
	const res = await fetch(API_URL);
	const data = await res.json();
	return new Promise<string>((resolve, reject) => {
		resolve(data.results);
		reject(new Error("failed"));
	});
}
let movieData = {};
export default function page() {
	getData()
		.then((data) => {
			movieData = data; // console.log(`Success: ${JSON.stringify(data)}`);
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
		});
	console.log("hello world!");
	console.log(`Success: ${movieData}`);

	return (
		<div className="font-white">
			<div>{JSON.stringify(movieData)}</div>
		</div>
	);
}
