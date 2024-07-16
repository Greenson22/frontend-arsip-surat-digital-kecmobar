import Swal from 'sweetalert2'

const useAlert = (option)=>{
     switch(option){
          case 'success':
               Swal.fire({
                    title: "Berhasil!",
                    text: "Data telah berhasil ditambahkan!",
                    icon: "success"
                  })
          case 'error':
               Swal.fire({
                    title: "Oppss terjadi kesalahan!!!",
                    text: "Coba periksa input yang ada berikan!!!",
                    icon: "error"
               })
     }
}

export default useAlert