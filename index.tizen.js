/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from "react";
import { AppRegistry, StyleSheet, Text, View, NativeModules, NativeEventEmitter } from "react-native";

export default class hello_tizen extends React.Component {
  constructor(props) {
    super(props);
    this.player = NativeModules.JuvoPlayer;
    this.EventEmitter = new NativeEventEmitter(this.player);
    this.state = {
      pressedKey: " no key was pressed"
    };
    this.onTVKeyDown = this.onTVKeyDown.bind(this);
  }

  componentWillMount() {
    this.EventEmitter.addListener("onTVKeyDown", this.onTVKeyDown);
  }

  onTVKeyDown(pressed) {
    //There are two parameters available:
    //params.KeyName
    //params.KeyCode
    this.setState({
      pressedKey: pressed.KeyName
    });

    switch (pressed.KeyName) {
      case "Return":
      case "XF86AudioPlay":
      case "XF86PlayBack":
        this.player.StartPlayback("http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-manifest.mpd", null, "dash");
        break;
      case "XF86Back":
      case "XF86AudioStop":
        this.player.StopPlayback();
        break;
    }
  }

  render() {
    this.player.Log("Hello from JuvoPlayer!!!");
    return (
      <View>
        <Text style={{ top: 400, left: 400, width: 400, height: 100 }}>Welcome to tizen ! Welcome to Samsung --- {this.state.pressedKey} ---</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("videotagrn", () => hello_tizen);
