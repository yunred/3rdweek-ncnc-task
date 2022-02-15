import axios from "axios"


export const useFetch = (url:string) => {
    return axios.get(url).then((response) => response.data)
}