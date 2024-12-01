import useUrlParams from '../url/useUrlParams'
import { setPage, setPageSize } from '../../redux/slices/paginationSlice'

const usePaginationLocalStorage = (url, dispatch)=>{
     const urlParams = useUrlParams(url) // mengambil parameter dari url 
     let page = urlParams.get('page') // mengambil parameter page
     let pageSize = urlParams.get('page_size') // mengambil parameter page size
     
     if (!page){page = 1} // jika page tidak ada maka beri nilai 1
     if (!pageSize){pageSize = 5} // jika page size tidak ada maka beri nilai 1

     dispatch(setPage(page))
     dispatch(setPageSize(pageSize))
}

export default usePaginationLocalStorage