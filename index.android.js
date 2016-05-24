import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import EntryPoint from './source/EntryPoint'

class MyChatApp extends Component {
  render() {
    return (
      <EntryPoint />
    );
  }
}

AppRegistry.registerComponent('MyChatApp', () => MyChatApp);
