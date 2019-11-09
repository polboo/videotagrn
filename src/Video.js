import React, { Component } from "react";
import { View, Text } from "react-native";
import { RNJuvoPlayerApi } from "react-native-juvo-player-api";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Nothing" };
    //this.JuvoPlayer = RNJuvoPlayerApi.RNJuvoPlayerApi;
    //this.JuvoEventEmitter = new NativeEventEmitter(this.JuvoPlayer);
    this.onTVKeyDown = this.onTVKeyDown.bind(this);
  }

  componentWillMount() {
    //this.JuvoEventEmitter.addListener("onTVKeyDown", this.onTVKeyDown);
  }

  onTVKeyDown(pressed) {
    //There are two parameters available:
    //params.KeyName
    //params.KeyCode

    this.setState({ message: pressed.KeyName });
  }

  render() {
    //RNJuvoPlayerApi.Log("HI");
    return (
      <View>
        <Text style={{ top: 400, left: 400, width: 800, height: 200 }}>
          Welcome to Tizen React Native ! {this.state.message}
        </Text>
      </View>
    );
  }
}

export default Video;
