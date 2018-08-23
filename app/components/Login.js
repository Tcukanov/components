import React from 'react';
import { StyleSheet, Text, View, TextInput,
KeyboardAvoidingView,TouchableOpacity, Image, Linking,DrawerOpen,AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Login extends React.Component {

constructor(props){
  super(props);

    this.state = {
      email:'s.tcukanov@gmail.com',
      password:'12345',

  }
}



  render() {
    return (

<KeyboardAvoidingView behavioir='padding' style={styles.wrapper}>
<View style={styles.container}>

<Image source={require('../../images/logo.png')} style={styles.logoScreen} />


<Text style={styles.header}>- LOGIN - </Text>

<TextInput style={styles.textInput} placeholder='Email'
 onChangeText={(email) => this.setState({email})} />

 <TextInput style={styles.textInput} placeholder='Password'
  onChangeText={(password) => this.setState({password})} />


<TouchableOpacity style={styles.btn} onPress={this.login}>
<Text style={styles.btnText}> Log in </Text>
 </TouchableOpacity>


 <Text onPress={() => this.props.navigation.navigate('Profile')} style={styles.textSignup}>Does not Have an acconut? Sign up</Text>


</View>
 </KeyboardAvoidingView>
 //If you want to sign up change change to Sign up link


    );
  }


login =() =>{

fetch('http://www.popupdelivery.com/api/login',{

method:'POST',
headers:{

  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify({
  email: 'dx998@nyu.edu',
  password: 'Bb111112'
})
})

.then((response) => response.json())
.then ((res )=>{
if (res.data.flag == 1){
alert('Thank you for log in')
this.props.navigation.navigate('Profile');
}
else if (res.message== undefined ){
alert('Please check your email and password ');
  }
else{
  alert(res.message );
}


})
.catch((res) => {
  alert(JSON.stringify(res))
   });

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
textInput:{
alignSelf:'stretch',
padding:16,
fontSize:24,
marginBottom:20,
backgroundColor: 'white',
},
textSignup:{
alignSelf:'stretch',
paddingRight:60,
paddingTop :20,
color:'blue',
fontSize:18,

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
