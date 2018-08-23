import React from 'react';
import { StyleSheet, Text, View, TextInput,
KeyboardAvoidingView,TouchableOpacity,Picker, Linking, Image,AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Signup extends React.Component {

constructor(props){
  super(props);

    this.state = {
      name:'',
      password:'',
      c_password:'',
      email:'',
      role:'',
  }
}

  render() {
    return (
<KeyboardAvoidingView style={styles.wrapper} >

  <View style={styles.container}>

  <Image source={require('../../images/logo.png')} style={styles.logoScreen} />


  <Text style={styles.header}>- Sign Up - </Text>


   <TextInput style={styles.textInput} placeholder='Your Name'
    onChangeText={(name) => this.setState({name})} />

   <TextInput secureTextEntry={true} style={styles.textInput} placeholder='Password'
    onChangeText={(password) => this.setState({password})} />

  <TextInput secureTextEntry={true} style={styles.textInput} placeholder='Confirmation Password'
     onChangeText={(c_password) => this.setState({c_password})} />

  <TextInput style={styles.textInput} placeholder='Email'
      onChangeText={(email) => this.setState({email})} />

  <TouchableOpacity style={styles.btn} onPress={this.signup}>
  <Text style={styles.btnText}> Sign up </Text>
  </TouchableOpacity>

  </View>
</KeyboardAvoidingView>


    );
  }

signup =() =>{

fetch('http://www.popupdelivery.com/api/register',{

method:'POST',
headers:{

  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify({

   name: this.state.name,
   password: this.state.password,
   c_password: this.state.c_password,
   email: this.state.email,
   role: 'restaurant',
})
})
.then((response) => response.json())
.then ((res )=>{
  console.log(JSON.stringify(res))
  // AsyncStorage.setItem('access_token', 'sdfsdfa')To get access token

  })

}

}
const styles = StyleSheet.create({
wrapper:{
  flex:1,
},
container:{
flex:1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: 'white',
paddingLeft: 40,
paddingRight:40,
},
header: {
  fontSize: 30,
  marginBottom:60,
  color: 'grey',
  fontWeight: 'bold'
},
picker:{
width:400,
fontSize:24,
height:100,
},
textInput:{
alignSelf:'stretch',
padding:16,
fontSize:24,
marginBottom:20,
backgroundColor: 'white',
},
btn: {
alignSelf: 'stretch',
backgroundColor: '#F5515F',
padding: 20,
alignItems: 'center',
},
btnText:{
  fontSize:24,
color:'white',
},
logoScreen:{
  alignSelf:'center',
  alignItems: 'center',
  height:100,
  width:100
},
})
