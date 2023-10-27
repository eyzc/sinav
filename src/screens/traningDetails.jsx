import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
import SmallMainLogo from "../assets/icons/MainLogo";
import BackIcon from "../assets/icons/backIcon";
import HomeIcon from "../assets/icons/homeIcon";
import MainLogo from "../assets/icons/MainLogo";
import RepIcon from "../assets/icons/repIcon";
import SetIcon from "../assets/icons/setIcon";
import BenchPress from '../assets/png/benchpress.png';
import NextIcon from "../assets/icons/nextIcon";
const MMKV = new MMKVLoader().initialize()

const DetailsScreen = ({ navigation, route }) => {
    let [antreman, SetAntreman] = useMMKVStorage('ant',MMKV,[])
    let [details, SetDetails] = useState([antreman[0].details])
    let index = route.params.index
    console.log(index)
    console.log(antreman[0].details)

    return (

        <SafeAreaView style={styles.arkaplan}>
            <View style={styles.mainLogoView}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('SplitScreen')
                }}
                >
                <BackIcon></BackIcon>
                </TouchableOpacity>
                
                <SmallMainLogo></SmallMainLogo>
                
                <TouchableOpacity
                   onPress={()=>{
                    navigation.navigate('GirisScreen')
                }}
                >

                <HomeIcon></HomeIcon>
                </TouchableOpacity>
                
            </View>
            <View style={styles.sideView}>
                <Text style={styles.sideTxt}>sadasdsadsa</Text>
            </View>
            <View style={styles.imgView}>
            <Image source={BenchPress}></Image>
            </View>
            <View>
                <Text style={styles.numberTxt}>BENCH PRESS</Text>
            </View>
            <View style={styles.iconView}>
                <RepIcon></RepIcon>
<SetIcon></SetIcon>
            </View>
            <View style={styles.iconView}>
                <Text style={styles.numberTxt}>12</Text>
                <Text style={{...styles.numberTxt,marginRight:10}}>4</Text>
            </View>
            
            <TouchableOpacity style={styles.imgView}>
            <NextIcon></NextIcon>
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
        justifyContent:'space-between'
        
    },
    mainLogoView: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    sideView:{
        borderRadius:20,
        backgroundColor:'black',
        width:'100%',
        padding:5
    },
    sideTxt:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    },
    imgView:{
        resizeMode:'stretch',
        width:'100%',
        alignItems:'center'
    },
    iconView:{
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center',
        alignItems:'center'
    },
    numberTxt:{
        fontSize:42,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        padding:10
    },
   

})
export default DetailsScreen