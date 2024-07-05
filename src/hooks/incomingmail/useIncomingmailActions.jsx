import useDeleteData from '../request/useDeleteData'
import useFetchData from '../request/useFetchData'
import usePostData from '../request/usePostData'
import useUrlModifier from '../useUrlModifier'

import useHandlePut from './useHandlePut'

const useIncomingmailActions = (url, token, command, setData, setIData, setCommand)=>{
     function fetchHandler(newUrl){
          useFetchData(newUrl, token, (response)=>{
               setData(response['data'])
          })
     }


     
     function handlePost(){
          usePostData(url, command.data, token, (response)=>{
               console.log(response)
               setCommand(null)
          })
     }

     function handleDelete(){
          if (confirm("apakah anda ingin menghapus?")){
               const newUrl = useUrlModifier(url, command)
               useDeleteData(newUrl, token, (response)=>{
                    console.log(response)
                    setCommand(null)
               })
          }
     }

     if (command){
          switch(command.command){
               case 'post':
                    handlePost()
                    break
               case 'put':
                    useHandlePut(url, token, command, setCommand)
                    break
               case 'delete':
                    handleDelete()
                    break
               case 'view_data':
                    setIData(command.index)
                    break
               case 'navigation':
                    fetchHandler(command.navigation_link)
                    break
               case 'page_size':
                    fetchHandler(command.url)
                    break
          }
     }else{
          fetchHandler(url)
     }
}

export default useIncomingmailActions