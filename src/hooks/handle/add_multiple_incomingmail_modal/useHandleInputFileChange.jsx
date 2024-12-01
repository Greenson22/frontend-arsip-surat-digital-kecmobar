const useHandleInputFileChange = (event, setFileList, setFileNote) => {
     const files = Array.from(event.target.files)
     const notes = []
     files.map((file, index) => {
          file.entities = null
          notes.push({
               'name': file.name,
               'entities': null,
               'status': null,
          })
     })
     setFileList([...files])
     setFileNote([...notes])
     console.log('file list dibuat dengan entities kosong')
}

export default useHandleInputFileChange