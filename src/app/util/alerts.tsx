import toast from "react-hot-toast"
import { ToastPosition } from "react-hot-toast";

export const showAlert = (type:number,message:string,duration?:number,position?:ToastPosition,icon?:string) => {

    switch (type) {
        case 1:
            toast.success(message, {    
                duration: duration ? duration : 3000,
                position: position ? position : 'top-right',
                style: {
                    borderRadius: '10px',

                },
                icon: icon ? icon : '✅'
            });
            break;

        case 2:
            toast.error(message, {
                duration: duration ? duration : 3000,
                position: position ? position : 'top-right',
                style: {
                    borderRadius: '10px',

                },
                icon: icon ? icon : '❌'
            });
            break;
    }
}