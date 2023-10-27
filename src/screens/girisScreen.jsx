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
            name:'CHEST',
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
            name:'SHOULDER',
            details:[
                {
                    isim:'Shoulder Press',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/shoulderpress.png',
                    pngName:'ShoulderPress'
                },
                {
                    isim:'Shoulder Fly',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/shoulderfly.png',
                    pngName:'ShoulderFly'
                },
                {
                    isim:'Front Shoulder Fly',
                    rep:'12',
                    set:'3',
                    png:'../assets/png/frontshoulder.png',
                    pngName:'FrontShoulder'
                },
                {
                    isim:'Back Shoulder Machine Fly',
                    rep:'12',
                    set:'3',
                    png:'../assets/png/backshoulder.png',
                    pngName:'BackShoulder'
                }
            ]
        },
        {
            name:'ARM',
            details:[
                {
                    isim:'Rope PushDown',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/rope.png',
                    pngName:'RopePushdown'
                },
                {
                    isim:'Cable Push Down',
                    rep:'15',
                    set:'4',
                    png:'../assets/png/pushdown.png',
                    pngName:'CablePushDown'
                },
                {
                    isim:'Dumbell Biceps Curl',
                    rep:'10 x 2',
                    set:'3',
                    png:'../assets/png/bicepscurl.png',
                    pngName:'BicepsCurl'
                },
                {
                    isim:'Z Bar Biceps Curl',
                    rep:'15',
                    set:'3',
                    png:'../assets/png/zbarbiceps.png',
                    pngName:'ZBarCurl'
                }
            ]
        },
        {
            name:'LEG',
            details:[
                {
                    isim:'Squat',
                    rep:'10',
                    set:'4',
                    png:'../assets/png/squat.png',
                    pngName:'Squat'
                },
                {
                    isim:'Leg Press',
                    rep:'15',
                    set:'4',
                    png:'../assets/png/legpress.png',
                    pngName:'LegPress'
                },
                {
                    isim:'Leg Curl',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/legcurl.png',
                    pngName:'LegCurl'
                },
                {
                    isim:'Leg Extension',
                    rep:'15',
                    set:'3',
                    png:'../assets/png/legEx.png',
                    pngName:'LegEx'
                },
                {
                    isim:'Hip Trust',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/hiptrust.png',
                    pngName:'HipTrust'
                },

            ]
        },
        {
            name:'BACK',
            details:[
                {
                    isim:'Lat Pull Down',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/pulldown.png',
                    pngName:'PullDown'
                },
                {
                    isim:'Lat Low Row',
                    rep:'12',
                    set:'4',
                    png:'../assets/png/lowrow.png',
                    pngName:'LatLowRow'
                },
              
                {
                    isim:'Single Lat Pull',
                    rep:'12 x 2',
                    set:'3',
                    png:'../assets/png/singlelatpull.png',
                    pngName:'SingleLatPull'
                },
                {
                    isim:'Dumbell Row',
                    rep:'12 x 2',
                    set:'4',
                    png:'../assets/png/dumbellrow.png',
                    pngName:'DumbellRow'
                },
            ]
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