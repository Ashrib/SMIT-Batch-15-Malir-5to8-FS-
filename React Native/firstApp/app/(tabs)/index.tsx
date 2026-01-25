import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Home Screen</Text>
      <Pressable style={styles.button} >
        <Link href="/users">
          <Text style={styles.buttonText}>Users</Text>
        </Link>
      </Pressable>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({  /// css in js
  container: {
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    // justifyContent:'center',
    // alignItems:'center'
  },
  cardParent: {
    backgroundColor: 'white',
    width: 300,
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }


})
