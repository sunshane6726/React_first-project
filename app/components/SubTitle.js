// app/components/SubTitle.js

import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const SubTitle = ({title}) => ( // put down title from Props on argument of function 
    <View>
        <Text style ={styles.subTitleText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    subTitleText: {
        color: '#3f4e66',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default SubTitle;