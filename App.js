/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import Main from './src/main';
import {Provider} from 'react-redux';

import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <View style={styles.container}>
            <Main/>
          </View>  
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});