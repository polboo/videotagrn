/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Video from "./src/Video";
export default class VideoTagUser extends Component {
  render() {
    return (
      <View>
        <Video />
      </View>
    );
  }
}

AppRegistry.registerComponent("videotagrn", () => VideoTagUser);
