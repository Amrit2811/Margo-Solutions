import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
    <View style={styles.inputView}> 
      <TextInput 
      style ={styles.textinput}
      placeholder ="Email." 
      placeholderTextColor = "black"
     // onChangeText= {(email) => setEmail(email)} 
     />
    </View>
    <View style={styles.inputView}> 
      <TextInput 
      style ={styles.textinput}
      placeholder ="Pasword." 
      placeholderTextColor = "black"
     // onChangeText= {(Pasword) => setpassword(Password)} 
     />
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('splash')}>
        <View>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    <TouchableOpacity style={styles.forgotBtn}>
        <View>
          <Text>forgot passowrd?</Text>
        </View>
      </TouchableOpacity>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView : {
    backgroundColor : "#8FD6F2DB",
    borderRadius : 30,
    borderColor : "black",
    borderWidth : 1,
    width : "70%",
    height : 45,
    marginBottom : 20,
    alignItems : "center"
    
  },
  textinput : {
    height: 40,
    flex : 1,
    padding : 10,
    marginLeft : 20
  },
  loginBtn: {
    width: "60%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#8FD6F2",
    borderColor : "black",
    borderWidth : 1
  },
  forgotBtn: {
    width: "60%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#8FD6F2",
    borderColor : "black",
    borderWidth : 1
  }
  
});