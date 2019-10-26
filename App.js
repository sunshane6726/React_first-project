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
      inputValue : '',
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

  _changeText=(value)=>{
    this.setState({inputValue:value});

  }

  _addTodoItem = () => {
    if(this.state.inputValue !== ""){
      const prevTodo = this.state.todos;

      const newTodo = {title : this.state.inputValue};

      this.setState({
        inputValue : "", // 새로고침이 되어야한다. 공백
        todos : prevTodo.concat(newTodo) // concat 두개의 리스트를 이어 붙인다는 개념이다.
      });
    }
  }
  render(){
    return (
      <View style={styles.container}>
          <View style = {styles.headercentered}>
              <Header/>
          </View>

          <View style = {styles.subContainer}>
            <SubTitle title ="해야할일"/>
            <Input
              value = {this.state.inputValue}
              changeText = {this._changeText} // 메소드로 _changeText, _addTodoItem 선언
              addTodoItem = {this._addTodoItem}/>
          </View>

          <View style = {styles.subContainer}> 
            <SubTitle title ="해야 할 목록"/>
            

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
  // 원래 key 값을 index로 넣으면 안되기때문에 에러가 발생한다 에러를 해결하시고 싶은 분은 원래 공식 React.js 사이트에서 직접 해결하던지 추가자료를 보고 해결하면된다.


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
