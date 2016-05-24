import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';

import LoginPage from './LoginPage';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

class EntryPoint extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          name: 'login',
          component: LoginPage
        }}
        renderScene={
          (route, navigator) => {
            return React.createElement(route.component, {...route.passProps, route, navigator } );
          }
        }
      />
    );
  }
}

module.exports = EntryPoint;