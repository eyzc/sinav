import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

const MMKV = new MMKVLoader().initialize()
import HistoryIcon from "../assets/icons/historyIcon";
import SaveIcon from "../assets/icons/saveIcon";
const GirisScreen = ({ navigation, route }) => {

    let [anilar1, SetAnilar1] = useMMKVStorage('ani1', MMKV, [])
    let [baslik, SetBaslik] = useState('')
    let [icerik, SetIcerik] = useState('')
    let [tarih, setTarih] = useState('')
    let [ay, setAy] = useState('')
    let [tarihAy, setTarihAy] = useState('')
    let index = 0
    console.log(anilar1)

    return (

        <View style={styles.arkaplan}>
            <View style={{ marginTop: 70 }}>
                <TextInput
                    placeholder="Hatırlamak istediğiniz anı için başlık giriniz."
                    textAlign="center"
                    style={styles.baslikTxt}
                    placeholderTextColor={'black'}
                    value={baslik}
                    onChangeText={SetBaslik}
                >

                </TextInput>
                <TextInput
                    placeholder="Hatırlamak istediğiniz anıyı giriniz."
                    textAlign="center"
                    style={styles.icerikTxt}
                    value={icerik}
                    onChangeText={SetIcerik}
                >

                </TextInput>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    onPress={() => {

                        navigation.navigate('GecmisScreen')
                    }}
                    style={styles.historyBtn}>
                    <HistoryIcon></HistoryIcon>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>   Geçmiş anılarını gör   </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        const now = new Date();
                        const day = String(now.getDate()).padStart(2, '0');
                        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
                        const year = now.getFullYear();

                        if (month == '01') {
                            SetAy('Ocak')
                        } else if (month == '02') {
                            setAy('Şubat')
                        } else if (month == '03') {
                            setAy('Mart')
                        } else if (month == '04') {
                            setAy('Nisan')
                        } else if (month == '05') {
                            setAy('Mayıs')
                        } else if (month == '06') {
                            setAy('Haziran')
                        } else if (month == '07') {
                            setAy('Temmuz')
                        } else if (month == '08') {
                            setAy('Ağustos')
                        } else if (month == '09') {
                            setAy('Eylül')
                        } else if (month == '10') {
                            setAy('Ekim')
                        } else if (month == '11') {
                            setAy('Kasım')
                        } else if (month == '12') {
                            setAy('Aralık')
                        }

                        setTarih(day + '-' + month + '-' + year)
                        setTarihAy(day + '-' + ay + '-' + year)
                        SetBaslik('')
                        SetIcerik('')
                        if (baslik !== '' && icerik !== '' && tarih !== '') {
                            SetAnilar1([
                                {
                                    baslik: baslik,
                                    icerik: icerik,
                                    tarih: tarih,
                                    tarihAy: tarihAy,
                                },
                                ...anilar1,
                            ])

                            navigation.navigate('DetayScreen', {
                                index: index
                            }
                            )
                        } else {

                        }


                    }}
                    style={styles.saveBtn}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>   Kaydet   </Text>
                    <SaveIcon></SaveIcon>
                </TouchableOpacity>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    arkaplan: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40

    },
    baslikTxt: {
        fontFamily: 'Lora-SemiBold',
        fontSize: 17,
        color: 'black',
        borderBottomWidth: 2,
    },
    icerikTxt: {
        fontFamily: 'Lora-Regular',
        fontSize: 16,
        textAlign: 'center',
        height: '40%'
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

    },
    historyBtn: {
        borderRadius: 20,
        height: '100%',
        width: '50%',
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFD700',


    },
    saveBtn: {
        borderRadius: 20,
        borderColor: '#FFD700',
        width: '35%',
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFD700',
    }


})
export default GirisScreen;