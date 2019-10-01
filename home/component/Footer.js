import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
// import {Icon } from 'react-native';
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        {/* <Text style={{fontSize:15}} >Footer</Text> */}

        {/* const myButton = (
  <Icon.Button
    name="home"
    // onPress={ this.props.navigation.goBack()}
  >home</Icon.Button>
); */}
        {console.log("this.props.home1", this.props.navigation)}
        <Icon.Button
          name="home"
          size={30}
          onPress={() => this.props.navigation.popToTop()}
        />
        <Icon name="search" size={30} />
        <Icon2 name="md-add-circle" size={30} />
        <Icon
          name="user"
          size={30}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#888",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50
  }
});
