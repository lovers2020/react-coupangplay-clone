import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        position: relative;
        width:100%;
        height:200vh; 
        font-family:'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size : 16px;
        font-weight: 400;
        line-height: 1.15;
        
    }
    * {
        box-sizing: border-box;
    }
 

`;

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
