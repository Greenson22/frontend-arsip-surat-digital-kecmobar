import { fetch_data, delete_data, put_data } from '../useFetchData'

const useActionsIncomingmail = (link, url, token, command, setData, setIData)=>{
     if (command){
          switch(command.command){
               case 'post':
                    break
               case 'put':
                    break
               case 'delete':
                    break
               case 'view_data':
                    break
          }
     }else{
          fetch_data(url, token, (response)=>{
               setData(response['data'])
          })
     }
}

export default useActionsIncomingmail