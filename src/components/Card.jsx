import React from "react";
import divider from "../assets/pattern-divider-desktop.svg";
import DiceButton from "./DiceButton";
import { useQuery } from "react-query";
import getQuotes from "../api/getQuotes";
import Spinner from "./spinner";

export default function Card() {
	const { isLoading, isError, data, error, refetch } = useQuery(
		"quotes",
		getQuotes,
		{
			staleTime: Infinity,
		}
	);

	const onClick = () => {
		refetch();
	};

	return !isLoading ? (
		<div class="relative max-w-sm p-6 rounded-lg bg-[#323A49] shadow-lg grid">
			<p className=" text-[12px] tracking-[3px]">ADVICE #{data.id}</p>
			<a href="#">
				<p className="mb-2 text-[28px] text-gray-900 dark:text-white">
					"{data.advice}"
				</p>
			</a>
			<div className="pt-2">
				<img src={divider} />
			</div>

			<div class="flex items-center justify-center pt-5">
				<DiceButton onClick={onClick} />
			</div>
		</div>
	) : (
		<div class="grid place-items-center items-center relative max-w-sm p-6 rounded-lg bg-[#323A49] shadow-lg">
			<Spinner />
			<div className="pt-2">
				<img src={divider} />
			</div>

			<div class="flex items-center justify-center pt-5">
				<DiceButton onClick={onClick} />
			</div>
		</div>
	);
}
