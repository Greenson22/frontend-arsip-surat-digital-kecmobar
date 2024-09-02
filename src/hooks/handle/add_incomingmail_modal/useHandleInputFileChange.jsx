const useHandleInputFileChange = (event, previewRef) =>{
     const inputFile = event.target
     const files = inputFile.files
     if (files.length > 0){
          const preview = previewRef.current
          const reader = new FileReader()
          reader.onload = ()=>{
               preview.height = '100%'
               preview.src = reader.result
          }
          reader.readAsDataURL(files[0])
     }
}

export default useHandleInputFileChange