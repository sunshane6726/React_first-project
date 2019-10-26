// first-project/app/components/header.js

import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function Input({value,changeText,addTodoItem}) { // Arrow function을 사용 (return 값을 ) 이용
    return (
    <TextInput
        value = {value}
        onChangeText = {changeText}
        onEndEditing = {addTodoItem}


        style = {styles.input}
        placeholder = {"할일을 입력해주세요"}
        maxLength = {30}
        returnKeyType = "done"/>
    );
};


const styles = StyleSheet.create({
    
    input : {
        fontSize : 17,
        fontWeight : 'bold',
        marginTop:10,
        marginBottom : 20,

    },
});



