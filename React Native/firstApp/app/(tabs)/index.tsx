import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";


export default function HomeScreen() {
  let [selectedImage, setSelectedImage] = useState<string | null>(null);

  let pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      // quality: 1,
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      mediaTypes: ['images', 'videos'],
    });

    if (!pickerResult.canceled) {
      setSelectedImage(pickerResult.assets[0].uri);
      console.log(pickerResult);
    }

  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Home Screen</Text>
      <Pressable style={styles.button} >
        <Link href="/users">
          <Text style={styles.buttonText}>Users</Text>
        </Link>
      </Pressable>

      <View>
        <Pressable style={{
          ...styles.button,
          backgroundColor: 'green',
          width: 150,
          alignSelf: 'center'
        }}
          onPress={pickImage}>
          <Text style={styles.buttonText}>Pick Image</Text>
        </Pressable>
      </View>

      <View>
        {selectedImage && <Image source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 20 }}
        />}
      </View>
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
