import useUrlParams from '../url/useUrlParams'

const usePaginationLocalStorage = (url)=>{
     const urlParams = useUrlParams(url) // mengambil parameter dari url 
     let page = urlParams.get('page') // mengambil parameter page
     
     if (!page){page = 1} // jika page tidak ada maka beri nilai 1
     // data dimasukan kedalam dictionary
     const dataDict = { 
          'page': page,
          'page_size': urlParams.get('page_size'),
     }
     // menetapkan nilai di dalam session storage dari dataDict
     sessionStorage.setItem('pagination', JSON.stringify(dataDict))
}

export default usePaginationLocalStorage