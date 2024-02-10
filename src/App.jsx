import { useState } from "react";
import Items from "./components/Items";

function App() {
	return (
		<div className="flex justify-center w-full h-screen bg-gradient-to-r from-indigo-700 to-blue-700">
			<div className="w-[50%] p-4">
				<Items />
			</div>
		</div>
	);
}

export default App;
