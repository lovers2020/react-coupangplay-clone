import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componenets/common/Layout";
import NotFound from "./componenets/common/Notfound";
import Home from "./screen/Home";
import { EtcPages } from "./componenets/common/EtcPages";
import Movie from "./screen/Movie";
import LikedContents from "./screen/LikedContents";
import { Helmet } from "react-helmet";
import Search from "./screen/Search";
import { DetailScreen } from "./screen/DetailScreen";
import SearchResult from "./screen/SearchResult";

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
					path: ":tvid",
					element: <DetailScreen />,
				},
				{
					path: "movies",
					element: <Movie />,
				},
				{
					path: "movies/:moviesid",
					element: <DetailScreen />,
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
					element: <EtcPages />,
				},
				{
					path: "search",
					element: <Search />,
					children: [
						{
							path: ":keyword",
							element: <SearchResult />,
						},
					],
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
