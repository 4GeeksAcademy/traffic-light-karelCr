import React, { useState } from "react";


//create your first component
const Home = () => {
	const [selectedColor,setSelectedColor] = useState("red");
	return (
		<div className="text-center">
			<div className="flex"><div className="stick"></div></div>
			
			<div className="box">
				
				<div 
				onClick ={()=> setSelectedColor("red")}
				className={"red light" + ((selectedColor === "red") ? " glow" : "")}></div>
				<div 
				onClick ={()=> setSelectedColor("yellow")}
				className={"yellow light" + ((selectedColor ==="yellow") ? " glow":"")}></div>
				<div 
				onClick ={()=> setSelectedColor("green")}
				className={"green light" + ((selectedColor === "green") ? " glow" : "")}></div>
				
			</div>
		</div>
	);
};

export default Home;
