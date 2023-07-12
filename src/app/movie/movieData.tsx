"use client";
import React, { useEffect, useState } from "react";
import { moviesUrl } from "../constant";
import axios from "axios";
import MovieCard from "./movieCard";

const API_KEY = "?api_key=96a0f6de0d8648b87be78503fc99fb76";
const BASE_URL = moviesUrl;
const API_URL = BASE_URL + API_KEY;

interface movie {
	backdrop_path: string;
	title: string;
	popularity: string;
}

export default function MovieData() {
	const [movieData, setmovieData] = useState([]);
	useEffect(() => {
		axios
			.get(`${API_URL}`)
			.then((response) => {
				// handle success
				return setmovieData(response.data.results);
			})
			.catch((error) => {
				//handle errors
				console.log(new Error(error));
			});
	}, []);
	return (
		<div>
			{...movieData}
			{movieData.map(({ movie, index }: { movie: movie; index: string }) => {
				return <MovieCard key={index} {...movie} />;
			})}
		</div>
	);
}
