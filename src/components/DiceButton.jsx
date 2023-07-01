import React from "react";
import dice from "../assets/icon-dice.svg";

export default function DiceButton({ onClick }) {
	return (
		<div
			className=" shadow absolute flex hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)] justify-center items-center bg-[#52FFA8] rounded-full w-12 h-12 bottom-[-25px] cursor-pointer"
			onClick={onClick}
		>
			<img src={dice} className="justify-center items-center" />
		</div>
	);
}
