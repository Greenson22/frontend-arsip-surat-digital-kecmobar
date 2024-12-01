const usePaginationOffset = (page, pageSize)=>{
     return (pageSize * (page-1))
}

export default usePaginationOffset