const useResponseFromattedString = (data)=>{
     const entries = Object.entries(data)
     return entries.map(([key, value]) => `${key}: ${value}`).join(', ')
}

export default useResponseFromattedString