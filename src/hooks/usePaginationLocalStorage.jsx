import useUrlParams from './useUrlParams'

const usePaginationLocalStorage = (url)=>{
     const urlParams = useUrlParams(url)
     localStorage.setItem('page', urlParams.get('page'))
     localStorage.setItem('page_size', urlParams.get('page_size'))
}

export default usePaginationLocalStorage