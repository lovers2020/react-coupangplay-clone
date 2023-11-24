import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componenets/Layout";
import NotFound from "./componenets/Notfound";
import Home from "./screen/Home";
import { EtcPages } from "./componenets/EtcPages";
import Movie from "./screen/Movie";
import Tv from "./screen/Tv";

const router = createBrowserRouter([
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
				path: "/tv",
				element: <Tv />,
			},
			{
				path: "movies",
				element: <Movie />,
			},
			{
				path: "/sports",
				element: <EtcPages />,
			},
			{
				path: "/store",
				element: <EtcPages />,
			},
			{
				path: "/kids",
				element: <EtcPages />,
			},
			{
				path: "/news",
				element: <EtcPages />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />;
		</>
	);
}

export default App;
