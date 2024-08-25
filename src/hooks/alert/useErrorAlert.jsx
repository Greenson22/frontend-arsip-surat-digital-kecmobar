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
          default:
               handleAlert('Opps gagal mengubah data!!!', text, 'error')
               break
     }
}

export default useErrorAlert