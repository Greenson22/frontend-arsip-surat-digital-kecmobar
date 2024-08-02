import { useEffect } from "react"
import { useFetchFileProfilePicture } from ".."
import { useObjectUrl } from ".."

const useViewProfileModalEffect = (command, imgRef)=>{
     useEffect(()=>{
          if (command && command.command == 'view_file'){
             useFetchFileProfilePicture(command.id, (response)=>{
                const url = useObjectUrl(response.data)
                imgRef.current.src = url
             })
          }
     }, [command])
}

export default useViewProfileModalEffect