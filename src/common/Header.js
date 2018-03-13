import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Header extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.com_content}>
          <Text>content</Text>
          <Image 
            source={{uri: 'https://img.alicdn.com/simba/img/TB1y4WJo3vD8KJjy0FlSuugBFXa.jpg'}}
            style={{width:160,height:200}}
            />
            <Image 
            source={require('./img/111.jpg')}
            style={{width:300,height:120}}
            />   
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:50
  },
  header:{
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:1,
    borderColor:'#ddd'
  },
  com_content:{
    flex: 1,
    height:100
  }
})
