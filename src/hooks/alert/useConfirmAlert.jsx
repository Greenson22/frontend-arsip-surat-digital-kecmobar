import Swal from 'sweetalert2'

const defaultTitle = "Apakah kamu ingin menghapus data ini??"
const defaultText = "Jika anda setuju, maka data tidak bisa dikembalikan!"

const useConfirmAlert = (call_back_result, title=defaultTitle, text=defaultText, confirmButtonText="Hapus", cancelButtonText="Batal")=>{
     Swal.fire({
          title: title,
          text: text,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ffc107",
          cancelButtonColor: "#3085d6",
          confirmButtonText: confirmButtonText,
          cancelButtonText: cancelButtonText
        }).then(call_back_result);
}

export default useConfirmAlert