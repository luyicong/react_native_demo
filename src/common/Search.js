import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

export default class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Text:''
    }
  }
  //点击搜索事件
  AlertEvent = () => {
    alert(this.state.Text)
  }
  //监听文本框值变化
  InputChange = (Text) => {
    this.setState({Text})
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.search_wrap}>
          <TextInput 
            style={styles.text_input}
            underlineColorAndroid="transparent"
            onChangeText={this.InputChange}
            placeholder="请输入关键字"
            value={this.state.Text}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.AlertEvent}>
          <Text style={styles.btn_txt}>搜素</Text>
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
  btn_txt:{
    color:'#fff',
    fontSize:18,
  },
  text_input:{
    height:45,
    flex:1,
    fontSize:16,
  }
})
