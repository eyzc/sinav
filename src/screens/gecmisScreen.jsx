import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
const MMKV = new MMKVLoader().initialize()
import BackIcon from "../assets/icons/backIcon";
import DetayIcon from "../assets/icons/detayIcon";
const GecmisScreen = ({ navigation, route }) => {
    let [anilar1, SetAnilar1] = useMMKVStorage('ani1', MMKV, [])


    return (
        <View style={styles.arkaplan}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('GirisScreen')
                }}
                style={styles.backView}>
                <BackIcon></BackIcon>
            </TouchableOpacity>
            <FlatList
                data={anilar1}
                renderItem={element => {
                    let renk = ''
                    index = element.index
                    console.log('sadsadsa' + index)
                    if (index == 0) {
                        renk = ('#81B5E9')
                    } else if (index == 1) {
                        renk = ('#6A9CAF')
                    } else if (index == 2) {
                        renk = ('#B16A71')
                    } else if (index == 3) {
                        renk = ('#DEAAEF')
                    } else if (index % 4 == 0) {
                        renk = ('#81B5E9')
                    } else if (index % 4 == 1) {
                        renk = ('#6A9CAF')
                    } else if (index % 4 == 2) {
                        renk = ('#B16A71')
                    } else if (index % 4 == 3) {
                        renk = ('#DEAAEF')
                    }

                    return (

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('DetayScreen', {
                                    index: element.index
                                })
                            }}
                            style={{ ...styles.btnView, borderColor: `${renk}` }}>
                            <View>
                                <Text style={styles.baslikTxt}>{element.item.baslik}</Text>
                                <Text style={styles.tarihTxt}>{element.item.tarih}</Text>
                            </View>
                            <View >
                                <DetayIcon></DetayIcon>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            >

            </FlatList>



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
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnView: {
        borderRadius: 40,
        borderWidth: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        marginVertical: 20,
        alignItems: 'center'
    },
    baslikTxt: {
        fontFamily: 'Lora-SemiBold',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'

    },
    tarihTxt: {
        fontFamily: 'Lora-Regular',
        fontSize: 16,
        color: 'pink'
    }




})
export default GecmisScreen;