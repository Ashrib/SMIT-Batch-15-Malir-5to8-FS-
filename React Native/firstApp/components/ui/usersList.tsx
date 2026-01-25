import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

interface User {
    id: number;
    name: string;
}

const UsersList = ({ users }: { users: User[] }) => {
  return (
     
           <FlatList
             data={users}
             keyExtractor={(item) => item.id.toString()}
             renderItem={({ item }) => (
               <View style={styles.card}>
                 <Text style={styles.cardTitle}>{item.name}</Text>
               </View>
             )}
           />
  )
}

export default UsersList


const styles = StyleSheet.create({  /// css in js
  container:{
    backgroundColor:'red',
    height:'100%',
    width:'100%',
    // justifyContent:'center',
    // alignItems:'center'
  },
  cardParent:{
    backgroundColor:'white',
    width:300,
    height:200,
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
  },
  card:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,

  },
  cardTitle:{
    fontSize:20,
    fontWeight:'bold'
  },
  button:{
    backgroundColor:'blue',
    padding:10,
    borderRadius:5,
    margin:20
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center'
  }


})