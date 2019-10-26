import React from 'react'; // React를 사용할 수 있게 import(가져오기)
import { StyleSheet, Text, View, FlatList } from 'react-native'; // RN이 제공해주는 기본 component import
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/Input';
import Listitem from './app/components/Listitem';


// default로 내보낸것을 Header라는 이름으로 가져옵니다.
export default class App extends React.Component { // App이라는 component를 만들어 주면서 export로 모듈화를 시킵니다. state 은 class만 다룰수가 있다.
  constructor(props){ // 같이 생성해주는 초기값 생성값
    super(props);
    this.state = { // this = app // 객체모양
      todos : [ // 리스트 모양 
        {
        title : "나는 공부를 하지 않아" 
        },

        {
          title : "일찍 일어 날래"
        }      
      ]
    }
  }

  _makeTodoItem = ({item,index})=>{
    return(
      <Listitem name = {item.title} />

    )
    }
  render(){
    return (
      <View style={styles.container}>
          <View style = {styles.headercentered}>
              <Header/>
          </View>

          <View style = {styles.subContainer}>
            <SubTitle title ="해야할일"/>
            <Input/>
          </View>

          <View style = {styles.subContainer}> 
            <SubTitle title ="해야 할 목록"/>
            <Listitem name = "코딩하기"/>
            <Listitem name = "운동하기"/>
            <Listitem name = {this.state.todos[0].title}></Listitem> 

            <FlatList
              data = {this.state.todos}
              renderItem = {this._makeTodoItem} // _ 은 method 형태로 보여줄것이다.
              keyExtractor = {(item,index) => {return '$(index)'}}/> 

          </View>
      </View> // 아래에서 선언한  스타일을 적용 시켜줍니다. (JSX 방식 차용)
    ); // App.js가 메인화면이라서 Text따라 메인화면도 바뀐다.
    }
  }

  //{/* 주석처리 다른 방식을 차용한다.*/ }
  // Ctrl + /로 차용해서 주석처리를 사용할수 가 있다.
  // todolist 다 지우기


const styles = StyleSheet.create({ // styles 이라는 객체를 만들뒤에 
  container: { //꾸미고 싶은 속성들을 객체화 시켜서 객체안에 저장시킵니다.
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
   // borderWidth : 30,
   // borderColor : 'orange', 
  }, // 객체가 끝난뒤에 , 를 적어주면 나중에 객체사이에 , 로인한 Error가 줄어들어서 조심해서 사용합시다.
  headercentered :{
    alignItems: 'center',
  },

 // subContainer:{
 //   marginLeft:20, // SubTitle Component에서 설정해주면 되지 왜 여기서 해주나요?
//                  // App.js 메인화면의 Layout을 잡아주기 위해 여기서 했습니다.
// },

});
