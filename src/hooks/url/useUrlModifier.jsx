const useUrlModifier = (url, command)=>{
     switch (command.command){
          case 'view_file':
          case 'delete':
          case 'put':
               const splitUrl = url.split('?')
               url = splitUrl[0]+command.id+'/'
               break
     }
     return url
}

export default useUrlModifier