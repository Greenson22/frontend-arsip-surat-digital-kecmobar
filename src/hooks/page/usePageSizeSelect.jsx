import { setCommand } from "../../redux/slices/commandSlice"

const usePageSizeSelect = (event, url, dispatch)=> {
     const newUrl = url+'?'+'page_size='+event.target.value // menggabung url dengan page_size
     dispatch(setCommand({
          'command': 'page_size',
          'url': newUrl
     }))
}

export default usePageSizeSelect