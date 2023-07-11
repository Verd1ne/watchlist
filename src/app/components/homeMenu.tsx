import React from "react";
import Image from "next/image";

export default function HomeMenu() {
	return (
		<div className="homeMenu text-white flex flex-row font-bold text-xl tracking-wider mb-40">
			<div className="menu-1 h-full w-1/3">
				<div className="bg-[url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w7zI2HzKY6YjiW3ArYhMqzjZN1I.jpg')] min-h-full w-1/3 bg-top absolute -z-10 opacity-20 bg-cover"></div>
				<div>
					<div className="border-b-2 flex flex-row w-[380px] mb-20 mx-auto pt-40">
						<div className="text-left">CONTINUE WATCHING</div>
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
					<button className="border-[1px] border-white py-4 w-[380px] mt-16 tracking-widest hover:bg-white hover:text-black hover:scale-105 transition ease duration-300">
						SEE ALL
					</button>
				</div>
			</div>
			<div className="menu-2 h-full w-1/3">
				<div className="bg-[url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w7zI2HzKY6YjiW3ArYhMqzjZN1I.jpg')] h-full w-1/3 bg-cover bg-top absolute -z-10 pb-20 pt-40 opacity-20"></div>
				<div>
					<div className="border-b-2 flex flex-row w-[380px] mb-20 mx-auto pt-40">
						<div className="text-left">MY LIST</div>
						<div className="text-right grow">12</div>
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
					<button className="border-[1px] border-white py-4 w-[380px] mt-16 tracking-widest hover:bg-white hover:text-black hover:scale-105 transition ease duration-300">
						SEE ALL
					</button>
				</div>
			</div>
			<div className="menu-3 h-full w-1/3">
				<div className="bg-[url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w7zI2HzKY6YjiW3ArYhMqzjZN1I.jpg')] h-full w-1/3 bg-cover bg-top absolute -z-10 pb-20 pt-40 opacity-20"></div>
				<div>
					<div className="border-b-2 flex flex-row w-[380px] mb-20 mx-auto pt-40">
						<div className="text-left">LATEST</div>
						<div className="text-right grow">34</div>
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
					<button className="border-[1px] border-white py-4 w-[380px] mt-16 tracking-widest hover:bg-white hover:text-black hover:scale-105 transition ease duration-300">
						SEE ALL
					</button>
				</div>
			</div>
		</div>
	);
}
