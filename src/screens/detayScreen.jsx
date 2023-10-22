import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
const MMKV = new MMKVLoader().initialize()
import BackIcon from "../assets/icons/backIcon";
const DetayScreen = ({ navigation, route }) => {

    let [anilar1, SetAnilar1] = useMMKVStorage('ani1', MMKV, [])
    console.log(anilar1)
    let [renk, SetRenk] = useState('')

    let index = route.params.index




    return (
        <View style={styles.arkaplan}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('GirisScreen')
                }}
                style={styles.backView}>
                <BackIcon></BackIcon>
            </TouchableOpacity>

            <View style={styles.içerikView}>
                <View style={{ ...styles.marginT, borderTopWidth: 0, borderWidth: 2, padding: 20 }}>
                    <Text style={styles.baslikTxt}>{anilar1[index].baslik}</Text>
                </View>
                <View>
                    <Text style={styles.tarihTxt}>{anilar1[index].tarihAy}</Text>
                </View>
                <View style={{ ...styles.marginT, borderWidth: 2, borderBottomWidth: 0, padding: 20, height: '75%' }}>
                    <Text style={styles.içerikTxt}>{anilar1[index].icerik}</Text>
                </View>
            </View>



        </View>

    )
}
const styles = StyleSheet.create({
    arkaplan: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    backView: {
        height: 35,
        width: 35,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    içerikView: {
        width: '100%',
        height: '100%',
    },
    marginT: {
        marginTop: 20,
        paddingVertical: 10
    },
    baslikTxt: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Lora-Semibold'
    },
    tarihTxt: {
        fontFamily: 'Lora-Regular',
        fontSize: 16,
        color: 'pink'
    },
    içerikTxt: {
        fontFamily: 'Lora-Regular',
        fontSize: 32,
        color: 'white'
    }


})
export default DetayScreen;