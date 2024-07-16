import Swal from 'sweetalert2'

const handleAlert = (title, text, icon, timer=false)=>{
     Swal.fire({
          title: title,
          text: text,
          icon: icon,
          timer: timer,
          timerProgressBar: true,
        })
}

const useAlert = (option)=>{
     switch(option){
          case 'success':
               handleAlert("Berhasil ditambahkan!", "Data telah ditambahkan!", "success", 3000)
               break
          case 'success_update':
               handleAlert( "Berhasil diubah!", "Data telah diubah!", "success", 3000)
               break
          case 'success_delete':
               handleAlert("Berhasil dihapus!", "Data telah dihapus!", "success", 3000)
               break
          case 'error':
                    handleAlert("Oppss terjadi kesalahan!!!", "Coba periksa input yang ada berikan!!!", "error")
                    break
          case 'error_delete':
               handleAlert("Oppss gagal menghapus data!!!", "Mungkin terjadi kesalahan di server!!!", "error")
               break
          case 'error_update':
               handleAlert("Oppss gagal mengubah data!!!", "Mungkin input yang dimasukan salah atau kesalahan terjadi di server!!!", "error")
               break
     }
}

export default useAlert