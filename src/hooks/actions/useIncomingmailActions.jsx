import useHandlePut from '../request/useHandlePut'
import useHandlePost from '../request/useHandlePost'
import useHandleDelete from '../request/useHandleDelete'
import useHandleFetch from '../request/useHandleFetch'
import usePaginationLocalStorage from '../pagination/usePaginationLocalStorage'
import useUrlModifier from '../url/useUrlModifier'
import { useFormDataIncomingmail, useFormDataMultipleIncomingmail } from '../form_data'
import { setIData } from '../../redux/slices/dataSlice'
import { setPage } from '../../redux/slices/paginationSlice'
import useConfirmAlert from '../alert/useConfirmAlert'

const useIncomingmailActions = (command, page, pageSize, dispatch)=>{
     const url = import.meta.env.VITE_INCOMINGMAIL_API_KEY
     const token = localStorage.getItem('accessToken')
     
     if (command){
          switch(command.command){
               case 'post': // pengangan untuk menambahkan data
                    const newUrl = url.split('?')[0]
                    const data = useFormDataIncomingmail(command)
                    useHandlePost(newUrl, token, data, command, dispatch)
                    break
               case 'multiple_post': // pengangan untuk analisa beberapa surat
                    const fileNote = command.file_note
                    fileNote.map((file, index)=>{
                         if (file.entities != null){
                              const newUrl = url.split('?')[0]
                              const data = useFormDataMultipleIncomingmail(file.name, file.entities)
                              useHandlePost(newUrl, token, data, command, dispatch)
                         }else{
                              console.log(file.name, ' entitiesnya null')
                         }
                    })
                    break
               case 'put': // pengangan untuk mengubah data
                    const putData = useFormDataIncomingmail(command)
                    const newPutUrl = useUrlModifier(url, command)
                    useHandlePut(newPutUrl, token, putData, dispatch)
                    break
               case 'delete': // pengangan untuk menghapus data
                    useHandleDelete(url, token, command, dispatch)
                    break
               case 'view_data': // pengangan untuk melihat data
                    dispatch(setIData(command.index))
                    break
               case 'navigation': // pengangan untuk navigasi halaman
                    useHandleFetch(command.navigation_link, token, dispatch)
                    usePaginationLocalStorage(command.navigation_link, dispatch)
                    break
               case 'page_size': // penangangan untuk ukuran halaman
                    useHandleFetch(command.url, token, dispatch) // melakukan request dengan url
                    usePaginationLocalStorage(command.url, dispatch) // menyimpan ke dalam session storage
                    break
               case 'search': // pengangan untuk pencarian data
                    const searchUrl = url+'?page='+1+'&page_size='+pageSize+'&search='+command.words
                    useHandleFetch(searchUrl, token, dispatch)
                    break
               case 'classify':
                    useConfirmAlert(result=>{
                         if (result.isConfirmed){
                              alert("hei bego")
                         }
                    }, "Mengklasifikasikan surat", 
                    "Jika kamu mau, maka surat akan langsung di klasifikasikan", 
                    "Ya", "Tidak")
                    break
          }
     }else{
          let newUrl = url+'?page='+page+'&page_size='+pageSize
          useHandleFetch(newUrl, token, dispatch, error=>{
               if (error) {
                    if (page < 0)page = 1
                    dispatch(setPage(page-1))
               }
          })
          usePaginationLocalStorage(newUrl, dispatch)
     }
}
   

export default useIncomingmailActions