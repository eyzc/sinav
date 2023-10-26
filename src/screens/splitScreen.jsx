import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
import MainLogo from "../assets/icons/MainLogo";
import BackIcon from "../assets/icons/backIcon";
const MMKV = new MMKVLoader().initialize()

const SplitScreen = ({ navigation, route }) => {
let antreman = [
    'GOGUS',
    'KOL',
    'BACAK',
    'OMUZ',
    'SIRT'
]
    return (

        <SafeAreaView style={styles.arkaplan}>
            <View style={styles.mainLogoView}>
                <MainLogo></MainLogo>
            </View>
            <View>
            <FlatList
            data={antreman}
            renderItem={element =>{
                return(
                    <TouchableOpacity style={styles.btnView}>
                        <Text style={styles.btnTxt}> 
{element.item}
                        </Text>
                    </TouchableOpacity>
                )
            }}
            >

            </FlatList>
            </View>
            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('GirisScreen')
            }}
            style={{alignItems:'center'}}>
<BackIcon></BackIcon>
            </TouchableOpacity>
            

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
    mainLogoView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnView:{
        borderRadius:20,
        width:'100%',
        padding:10,
        alignItems:'center',
        backgroundColor:'black',
        marginVertical:10
    },
    btnTxt:{
        color:'white',
        fontSize:38
    }

})
export default SplitScreen;