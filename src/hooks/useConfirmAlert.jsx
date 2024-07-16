import Swal from 'sweetalert2'

const useConfirmAlert = (call_back_result)=>{
     Swal.fire({
          title: "Apakah kamu ingin menghapus data ini??",
          text: "Jika anda setuju, maka data tidak bisa dikembalikan!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ffc107",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Hapus",
          cancelButtonText: "Batal"
        }).then(call_back_result);
}

export default useConfirmAlert