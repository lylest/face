import { createContext, useReducer } from 'react'

export const GlobalContexts = createContext()

export const updateContextReducer = (state,action)=>{
        switch(action.type){
              case 'SET_CURRENT_USER':
                return {
                  ...state,
                  currentUser: action.payload
               } 
                 
               case 'set_music_progress':
                  return {
                    ...state,
                    musicUploadProgress: action.payload
                 }

               case 'set_current_playing':
                  return {
                    ...state,
                    currentPlaying: action.payload
                 }  
                 
               case 'set_music_list':
                  return {
                    ...state,
                    musicList: action.payload
                 }  

              default: return state    
        }
       
}

export const GlobalContextProvider = ({children})=>{
         const[state,dispatch] = useReducer(updateContextReducer,{
                currentUser:null,
                musicUploadProgress:0,
                currentPlaying:null,
                musicList:[]
         })
         return (
            <GlobalContexts.Provider value={{...state,dispatch}}>
                { children }
            </GlobalContexts.Provider>
         )
}
