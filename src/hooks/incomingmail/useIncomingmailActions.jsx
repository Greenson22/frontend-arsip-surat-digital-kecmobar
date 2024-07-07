import useHandlePut from './useHandlePut'
import useHandlePost from './useHandlePost'
import useHandleDelete from './useHandleDelete'
import useHandleFetch from './useHandleFetch'
import usePaginationLocalStorage from '../usePaginationLocalStorage'
import useUrlSyn from '../useUrlSyn'

const useIncomingmailActions = (url, token, command, setData, setIData, setCommand)=>{
     if (command){
          switch(command.command){
               case 'post':
                    useHandlePost(url, token, command, setCommand)
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
                    const searchUrl = url+'&search='+command.words
                    useHandleFetch(searchUrl, token, setData)
                    break
          }
     }else{
          useHandleFetch(url, token, setData)
          usePaginationLocalStorage(url)
     }
}

export default useIncomingmailActions