const usePageSizeSelect = (event, url, setCommand)=> {
     const urlSplit = url.split('?')
     const queryParams = new URLSearchParams(urlSplit[1])

     queryParams.set('page_size', event.target.value)
     const newUrl = urlSplit[0]+'?'+queryParams.toString()
     setCommand({
          'command': 'page_size',
          'url': newUrl
     })
}

export default usePageSizeSelect