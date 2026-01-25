import UsersList from "@/components/ui/usersList"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"

const Users = () => {
    const [users, setUsers] = useState([]);

    let fetchUsers = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            // let response = await fetch('http://192.168.10.164:3000/user',{
            //     method:'GET',
            //     headers:{
            //         'Content-Type':'application/json'
            //     }
            // });
            let data = await response.json();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchUsers();
    }, [])



  return (
    <ScrollView 
       >
        <Pressable style={styles.button} onPress={()=> router.back()} >
          <Text style={styles.buttonText}>back</Text>
        </Pressable>
      <UsersList users={users} />
      </ScrollView>
  )
}

export default Users




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