import React from "react";

export default function movieCard({ backdrop_path, title, popularity }: any) {
	return (
		<div>
			<img
				src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`}
				alt={title}
			/>
			<div>{title}</div>
			<div>{popularity}</div>
		</div>
	);
}
