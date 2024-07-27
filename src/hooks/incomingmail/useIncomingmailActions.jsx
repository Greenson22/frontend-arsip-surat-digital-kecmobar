import useHandlePut from './useHandlePut'
import useHandlePost from './useHandlePost'
import useHandleDelete from './useHandleDelete'
import useHandleFetch from './useHandleFetch'
import usePaginationLocalStorage from '../usePaginationLocalStorage'
import useUrlSyn from '../../hooks/useUrlSyn'

const useIncomingmailActions = (command, setData, setIData, setCommand)=>{
     const url = import.meta.env.VITE_INCOMINGMAIL_API_KEY
     const token = localStorage.getItem('accessToken')
     if (command){
          switch(command.command){
               case 'post':
                    const newUrl = url.split('?')[0]
                    useHandlePost(newUrl, token, command, setCommand)
                    break
               case 'put':
                    useHandlePut(url, token, command, setCommand)
                    break
               case 'delete':
                    useHandleDelete(url, token, command, setCommand)
                    break
               case 'view_data':
                    setIData(command.index)
                    break
               case 'navigation':
                    useHandleFetch(command.navigation_link, token, setData)
                    usePaginationLocalStorage(command.navigation_link)
                    break
               case 'page_size':
                    useHandleFetch(command.url, token, setData)
                    usePaginationLocalStorage(command.url)
                    break
               case 'search':
                    const urlSyn = useUrlSyn(url, 'incomingmail_pagination')
                    const searchUrl = urlSyn+'&search='+command.words
                    useHandleFetch(searchUrl, token, setData)
                    break
          }
     }else{
          useHandleFetch(url, token, setData)
          usePaginationLocalStorage(url)
     }
}

export default useIncomingmailActions