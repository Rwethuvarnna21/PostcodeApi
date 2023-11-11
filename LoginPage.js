import { Button, StyleSheet,  View,TextInput,Alert } from 'react-native'
import React, { useContext ,useState} from 'react'
import { Reducer } from '../StoreApi/ReducerApi'
import { useNavigation } from '@react-navigation/native'

const LoginPage = () => {
    const {PostData}=useContext(Reducer)
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const navigation=useNavigation()
    
    const handlePostData =() => {
     PostData(
          username,
          password
        
          
     )
      
      if (username === 'renu' && password === 'renu1234') {
        navigation.navigate('ScreenPage')
        }
        
      }
      
    
  //   } else {  
  //    
  //   }
  // } catch(error){
  //    Alert.alert('ERROR','An error occured')
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>

        <TextInput
            placeholder='username'
            placeholderTextColor={'black'}
            value={username}
            onChangeText={setUsername}
            style={styles.input}
        />
        <TextInput
            placeholder='password'
            placeholderTextColor={'black'}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
        />
        <Button
        title='LOGIN'
        
        
          onPress={handlePostData}>
          </Button>
          
          
         </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  input:{
    color:'black',
    borderWidth:1,
    marginBottom:10,
    marginTop:20,
    height:70,
    marginLeft:5,
    // backgroundColor:'black',
    width:'70%',justifyContent:'center',
    alignSelf:'center',
    alignItems:'center'
  }
})
