// first-project/app/components/header.js

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => ( // Arrow function을 사용 (return 값을 ) 이용
    <View style={styles.headerContainer}>
        <Text style = {styles.headerText}>할일 체크리스트</Text>/Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer:{
        flex :1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:70,
        marginBottom:40,
// test
    },

    headerText:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3f4e66',
    },
})

export default Header;

