import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
import MainLogo from "../assets/icons/MainLogo";

const MMKV = new MMKVLoader().initialize()

const SplitScreen = ({ navigation, route }) => {

    return (

        <SafeAreaView style={styles.arkaplan}>
            <View style={styles.mainLogoView}>
                <MainLogo></MainLogo>
            </View>
            

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    arkaplan: {
        width: '100%',
        height: '100%',
        backgroundColor: '#DB8E1A',
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: 'space-between'
    },

})
export default SplitScreen;