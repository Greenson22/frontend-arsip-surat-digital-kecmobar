// import { delete_data, put_data } from '../hooks/useFetchData'

const useIncomingmailActions = (link, setLink, data)=>{
     function handleDelete(id){
          setLink(link+id+'/')
     }

     function handlePut(id, data_update){
          setLink(link+id+'/')
     }

     switch (data.command){
          case 'delete':
               setLink(link+id+'/')
               break
          case 'view_data':
               setIData(data.index)
               break
          case 'put':
               setLink(link+id+'/')
               break
     }
}

export default useIncomingmailActions