import App from "./App";

import Logo from "./logo.svg";

const root = document.getElementById("root");

root.innerHTML = `
<img src="${Logo}" alt="" />
<h2>Learning tooling! ${App({ name: "Kushank" })}</h2>`;
