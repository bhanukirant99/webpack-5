import _ from "lodash";
import "./App.css";

const App = ({ name }) => {
  console.log("Awesome!")

	return `
    <h2> ${_.join(["Welcome,", name], " ")} </h2>
    <p> Build apps with plain JS but with modern toolin!  </p>
    `;
};

export default App