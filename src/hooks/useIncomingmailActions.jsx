import { delete_data, put_data } from '../hooks/useFetchData'

const useIncomingmailActions = (incomingmail_api, token, data, setData, setIData)=>{
     const handleDelete = (id)=>{
          if (confirm("Apakah anda ingin menghapus record ini?")){
               delete_data(incomingmail_api+id+'/', token, (response)=>{
                    setData([])
               })
          }
     }

     const handlePut = (id, data_update)=>{
          put_data(incomingmail_api+id+'/', data_update,  token, (response)=>{
               setData([])
          })
     }

     switch (data.command){
          case 'delete':
               handleDelete(data.id)
               break
          case 'view_data':
               setIData(data.index)
               break
          case 'put':
               handlePut(data.id, data.data)
               break
     }
}

export default useIncomingmailActions