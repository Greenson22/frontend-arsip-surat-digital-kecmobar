const useUrlResource = (link, setUrl, command)=>{
     if (command){
          switch (command.command){
               case 'put', 'delete':
                    const splitUrl = link.split('?')
                    setUrl(splitUrl[0]+command.id+'/')
                    break
          }
     }
}

export default useUrlResource