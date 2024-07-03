const useSetPage = (data, nav, setUrl)=>{
     if (data[nav]){
          setUrl(data[nav])
     }
}
export default useSetPage