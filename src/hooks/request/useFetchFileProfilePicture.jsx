import { useFetchFile } from ".."

const useFetchFileProfilePicture = (id, callbackResponse)=>{
     const accessToken = localStorage.getItem('accessToken')
     const api = import.meta.env.VITE_USERS_API_KEY.split('?')[0]
    
     useFetchFile(api+id+'/profile_picture/', accessToken, callbackResponse)
}

export default useFetchFileProfilePicture