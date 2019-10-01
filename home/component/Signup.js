import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Form,
  Image,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import axios from "axios";
export default class Login extends Component {
  state = {
    inpUserName: "",
    inpPassword: "",
    retypePassword: "",
    inpPhoneNumber: ""
  };

  signUpBttn = () => {
    const userName = this.state.inpUserName;
    const password = this.state.inpPassword;
    const phoneNumber = this.state.inpPhoneNumber;
    const user = { userName, password, phoneNumber };
    console.log("user", user);
    if (this.state.inpPassword === this.state.retypePassword) {
      axios
        .post("http://127.0.0.1:9000/Yasmin/user", user)
        .then(result => {
          this.setState({ user: [...user, result.data] });
        })
        .catch(error => {
          console.log(error);
        });
      alert("you sign up ");
      this.props.navigation.navigate("login");
    } else {
      alert("password not match");
    }
  };

  UserName = inputText => {
    this.setState({ inpUserName: inputText });
  };

  password = inputText => {
    this.setState({ inpPassword: inputText });
  };
  phoneNumber = inputText => {
    this.setState({ inpPhoneNumber: inputText });
  };
  reTypepassword = inputText => {
    this.setState({ retypePassword: inputText });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("./search.png")}
          />
          <Text style={styles.formHeader}> مفقوداتكم</Text>
          <Text> أنشاء حساب</Text>
          <TextInput
            style={{
              borderColor: "#3c1053",
              borderBottomWidth: 1,
              width: "80%",
              marginVertical: 10
            }}
            onChangeText={Text => this.UserName(Text)}
            placeholder="اسم المستخدم"
            textContentType="name"
          />
          <TextInput
            style={{
              borderColor: "#3c1053",
              borderBottomWidth: 1,
              width: "80%",
              marginVertical: 10
            }}
            onChangeText={Text => this.phoneNumber(Text)}
            placeholder=" رقم الهاتف "
            textContentType="name"
          />
          <TextInput
            style={{
              borderColor: "#3c1053",
              borderBottomWidth: 1,
              width: "80%",
              marginVertical: 10
            }}
            onChangeText={Text => this.password(Text)}
            textContentType="password"
            placeholder="كلمة السر "
            secureTextEntry={true}
          />
          <TextInput
            style={{
              borderColor: "#3c1053",
              borderBottomWidth: 1,
              width: "80%",
              marginVertical: 10
            }}
            placeholder=" اعادة كتابة كلمة السر "
            onChangeText={Text => this.reTypepassword(Text)}
            textContentType="password"
            secureTextEntry={true}
          />

          <Button title="أنشاء حساب" onPress={this.signUpBttn} />
          {/* <Text
            style={{ marginVertical: 10 }}
            onPress={() => navigate.popToTop()}
          >
            تسجيل الدخول
          </Text> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3c1053"
  },
  form: {
    color: "#fff",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    alignItems: "center"
  },
  formHeader: {
    textAlign: "center",
    fontSize: 30
  }
});
