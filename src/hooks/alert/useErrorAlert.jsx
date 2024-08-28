import Swal from 'sweetalert2'

const useErrorAlert = (option, text)=>{
     const handleAlert = (title, text, icon, timer=false)=>{
          Swal.fire({
               title: title,
               text: text,
               icon: icon,
               timer: timer,
               timerProgressBar: true,
             })
     }

     switch(option){
          case 'add_outgoingmail':
               handleAlert('Opps gagal menambahkan surat', text, 'error')
               break
          case 'delete_user':
               handleAlert('Gagal menghapus pengguna', text, 'error')
               break
          default:
               handleAlert('Opps terjadi kesalahan!!!', text, 'error')
               break
     }
}

export default useErrorAlert