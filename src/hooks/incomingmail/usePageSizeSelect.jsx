const usePageSizeSelect = (event, url, setCommand)=> {
     const urlSplit = url.split('?')
     const queryParams = new URLSearchParams(urlSplit[1])
     // const prevPage = queryParams.get('page_size')
     
     // if (prevPage != event.target.value){
          queryParams.set('page_size', event.target.value)
          const newUrl = urlSplit[0]+'?'+queryParams.toString()
          setCommand({
               'command': 'page_size',
               'url': newUrl
          })
     // }
}

export default usePageSizeSelect