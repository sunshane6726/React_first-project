// app/components/SubTitle.js

import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function SubTitle({title}){
    return (
        <View>
            <Text style = {styles.subTitleText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subTitleText: {
        color: '#3f4e66',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

