import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const showSuccessAlert=(message)=>{
    toast.success(message,{
        position:"top-center",
        
        
    })
}

export const showFailedAlert=(message)=>{
    toast.error(message,{
        position:'top-center',
    })
}