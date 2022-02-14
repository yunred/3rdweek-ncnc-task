export const useFetch = (url:string) => {
    return fetch(url).then((response) => response.json())
}