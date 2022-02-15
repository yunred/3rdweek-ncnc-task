import axios from "axios"


export const Fetch = async (url:string) => {
    const response = await axios.get(url)
    return response.data
}