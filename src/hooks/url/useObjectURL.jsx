const useObjectURL = (data, myType)=>{
     return window.URL.createObjectURL(new Blob([data]))
}

export default useObjectURL