import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
import MainLogo from "../assets/icons/MainLogo";
import EatIcon from "../assets/icons/eaticon";
import BedIcon from "../assets/icons/bedIcon";
import RepeatIcon from "../assets/icons/repeatIcon";
import TrainIcon from "../assets/icons/trainIcon";
const MMKV = new MMKVLoader().initialize()

const GirisScreen = ({ navigation, route }) => {
    let [antreman, SetAntreman] = useMMKVStorage('ant',MMKV,[])
    useEffect(()=>{
SetAntreman(MMKV.getMap('ant'))
    SetAntreman([
        {
            name:'GOGUS',
            details:[
                {
                    isim:'Bench Press',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/benchpress.png',
                    pngName:'BenchPress'
                },
                {
                    isim:'Incline Bench Press',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/inclinepress.png',
                    pngName:'InclinePress'
                },
                {
                    isim:'Cable Fly',
                    rep:'15',
                    set:'4',
                    png:'../assets/png/cablefly.png',
                    pngName:'CableFly'
                },
                {
                    isim:'Butter Fly',
                    rep:'15',
                    set:'4',
                    png:'../assets/png/butterfly.png',
                    pngName:'ButterFly'
                }
            ]
        },
        {
            name:'OMUZ'
        },
        {
            name:'KOL'
        },
        {
            name:'BACAK'
        },
        {
            name:'SIRT'
        },
    ])
}
    ,[])
console.log(antreman)
    return (

        <SafeAreaView style={styles.arkaplan}>
            <View style={styles.mainLogoView}>
                <MainLogo></MainLogo>
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={styles.dateTxt}>26   EKİM   2023</Text>
            </View>
            <View>
                <View style={styles.mainView}>
                    <Text style={{ ...styles.dateTxt, fontSize: 24, }}>EAT</Text>
                    <EatIcon></EatIcon>
                </View>
                <View style={styles.mainView}>
                    <Text style={{ ...styles.dateTxt, fontSize: 24, }}>SLEEP</Text>
                    <BedIcon></BedIcon>
                </View>
                <View style={styles.mainView}>
                    <Text style={{ ...styles.dateTxt, fontSize: 24, }}>TRAIN</Text>
                    <TrainIcon></TrainIcon>
                </View>
                <View style={styles.mainView}>
                    <Text style={{ ...styles.dateTxt, fontSize: 24, }}>REPEAT</Text>
                    <RepeatIcon></RepeatIcon>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.btnView}>
                    <Text style={styles.btnTxt}>
                        Rastgele 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('SplitScreen')
                }}
                style={styles.btnView}>
                    <Text style={styles.btnTxt}>
                        Antreman Planı
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnView}>
                    <Text style={styles.btnTxt}>
                        Beslenme Planı
                    </Text>
                </TouchableOpacity>
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
    mainLogoView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateTxt: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    mainView: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth:2

    },
    btnView: {
        backgroundColor: 'black',
        borderRadius: 20,
        alignItems: 'center',
        width: '40%',
        padding: 15,
        justifyContent:'center',

    },
    btnTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }





})
export default GirisScreen;