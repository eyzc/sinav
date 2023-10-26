import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenStack } from "react-native-screens";
import GirisScreen from "./src/screens/girisScreen";
import SplitScreen from "./src/screens/splitScreen";


const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="GirisScreen"
    >
     <Stack.Screen
        name='GirisScreen'
        component={GirisScreen}
        options={{
          headerShown:false
        }}
       
      ></Stack.Screen>
      <Stack.Screen
        name='SplitScreen'
        component={SplitScreen}
        options={{
          headerShown:false
        }}
       
      ></Stack.Screen>
       
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Lora-Regular',
    fontSize: 24
  }
})

export default App;