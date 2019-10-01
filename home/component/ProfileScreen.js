import React, { Component } from "react";
import { Button, View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import axios from "axios";
import Postitem from "./Postitem";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-cards";

export default class ProfileScreen extends Component {
  state = {
    postname: []
  };

  static navigationOptions = {
    title: "Profile"
  };

  componentDidMount = () => {
    axios
      .get(
        `http://192.168.43.99:9000/Yasmin/allname/${this.props.navigation.state.params.namebook}`
      )
      .then(res => {
        this.setState({ postname: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("profile", this.props.navigation.state.params.namebook);
    //  console.log('this.state.postname', this.state.postname)
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={{ fontSize: 20, marginVertical: 10 }}>
            posts: {this.state.postname.length}
          </Text>

          {/* <Postitem posts={this.state.postname}  /> */}

          <ScrollView style={{ width: "100%" }}>
            {this.state.postname.map((item, key) => (
              <View key={key}>
                <Card style={styles.card}>
                  <CardTitle title={item.name} style={{ marginTop: -17 }} />
                  <CardImage
                    style={{ borderBottomWidth: 2, borderColor: "grey" }}
                    source={{ uri: item.img }}
                    title={item.category}
                  />
                  {/* <CardTitle title={item.category} style={{ marginTop:-17}}/> */}
                  <CardTitle style={{ marginTop: -20 }} subtitle={item.state} />
                  <CardContent
                    text={item.description}
                    style={{ borderBottomWidth: 2, borderColor: "#EDEAE0" }}
                  />
                  <CardAction
                    style={{ alignSelf: "center" }}
                    separator={true}
                    inColumn={false}
                  >
                    <CardButton
                      onPress={() => alert(item.namebook)}
                      title="رؤية الحجز"
                      color={item.booking ? "red" : "green"}
                    />
                  </CardAction>
                </Card>
              </View>
            ))}
          </ScrollView>
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
            onPress={() => this.props.navigation.navigate("profile")}
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
  },
  card: {
    borderColor: "grey",
    borderWidth: 2,
    margin: 15
  }
});
