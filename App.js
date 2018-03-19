/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

//导入stack导航组件
import { StackNavigator } from 'react-navigation';

import ChatScreen from './src/ChatScreen';

import FlexBox from './src/common/FlexBox';
import Header from './src/common/Header';
import Search from './src/common/Search';
// import MyNav from './src/common/MyNav';

// export default class App extends Component {
//   render() {
//     return (
//       {/*<View style={styles.container}>
//           <Header></Header>
//           <Search></Search>
//       </View>*/}
//     );
//   }
// }

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',//标题
  };

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}
const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },//新添加的页面
},{
  initialRouteName: 'Home', // 默认显示界面
  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  navigationOptions:{
    headerTintColor:'#000',
    headerStyle:{
      backgroundColor:'#ccc'
    },
    headerTitleStyle:{
      fontSize:30,
      color:'white',
      fontWeight:'500',
    },
    headerBackTitleStyle:{
      color:'red'
    }
    // headerTitleStyle:'#fff'
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });

export default App
