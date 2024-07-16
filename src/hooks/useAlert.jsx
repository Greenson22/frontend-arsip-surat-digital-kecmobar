import Swal from 'sweetalert2'

const useAlert = (option)=>{
     switch(option){
          case 'success':
               Swal.fire({
                    title: "Berhasil!",
                    text: "Data telah berhasil ditambahkan!",
                    icon: "success"
                  })
               break
          case 'success_delete':
               Swal.fire({
                    title: "Berhasil dihapus!",
                    text: "Data berhasil dihapus!",
                    icon: "success"
                  })
               break
          case 'error_delete':
                    Swal.fire({
                         title: "Oppss gagal menghapus data!!!",
                         text: "Mungkin terjadi kesalahan di server!!!",
                         icon: "error"
                    })
               break
          case 'error':
               Swal.fire({
                    title: "Oppss terjadi kesalahan!!!",
                    text: "Coba periksa input yang ada berikan!!!",
                    icon: "error"
               })
               break
     }
}

export default useAlert