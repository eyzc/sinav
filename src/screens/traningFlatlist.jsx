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
import SmallRepIcon from "../assets/icons/smallRepIcon";
import SmallSetIcon from "../assets/icons/smallSetIcon";
const MMKV = new MMKVLoader().initialize()

const imageResources = (imageName) => {
    const staticImage = {
        'BenchPress': require('../assets/png/benchpress.png'),
        'InclinePress': require('../assets/png/inclinepress.png'),
        'CableFly': require('../assets/png/cablefly.png'),
        'ButterFly': require('../assets/png/butterfly.png'),
        'ShoulderPress': require('../assets/png/shoulderpress.png'),
        'ShoulderFly': require('../assets/png/shoulderfly.png'),
        'FrontShoulder': require('../assets/png/frontshoulder.png'),
        'BackShoulder': require('../assets/png/backshoulder.png'),
        'RopePushdown': require('../assets/png/rope.png'),
        'CablePushDown': require('../assets/png/pushdown.png'),
        'BicepsCurl': require('../assets/png/bicepscurl.png'),
        'ZBarCurl': require('../assets/png/zbarbiceps.png'),
        'Squat': require('../assets/png/squat.png'),
        'LegPress': require('../assets/png/legpress.png'),
        'LegCurl': require('../assets/png/legcurl.png'),
        'LegEx': require('../assets/png/legEx.png'),
        'HipTrust': require('../assets/png/hiptrust.png'),
        'PullDown': require('../assets/png/pulldown.png'),
        'LatLowRow': require('../assets/png/lowrow.png'),
        'SingleLatPull': require('../assets/png/singlelatpull.png'),
        'DumbellRow': require('../assets/png/dumbellrow.png'),
    }
    if (staticImage[imageName]) {
        return (staticImage[imageName])
    }
    return { uri: imageName }

}

const TraningFlatlist = ({ navigation, route }) => {
    let [antreman, SetAntreman] = useMMKVStorage('ant', MMKV, [])


    let index = route.params.index
    console.log(index)

    let [details, SetDetails] = useState(antreman[index].details)
    console.log(details)
    return (

        <SafeAreaView style={styles.arkaplan}>
            <View style={styles.mainLogoView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SplitScreen')
                    }}
                >
                    <BackIcon></BackIcon>
                </TouchableOpacity>

                <SmallMainLogo></SmallMainLogo>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('GirisScreen')
                    }}
                >

                    <HomeIcon></HomeIcon>
                </TouchableOpacity>

            </View>
            <View style={styles.sideView}>
                <Text style={styles.sideTxt}>{antreman[index].name}</Text>
            </View>
            <FlatList
                style={styles.flatlistView}
                data={details}
                renderItem={element => {
                    console.log(element)
                    return (
                        <TouchableOpacity style={{ justifyContent: 'space-between', marginVertical: 15, }}>
                            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>

                                <Image style={styles.imgView}
                                    source={imageResources(element.item.pngName)}
                                >
                                </Image>

                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ justifyContent: 'space-between', alignItems: 'center',marginRight:20 }}>
                                        <Text style={styles.sideTxt}>{element.item.rep}</Text>
                                        <Text style={styles.sideTxt}>{element.item.set}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <SmallRepIcon></SmallRepIcon>
                                        <SmallSetIcon></SmallSetIcon>
                                    </View>

                                </View>
                            </View>
                            <View style={{...styles.sideView,borderRadius:5,marginTop:10}}>
                            <Text style={styles.sideTxt}>{element.item.isim}</Text>
                            </View>
                            
                        </TouchableOpacity>
                    )
                }}

            >

            </FlatList>


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
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    sideView: {
        borderRadius: 20,
        backgroundColor: 'black',
        padding: 5
    },
    sideTxt: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    flatlistView: {
        
       
        
    },
    imgView: {
        resizeMode: 'stretch',
        width: 200,
        height: 120,

    },



})
export default TraningFlatlist