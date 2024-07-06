import useUrlParams from './useUrlParams'

const usePaginationLocalStorage = (url)=>{
     const urlParams = useUrlParams(url)
     let page = urlParams.get('page')
     
     if (!page){page = 1}
     const dataDict = {
          'page': page,
          'page_size': urlParams.get('page_size'),
     }

     localStorage.setItem('incomingmail_pagination', JSON.stringify(dataDict))
}

export default usePaginationLocalStorage