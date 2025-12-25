import {create} from "zustand"


interface typeMenuBar {
    menuState:boolean,
    open:()=> void,
    close:()=> void
    
    }

export const useMenuBarState = create<typeMenuBar>((set,)=>({

    menuState:false,
    open:()=> {
        return set(()=> ({menuState:true}))
    },
    close:()=> {
        return set(()=> ({menuState:false}))
    },

}))