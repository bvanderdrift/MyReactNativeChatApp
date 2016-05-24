import React, { Component } from 'react';
import {
  ProgressBarAndroid
} from 'react-native';

class ActivityLoader extends Component {
  render() {
    return (
      <ProgressBarAndroid />
    );
  }
}

module.exports = ActivityLoader;