import axios from "axios";

export const getCourse = async(id) => {
    return await axios(
        {
            method: "GET",
            url: `https://api.codingthailand.com/api/course/${id}`,
        }
    )
}


export const getProduct = async() => {
    return await axios(
        {
            method: "GET",
            url: "https://api.codingthailand.com/api/course",
        }
    )
}