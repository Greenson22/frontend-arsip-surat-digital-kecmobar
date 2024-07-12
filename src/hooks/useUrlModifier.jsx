const useUrlModifier = (url, command)=>{
     let newUrl = url
     switch (command.command){
          case 'view_file':
          case 'delete':
          case 'put':
               const splitUrl = url.split('?')
               newUrl = splitUrl[0]+command.id+'/'
               break
     }
     return newUrl
}

export default useUrlModifier