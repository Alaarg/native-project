import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default class Todo extends Component {
  state = {};
  render() {
    return (
      <View>
        <View key={this.props.keyval}>
          <Text>{this.props.val.date}</Text>
          <Text>{this.props.val.notes}</Text>
          <Button title="x" onPress={this.deleteMethod} />
        </View>
      </View>
    );
  }
}
