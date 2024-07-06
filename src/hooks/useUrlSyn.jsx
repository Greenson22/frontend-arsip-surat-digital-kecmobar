const useUrlSyn = (url, pagePagination)=>{
     const urlSplit = url.split('?')
     const urlParams = urlSplit[1]
     const queryParams = new URLSearchParams(urlParams)
     const pagination = JSON.parse(localStorage.getItem(pagePagination))
     
     queryParams.set('page', pagination['page'])
     queryParams.set('page_size', pagination['page_size'])

     return urlSplit[0]+'?'+queryParams.toString()
}

export default useUrlSyn