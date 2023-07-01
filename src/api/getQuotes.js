import axios from "axios";

const getQuotes = async () => {
	const data = await axios.get("https://api.adviceslip.com/advice");
	return data.data.slip;
};
export default getQuotes;
