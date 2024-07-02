import React from "react"

const useUrlResource = (link, setUrl, command)=>{
     if (command){
          switch (command.command){
               case 'put', 'delete':
                    setUrl(link+command.id+'/')
          }
     }
}

export default useUrlResource