const usePageSizeSelect = (event, link, setUrl)=> {
     const urlSplit = link.split('?')
     const queryParams = new URLSearchParams(urlSplit[1])
     const prevPage = queryParams.get('page_size')

     if (prevPage != event.target.value){
          queryParams.set('page_size', event.target.value)
          const newUrl = urlSplit[0]+'?'+queryParams.toString()
          setUrl(newUrl)
     }
}

export default usePageSizeSelect