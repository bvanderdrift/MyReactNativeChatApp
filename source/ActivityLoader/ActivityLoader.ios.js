import React, { Component } from 'react';
import {
  ActivityIndicatorIOS
} from 'react-native';

class ActivityLoader extends Component {
  render() {
    return (
      <ActivityIndicatorIOS size="large" />
    );
  }
}

module.exports = ActivityLoader;