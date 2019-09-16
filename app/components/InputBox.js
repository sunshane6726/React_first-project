// ./app/components/InputBox.js 하여 ES6으로 쉬운 앱개발 진행
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ()=> (
    <TextInput
        style = {styles.input}
        placeholder={"오늘의 할일"}
        maxLength={30}
        returnKeyType = "done"/> // changing line for reading easily

);

const styles = StyleSheet.create({
    input:{
        fontSize : 25,
        paddingTop : 15,
    }
})

export default Input;

