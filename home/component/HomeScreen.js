import React, { Component } from "react";
import { StyleSheet } from "react-native";
import axios from "axios";
import { View } from "react-native";
// import Footer from "./Footer"
// import Navbarr from "./Navbarr"
import Postitem from "./Postitem";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HomeScreen extends Component {
  state = {
    posts: [],
    namebook: this.props.navigation.state.params.namebook
  };

  static navigationOptions = {
    title: "Home"
  };

  componentDidMount = () => {
    axios
      .get("http://192.168.43.99:19000/Yasmin/all")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Postitem
            posts={this.state.posts}
            namebook={this.props.navigation.state.params.namebook}
          />
        </View>

        <View style={styles.footer}>
          <Icon
            name="home"
            size={30}
            onPress={() => this.props.navigation.navigate("Home")}
          />
          <Icon
            name="search"
            size={30}
            onPress={() => this.props.navigation.navigate("search")}
          />
          <Icon2
            name="md-add-circle"
            size={30}
            onPress={() => this.props.navigation.navigate("add")}
          />
          <Icon
            name="user"
            size={30}
            onPress={() =>
              this.props.navigation.navigate("Profile", {
                namebook: this.state.namebook
              })
            }
          />
          <Icon
            name="sign-out"
            size={30}
            onPress={() => this.props.navigation.navigate("login")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    // alignItems:"center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    backgroundColor: "#888",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50
  }
});
