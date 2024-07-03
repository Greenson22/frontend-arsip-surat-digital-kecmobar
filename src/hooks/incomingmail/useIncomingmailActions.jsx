import { useFetchData, useDeleteData, usePutData } from '../request/useFetchData'

const useIncomingmailActions = (link, url, token, command, setUrl, setData, setIData)=>{
     console.log(url)
     function handleDelete(){
          console.log(url)
          // if (confirm("Apakah anda ingin menghapus?")){
          //      delete_data(url, token, (response)=>{
          //           console.log(response)
          //      })
          // }
     }

     if (command){
          switch(command.command){
               case 'post':
                    break
               case 'put':
                    break
               case 'delete':
                    handleDelete()
                    break
               case 'view_data':
                    setIData(command.index)
                    break
               case 'navigation':
                    console.log(command.navigation_link)
                    setUrl(command.navigation_link)
                    break
          }
     }else{
          useFetchData(url, token, (response)=>{
               setData(response['data'])
          })
     }
}

export default useIncomingmailActions