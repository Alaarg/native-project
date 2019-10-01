import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-cards";

export default class Postitem extends Component {
  booking = (booking, namebook) => {
    axios
      .put(`http://192.168.43.99:9000/Yasmin/book/${booking}/${namebook}`)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log('oooooooooo ', this.props.namebook )

    return (
      <ScrollView style={{ width: "100%" }}>
        {this.props.posts.map((item, key) => (
          <View key={key}>
            <Card style={styles.card}>
              <CardTitle
                title={item.name}
                style={{
                  position: "absolute",
                  zIndex: 9,
                  marginTop: -15
                }}
              />
              <View style={styles.overlyBoxImg}>
                <CardImage
                  style={{ borderBottomWidth: 2, borderColor: "#3c1053" }}
                  source={{ uri: item.img }}
                  title={item.category}
                  color="black"
                />
                <View
                  style={{
                    backgroundColor: "#000",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    left: 0
                  }}
                />
              </View>
              {/* <CardTitle 
     title={item.category}
     style={{ marginTop:-17}}

   /> */}

              <CardTitle
                style={{ marginTop: -20, color: "#3c1053" }}
                subtitle={item.state}
              />
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
                  color="#fff"
                  style={styles.cordButton}
                  onPress={this.booking.bind(
                    this,
                    item._id,
                    this.props.namebook
                  )}
                  title="حجز الغرض"
                />
              </CardAction>
            </Card>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderColor: "#3c1053",
    borderWidth: 2,
    margin: 15,
    textAlign: "center"
  },
  cordButton: {
    backgroundColor: "#3c1053"
  },
  overlyBoxImg: {
    position: "relative",
    width: "100%",
    height: 200,
    overflow: "hidden"
  }
});
