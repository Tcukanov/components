import React from 'react';
import { StyleSheet, Text, View, TextInput,
KeyboardAvoidingView,TouchableOpacity, Image, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';
import {Connection,Queue,Exchange} from 'react-native-rabbitmq';
const { height } = Dimensions.get('window');


export default class Profile extends React.Component {



constructor(props){
  super(props);

this.state = {
clicks :0,
screenHeight:0,
token:'gq--4nCgPc7D8siVD30tIA',
title:'New restaraunt order! Coral!',
body:'Please take the order and go fuck yourself'

  }
}


rabbitMq = () => {

  const config = {
        host: '54.196.141.195',  //your hotspot IPv4 address
        port: 5672,
        username: 'admin',   //your rabbitmq management username
        password: 'popup',    //your rabbitmq management password
        virtualhost: '/'
      };

      let connection = new Connection(config)
      connection.connect()

      let connected = false;
      let queue;
      let exchange;

      connection.on('connected', (event) => {

        queue = new Queue(connection, {
          name: 'make-call',
          passive: false,
          durable: true,
          exclusive: false,
          consumer_arguments: { 'x-priority': 1 }
        });

        exchange = new Exchange(connection, {
          name: 'direct_log',
          type: 'direct',
          durable: false,
          autoDelete: false,
          internal: false
        });

        queue.bind(exchange, 'info');
        queue.on('message', (data) => {

          if (data.message=="make-call") {
            const args = {
              number: '131',
              prompt: false
            }
alert('Br')
          }
          if (data.message=="alert-msg") {
            alert('We')
          }
        });
      });



      connection.on('error', event => {
        connected = false;
        console.log(connection);
        console.log(event);
        console.log("you are not connected");
      });

    }



      sendPushNotification = () => {
        return fetch('https://exp.host/--/api/v2/push/send', {
          body: JSON.stringify({
            to: 'ExponentPushToken[gq--4nCgPc7D8siVD30tIA]',
            title: this.state.title,
            body: this.state.body,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
      }


sendRequest =() =>{

fetch('http://www.popupdelivery.com/api/restaurant/new_order',{

method:'POST',
headers:{
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI3OWI0MDQyODFlNGUyOGI1YzU0NGQ0ZWNlYzJjZDkwYzk0MzYzOWU0OGM5NzI4ZDkzODI5ZDQ2ZTk1NjE2Njk5YmJhYzZlZTU1ZjIyNjYxIn0.eyJhdWQiOiIxMiIsImp0aSI6IjI3OWI0MDQyODFlNGUyOGI1YzU0NGQ0ZWNlYzJjZDkwYzk0MzYzOWU0OGM5NzI4ZDkzODI5ZDQ2ZTk1NjE2Njk5YmJhYzZlZTU1ZjIyNjYxIiwiaWF0IjoxNTMzMjUzNDE4LCJuYmYiOjE1MzMyNTM0MTgsImV4cCI6MTUzNTg0NTQxOCwic3ViIjoiMTIxIiwic2NvcGVzIjpbXX0.fh_j-q7kYyJQSYoR5D4rxtorZMs5yl4iPsLqX-aVRMqlg4jz1zdCwfai5MBGc9lr9Z0-FwAlRCUce8mJEmUs1yEeYaje7n2M0Y4GXczq3JW10KvG9CBF-1Dr4ogNN1DTOTdQPfsU8zJQQ0tIjEm_N2_FZyN89FTscKC2LQAVT5IcRm35PsTOQNB3dVI9e36LOktFyW8TdeuTEKZSnkOoQcq4mk8VKLmqctObPowDWG-_Gb7aNaDM1orV3bDXvD1oq0DSgYGIxEExDaHkSPWhM7Yo67hPq7c5coHBJX_IOLVfy5l00c4NA1jMkrFqfeBhYSyFfIh5gi9hJDALTyazKJ_Z-I_Wm769kZINgzRaxKPnQoVk-uPAhhT0V4dwhI5rhbPm4Jy8ucSUUsdoYeC2Hje6NNBu-wFf9sDzXRib44_WNbczAuV2aGK9WuGqdFk772it82Unjl8UXj_oo1ZvqGCDI-K62_Je2z7SSggSW5I7DtNZ9lxSE3TsAFLK7n-OsdUl8iN7EM25cIRa1B8c4Jhf3mZyz1iQ1EkWRdAGRqwuNWebZsa8bPYl-f8GJhyDDZFMW-BkO6bMREWSw29c84AVc3lAFJ_oKgoo1sE5CXWZTpdm2eVb7XmfTpHyIdBOCuHP1WFFwcP5ZLsaIvgcQdQw88ido-boSCrVljt3rOc'
},
body: JSON.stringify({

})
})

.then((response) => response.json())
.then ((res )=>{
console.log(JSON.stringify(res))

})
.catch((res) => {
  console.log(JSON.stringify(res))
   });
}



_handleLogOut = () => {
  AsyncStorage.removeItem('access_token');
  alert('You have been logged out.');
  this.props.navigation.navigate('Signup');
}


onContentSizeChange = (contentWidth, contentHeight) => {
  this.setState({screenHeight:contentHeight})
}

  render() {
    //Enable to scroll down if the height bigger than regular size of the screen
    const scrollEnabled = this.state.screenHeight > height;

    return (

          <ScrollView scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange} contentContainerStyle={styles.scrollView}>
             <View style={styles.container}>
               <View style={styles.section1}>
                 <View style={styles.section1item}>
               <TouchableOpacity onPress={this.sendPushNotification}>
               <Image source={require('../../images/logo.png')} style={styles.logoScreen} />
               </TouchableOpacity>
               <Text style={styles.numberClick}>{this.state.clicks}</Text>
                </View>
               </View>
               <View style={styles.section2}>
                 <View style={{

                  flex:1,
                  alignItems:'center',
                 backgroundColor:'white',borderRightWidth:7,borderRightColor: '#c5c5c5',
}}>
                   <View style={styles.box1}>
                   <Text style={{fontWeight:'bold'}}>Carlos</Text><Text>Is on the way</Text>
                 <Text style={{fontSize:12,textAlign:'right',color:'grey',paddingRight:20,flexDirection:'row',

}}>16:30</Text></View>

                 </View>
                 <View style={{
                   flex:1,
                   alignItems:'center',
                 backgroundColor:'white'}}>
                 <View style={styles.box2}>
                   <Text style={{fontWeight:'bold',color:'white'}}>Order #136</Text>
                   <Text style={{color:'white'}}>Carlos</Text>
                   <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
                     <Text style={{color:'white'}}>456 Broadway, Apt 4</Text>
                    <Text style={{fontSize:12,color:'rgb(242, 242, 242)',textAlign:'right',paddingRight:20}}>16:30
                    </Text>
                   </View>
                 </View>
                 </View>
               </View>
             </View>
           </ScrollView>

);

}

}
const styles = StyleSheet.create({
  scrollView:{
    flexGrow:1,
  },
numberClick:{
fontSize:32,
paddingLeft:20,
fontWeight:'bold',
},
box1:{
width:250,
height:80,
paddingTop:10,
paddingLeft:20,
marginTop:30,
backgroundColor:'rgb(217, 217, 217)',
borderRadius: 10
},
box2:{
  width:250,
  height:80,
  paddingLeft:20,
  paddingTop:10,
  marginTop:30,
  backgroundColor:'rgb(145, 5, 5)',
  borderRadius: 10
},
section1:{
  height:150,
  backgroundColor:'#c5c5c5'
},
section2:{
flex:1,
flexDirection:'row',

},
section1item:{
alignItems:'center',
alignSelf:'center',
flexDirection:'row',
marginTop:25
},
black:{
  backgroundColor:'black',

},
yellow:{
  backgroundColor:'yellow',

},
section2item:{
},
container:{
flex:1,
backgroundColor: 'white',

},
logoScreen:{
  height:100,
  width:100,
}
})
