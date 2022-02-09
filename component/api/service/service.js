import axios from "axios";

export const getCourse = async() => {
    return await axios(
        {
            method: "GET",
            url: "https://api.codingthailand.com/api/course",
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