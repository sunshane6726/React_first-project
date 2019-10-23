// app/components/SubTitle.js

import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const SubTitle = () => (
    <View>
        <Text style = {styles.subTitleText}>해야 할일</Text>
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