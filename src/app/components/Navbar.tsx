import React from "react";

export default function Navbar() {
	return (
		<nav className="border-gray-200 bg-black font-montserrat text-xl duration-300 font-extrabold">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
				<a href="/" className="h-full">
					<img
						src="../../../netflix_logo.png"
						className="h-16 mr-3"
						alt="Netflix Logo"
					/>
				</a>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 py-4"
					id="navbar-search"
				>
					<div className="relative mt-3 md:hidden">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="search-navbar"
							className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
							placeholder="Search..."
						/>
					</div>
					<ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-black  dark:border-gray-700">
						<li>
							<a
								href="#"
								className="block py-2 px-6  md:hover:bg-transparent md:p-0 text-slate-300 duration-300 hover:-translate-y-0.5"
								aria-current="page"
							>
								Recommended
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-6  md:hover:bg-transparent md:p-0 text-slate-300 duration-300 hover:-translate-y-0.5"
							>
								Movies
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-6  md:hover:bg-transparent md:p-0 text-slate-300 duration-300 hover:-translate-y-0.5"
							>
								TV Show
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
