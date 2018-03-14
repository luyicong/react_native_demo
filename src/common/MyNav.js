import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

//页面一
class PageOne extends Component {
  constructor(props){
      super(props);
  }
  //打开新的页面(下一级)
  pressPush() {
    this.props.navigator.push({
        component:PageTwo
    })
  }
  render() {
    return (
      <View style={[styles.wrap,styles.page1]}>
          <TouchableOpacity onPress={this.pressPush}>
            <Text style={styles.text}>我的第一个页面</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
//页面二
class PageTwo extends Component{
  //打开新的页面(下一级)
  pressPush() {
    this.props.navigator.push(PageTwo)
  }
  render() {
    return (
      <View style={[styles.wrap,styles.page2]}>
          <TouchableOpacity><Text style={styles.text}>我的第二个页面</Text></TouchableOpacity>
      </View>
    )
  }
}
/*
  第一步：initialRoute
  指定默认页面，启动app后展示的页面，对象的属性时自定义的，此对象的内容会在renderScene方法中处理，必包含的属性

  第二步：configureScene,创景渲染动画配置

  第三步：renderScene，场景渲染
  参数：route第一次创建导航器的路由对象，navigator（导航器对象）
*/
export default class MyNav extends Component{
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  _renderScene(route, navigator) {
      let Component = route.component;
      return (
          <Component {...route.params} navigator={navigator}/>
      );
  }
  render() {
    return (
        <Navigator

          initialRoute={{
              name: 'PageOne',
              component:PageOne
          }}
          configureScene={(route)=>{
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(e, i)=>this._renderScene(e, i)}
        />
    )
  }
}

const styles = StyleSheet.create({
  wrap:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page1:{
    backgroundColor:'yellow'
  },
  page1:{
    backgroundColor:'blue'
  },
  text:{
    width:120,
    height:40,
    lineHeight:40,
    fontSize:16,
    textAlign:'center',
    backgroundColor:'red',
    color:'#fff',
    borderRadius:4,
  }
})
