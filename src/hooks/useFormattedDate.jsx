const useFormattedDate = (data)=>{
     const date = new Date(data)
     const day = date.getDate()
     const month = date.getMonth() + 1
     const year = date.getFullYear()

     return `${day}/${month}/${year}`
}

export default useFormattedDate