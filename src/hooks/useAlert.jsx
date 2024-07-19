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

const handleAlertLoading = (title, text)=>{
     Swal.fire({
          title: title,
          text: text,
          showConfirmButton: false,
          didOpen: ()=>{
               Swal.showLoading()
          }
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
          case 'success_login':
               handleAlert("Berhasil Login!", "Anda berhasil masuk!", "success", 3000)
               break
          case 'error':
               handleAlert("Oppss terjadi kesalahan!!!", "Coba periksa input yang ada berikan!!!", "error")
               break
          case 'error_login':
               handleAlert("Oppss gagal login!!!", "Coba periksa username dan password yang anda masukan atau kesalahan terjadi di server!!!", "error")
               break
          case 'error_delete':
               handleAlert("Oppss gagal menghapus data!!!", "Mungkin terjadi kesalahan di server!!!", "error")
               break
          case 'error_update':
               handleAlert("Oppss gagal mengubah data!!!", "Mungkin input yang dimasukan salah atau kesalahan terjadi di server!!!", "error")
               break
          case 'loading':
               handleAlertLoading('Sedang masuk...', 'Mohon tunggu sebentar...')
               break
     }
}

export default useAlert