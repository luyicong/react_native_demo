import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';

export default class Search extends Component{
  //点击搜索事件
  AlertEvent = () => {
    alert('你点击了搜索！')
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.search_wrap}></View>
        <TouchableOpacity style={styles.btn} onPress={this.AlertEvent}>
          <Text style={styles.txt}>搜素1</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap:{
    flex:1,
    flexDirection:'row',
    height:45,
    marginLeft:5,
    marginRight:5,
  },
  search_wrap:{
    flex:1,
    height:45,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'blue'
  },
  btn:{
    width:100,
    height:45,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems: 'center',
  },
  txt:{
    color:'#fff',
    fontSize:18
  }
})
