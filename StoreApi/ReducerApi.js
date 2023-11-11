import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createContext,useReducer } from 'react'
import axios from 'axios'

import { LoginReducer, initialstate } from './LoginReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

 export  const Reducer = createContext() 
export const LoginProvider=({children})=>{
    const [state,dispatch,]=useReducer(LoginReducer,initialstate)
    const PostData = async (username,password) => {
        dispatch({ type: 'REQUEST' });
        try {
            const response = await axios.post("https://whystles.codesap.com/api/user/login/",{
                username,
                password,
            })
            const token =response.data.token;
            console.log(token)
            await AsyncStorage.setItem('token',token)
            dispatch({ type: 'SUCCESS', payload: response.data });
            console.log('Response:',response.data)

            
                if (username !== '' && password !== '') {
                    Alert.alert('success',response.data.message)
           
          
            
         }else{
            Alert.alert('invalid ','username and password incorrect')
        }
        } catch (error) {
           Alert.alert('invalid ','username and password incorrect')
            
           
        }}

    


  return (
    <Reducer.Provider value={{...state,PostData}}>
        {children}
    </Reducer.Provider>
   
  )
}



const styles = StyleSheet.create({})