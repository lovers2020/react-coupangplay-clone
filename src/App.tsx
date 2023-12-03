import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componenets/common/Layout";
import NotFound from "./componenets/common/Notfound";
import Home from "./screen/Home";
import { EtcPages } from "./componenets/common/EtcPages";
import Movie from "./screen/Movie";
import Tv from "./screen/Tv";
import LikedContents from "./screen/LikedContents";
import { Helmet } from "react-helmet";
import Search from "./screen/Search";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout />,
			errorElement: <NotFound />,
			children: [
				{
					path: "",
					element: <Home />,
				},
				{
					path: "tv",
					element: <Tv />,
				},
				{
					path: "movies",
					element: <Movie />,
				},
				{
					path: "sports",
					element: <EtcPages />,
				},
				{
					path: "store",
					element: <EtcPages />,
				},
				{
					path: "kids",
					element: <EtcPages />,
				},
				{
					path: "news",
					element: <EtcPages />,
				},
				{
					path: "likedcontents",
					element: <LikedContents />,
				},
				{
					path: "search",
					element: <Search />,
				},
			],
		},
	],
	{ basename: "/react-coupangplay-clone/" }
);

function App() {
	return (
		<>
			<Helmet>
				<title>쿠팡플레이</title>
			</Helmet>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
