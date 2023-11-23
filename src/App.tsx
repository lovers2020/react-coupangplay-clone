import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componenets/Layout";
import NotFound from "./componenets/Notfound";
import Home from "./screen/Home";

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
