const useUrlParams = (url)=>{
     const urlSplit = url.split('?')
     const urlParams = urlSplit[1]
     const queryParams = new URLSearchParams(urlParams)
     return queryParams
}

export default useUrlParams