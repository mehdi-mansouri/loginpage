import { toast } from 'react-toastify';
export const notify = (text,type) => {
    console.log(type); 
    if(type==="success"){
        toast.success(text);
    } else {
        toast.error(text);
    }
    
}