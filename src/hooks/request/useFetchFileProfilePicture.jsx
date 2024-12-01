import { useFetchFile } from ".."

const useFetchFileProfilePicture = (id, callbackResponse, callbackError)=>{
     const accessToken = localStorage.getItem('accessToken')
     const api = import.meta.env.VITE_USERS_API_KEY.split('?')[0]
    
     useFetchFile(api+id+'/profile_picture/', accessToken, callbackResponse, callbackError)
}

export default useFetchFileProfilePicture