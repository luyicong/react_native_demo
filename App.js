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
  View
} from 'react-native';

import FlexBox from './src/common/FlexBox';
import Header from './src/common/Header';
import Search from './src/common/Search';

type Props = {name:'123456'};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Header></Header>
          <Search></Search>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
