import React from "react";
import dice from "../assets/icon-dice.svg";

export default function DiceButton({ onClick }) {
	return (
		<div
			className=" shadow absolute flex hover:shadow-lg hover:shadow-[#52FFA8] hover:w-14 hover:h-14 hover:bottom-[-25px] justify-center items-center bg-[#52FFA8] rounded-full w-12 h-12 bottom-[-25px] cursor-pointer"
			onClick={onClick}
		>
			<img src={dice} className="justify-center items-center" />
		</div>
	);
}
