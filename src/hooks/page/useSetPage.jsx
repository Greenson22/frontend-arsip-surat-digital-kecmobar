const useSetPage = (nav, setCommand)=>{
     if (nav){
          setCommand({
               'command': 'navigation',
               'navigation_link': nav
          })
     }
}
export default useSetPage