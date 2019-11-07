import React, { Component } from "react";
import { View, Text } from "react-native";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={{ top: 400, left: 400, width: 800, height: 200 }}>
          Welcome to tizen ! Welcome to Samsung~
        </Text>
      </View>
    );
  }
}

export default Video;
