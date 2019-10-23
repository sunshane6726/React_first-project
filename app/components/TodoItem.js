
// app/components/TodoItem.js

import React from "react"
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native"
import {AntDesign} from "@expo/vector-icons" // expo가 제공해주는 component를 import 합시다.

const {width, height} = Dimensions.get('window');  //Dimensions 는 현재 App이 띄어지는
                                                        // 화면의 width와 height를 받아와 저장해준다.
const TodoItem = () => (
    <View style = {StyleSheet.todoContainer}>
        <View>
            <View style = {styles.makerow}>

            <TouchableOpacity>
                <AntDesign name = 'checkcircle' size = {20} style = {styles.checkbtn}/> {/* 주석처리 확인 */}
            </TouchableOpacity>
            <Text style = {StyleSheet.todoitem}>할일 1</Text>
            </View>
        </View>

    </View>
);
// 아래의 코드없이 샐행해보구 추가하고 실행해보세요! 차이가 보이실껍니다.
//it -m const {width, height} = Dimensions.get('window');  //Dimensions 는 현재 App이 띄어지는
                                                        // 화면의 width와 height를 받아와 저장해준다.
const styles = StyleSheet.create({
    todoContainer:{
        padding: 5,
        marginTop: 20,
        borderBottomWidth: 1,
        width: width-40, // 애는 전체 길이보다 40 만큼 작게 해서 여유를 주는것 입니다.
        // width를 위해서 선언과 초기화 해주지 않으면 사용할 수 없어요 width-40 해줄수 없어요
    },

    todoitem : {
        fontSize : 20,
    },
    lineContainer :{
        flexDirection:'row',
        justifyContent : 'space-between',  // 가로 정렬하는데 compo사이를 균등하게 space를 구분
        alignItems : 'center', // 세로 정렬
    },
    checkbtn : {
        marginRight : 20, // checkbtn에서 알 일을 오른쪽으로 떨어트리기 위햇 사용
    },
    makerow:{
        flexDirection:'row',
    }
})

export default TodoItem;