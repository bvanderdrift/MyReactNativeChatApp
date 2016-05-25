import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';

import LoginPage from './LoginPage';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69CAFF'
  }
});

class EntryPoint extends Component {
  constructor(props) {
    super(props);
  }
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