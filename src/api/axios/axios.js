import axios from "axios";

const baseUrl = "https://brainwaveapi.onrender.com/"
const baseUrl2 = "https://sns-production.up.railway.app/"
export const getQuestions = (category,page,itemsCount) => {
    return axios.get(`${baseUrl}posts/${category}?page=${page}&itemsCount=${itemsCount}`)
}