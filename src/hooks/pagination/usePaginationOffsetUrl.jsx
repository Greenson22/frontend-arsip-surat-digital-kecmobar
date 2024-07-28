const usePaginationUrlOffset = (url)=>{
     const urlSplit = url.split('?')
     const queryParams = new URLSearchParams(urlSplit[1])
     let page = queryParams.get('page')
     const pageSize = queryParams.get('page_size')
     if (!page){page = 1}
     return (pageSize * (page-1))
}

export default usePaginationUrlOffset