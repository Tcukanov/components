import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator,StackNavigator,FlatList } from 'react-navigation'; // Version can be specified in package.json



class Today extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor:'rgb(238, 238, 238)' }}>

      <Text style={{textAlign:'right',marginTop:30,fontWeight:'bold',color:'grey',paddingRight:20}}>07/17/18 - 18:48</Text>
      <View style={styles.row}>
        <View style={styles.block1}>
        <Text style={styles.subtitle1}>ORDER #</Text>
        <Text>637</Text>
        </View>
        <View style={styles.block1}>
        <Text style={styles.subtitle1}>DELIVERY GUY</Text>
        <Text>Carlos Condit</Text>
        </View>
        <View style={styles.block1}>
        <Text style={styles.subtitle1}>ADDRESS</Text>
        <Text>567 Broadway</Text>
        </View>
        <View style={styles.block1}>
        <Text style={styles.subtitle1}>TOTAL</Text>
        <Text style={styles.pricetitle}>$25.00</Text>
        </View>

      </View>
      </View>
    );
  }
}

class Week extends React.Component {


  constructor(){
    super();
    this.state ={ isLoading: true,dataSource :[]}
  }

  componentDidMount(){
        return fetch('popupdelivery.com/api/restaurant/report',{
        method:'POST',
        headers:{
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI3OWI0MDQyODFlNGUyOGI1YzU0NGQ0ZWNlYzJjZDkwYzk0MzYzOWU0OGM5NzI4ZDkzODI5ZDQ2ZTk1NjE2Njk5YmJhYzZlZTU1ZjIyNjYxIn0.eyJhdWQiOiIxMiIsImp0aSI6IjI3OWI0MDQyODFlNGUyOGI1YzU0NGQ0ZWNlYzJjZDkwYzk0MzYzOWU0OGM5NzI4ZDkzODI5ZDQ2ZTk1NjE2Njk5YmJhYzZlZTU1ZjIyNjYxIiwiaWF0IjoxNTMzMjUzNDE4LCJuYmYiOjE1MzMyNTM0MTgsImV4cCI6MTUzNTg0NTQxOCwic3ViIjoiMTIxIiwic2NvcGVzIjpbXX0.fh_j-q7kYyJQSYoR5D4rxtorZMs5yl4iPsLqX-aVRMqlg4jz1zdCwfai5MBGc9lr9Z0-FwAlRCUce8mJEmUs1yEeYaje7n2M0Y4GXczq3JW10KvG9CBF-1Dr4ogNN1DTOTdQPfsU8zJQQ0tIjEm_N2_FZyN89FTscKC2LQAVT5IcRm35PsTOQNB3dVI9e36LOktFyW8TdeuTEKZSnkOoQcq4mk8VKLmqctObPowDWG-_Gb7aNaDM1orV3bDXvD1oq0DSgYGIxEExDaHkSPWhM7Yo67hPq7c5coHBJX_IOLVfy5l00c4NA1jMkrFqfeBhYSyFfIh5gi9hJDALTyazKJ_Z-I_Wm769kZINgzRaxKPnQoVk-uPAhhT0V4dwhI5rhbPm4Jy8ucSUUsdoYeC2Hje6NNBu-wFf9sDzXRib44_WNbczAuV2aGK9WuGqdFk772it82Unjl8UXj_oo1ZvqGCDI-K62_Je2z7SSggSW5I7DtNZ9lxSE3TsAFLK7n-OsdUl8iN7EM25cIRa1B8c4Jhf3mZyz1iQ1EkWRdAGRqwuNWebZsa8bPYl-f8GJhyDDZFMW-BkO6bMREWSw29c84AVc3lAFJ_oKgoo1sE5CXWZTpdm2eVb7XmfTpHyIdBOCuHP1WFFwcP5ZLsaIvgcQdQw88ido-boSCrVljt3rOc'
        },
      }).then((response) => response.json())
        .then ((res )=>{

        }).catch((res) => {

           });
        }


  render() {
    return (
      <View style={{ flex:1, backgroundColor:'rgb(238, 238, 238)' }}>

      <Text style={{textAlign:'right',marginTop:30,fontWeight:'bold',color:'grey',paddingRight:20}}>15TH WEEK</Text>
      <View style={styles.row}>
        <View style={styles.block1}>
        <Text style={styles.subtitle1}>DELIVERY GUY</Text>
        <Text>Carlos Condit</Text>
        </View>
        <View style={styles.block1}>
        <Text style={styles.subtitle1}>ORDERS COMPLETED</Text>
        <Text>12</Text>
        </View>
        <View style={styles.block1}>
        <Text style={styles.subtitle1}>TOTAL</Text>
        <Text style={styles.pricetitle}>$338.34</Text>
        </View>
      </View>
      </View>

    );
  }
}

class Month extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Price retr</Text>
      </View>
    );
  }
}

export const Report = createMaterialTopTabNavigator({

  Today: { screen: Today },
  Week: { screen: Week },
  Month: { screen: Month },

},{
tabBarOptions: {
  activeTintColor: '#f2f2f2',
  animationEnabled:true,
  activeBackgroundColor: '#E63030',
  backgroundColor: '#E63030',
  inactiveTintColor: '#D9D9D9',
  labelStyle: {
    fontSize: 22,
    fontWeight:'bold',
    padding: 12
  },
  indicatorStyle: {
   backgroundColor: 'white',
   height:5,
 },
  style: {
    backgroundColor: '#E63030',
  },
},
});

const styles = StyleSheet.create({
  subtitle1:{
    fontWeight:'bold',
    fontSize:16,
  },
  row:{
    paddingLeft:30,paddingRight:30,justifyContent:'space-between',flexDirection:'row', alignItems: 'center', height:100, backgroundColor:'rgb(212, 212, 212)'
  },
  pricetitle:{
    fontWeight:'bold',
color:'rgb(0, 119, 15)'
},
block1:{
  alignItems:'center'
},

});
