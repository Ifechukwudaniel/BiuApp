import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header'
import { Text,  } from 'native-base';



 
const Attendance = ({navigation}) => {
    return (
        <View style={styles.container}>
             <Header  screenName="Attendance" onBackPress= {()=>navigation.push("Home")} />
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
})
export default Attendance;