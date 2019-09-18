<<<<<<< HEAD
//@@ -0,0 +1,31 @@
=======
>>>>>>> 541f7ad26e40497301302e4f14c5811ece43bc76
// app/components/TodoItem.js

import React from "react"
import {View, Text, StyleSheet, Dimensions} from "react-native"

const TodoItem = () => (
    <View style = {StyleSheet.todoContainer}>
        <View>
            <Text style = {StyleSheet.todoitem}>할일 1</Text>
        </View>

    </View>
);
// 아래의 코드없이 샐행해보구 추가하고 실행해보세요! 차이가 보이실껍니다.
const {width,height} = Dimensions.get('window');  //Dimensions 는 현재 App이 띄어지는
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
    }
})

export default TodoItem;