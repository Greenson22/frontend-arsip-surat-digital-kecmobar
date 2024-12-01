import { setCommand } from "../../redux/slices/commandSlice"

const useSetPage = (nav, dispatch)=>{
     if (nav){
          dispatch(setCommand({
               'command': 'navigation',
               'navigation_link': nav
          }))
     }
}
export default useSetPage