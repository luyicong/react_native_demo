import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FlexBox extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex_item}>
          <Text>1111</Text>
        </View>
        <View style={styles.flex_item}>
          <Text>2222</Text>
        </View>
        <View style={styles.flex_item}>
          <Text>3333</Text>
        </View>
        <View style={styles.flex_item}>
          <Text>4444</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // height:50,
    flexDirection:'row',
    // backgroundColor: '#f40',
    // flexWrap:'wrap'
  },
  flex_item:{
    flex: 1,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    // borderBottomWidth:1,
    borderRightWidth:1,
    borderColor:'blue'
  }
})
