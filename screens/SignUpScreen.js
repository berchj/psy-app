import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import firebase from "../database/firebase.js";
import { collection, addDoc } from "firebase/firestore";
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;
export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUserName] = React.useState("");
  const handlerCreateAccount = async () => {
    try {
      if (email == "" || password == "" || username == "") {
        return alert("Provide a name / password / username");
      }
      const docRef = await addDoc(collection(firebase.db, "users"), {
        email,
        password,
        username
      });
      console.log("Document written with ID: ", docRef.id);
      alert("user saved");
      return navigation.navigate("UsersList")
    } catch (e) {
      return console.error("Error adding document: ", e);
    }
    
  };
  return (
    <ScrollView
      style={styles.scrollview}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/icons8-mental-64.png")}
        />
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create an account</Text>
        <TextInput
          onChangeText={(e) => {
            setUserName(e);
            console.log(e);
          }}
          style={styles.textInput}
          placeholder="username"
        />
        <TextInput
          onChangeText={(e) => {
            setEmail(e);
            console.log(e);
          }}
          style={styles.textInput}
          placeholder="example@mail.com"
        />
        <TextInput
          onChangeText={(e) => {
            setPassword(e);
            console.log(e);
          }}
          style={styles.textInput}
          placeholder="password"
        />
        <Pressable onPress={handlerCreateAccount} style={styles.button}>
          <Text style={styles.text}>
            register
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    height: ScreenHeight,
    width: ScreenWidth,
  },
  container: {
    flex: 1,
    height: ScreenHeight,
    width: ScreenWidth,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#34434D",
  },
  subtitle: {
    fontSize: 20,
    color: "grey",
  },
  forgotPasswordText: {
    paddingTop: 10,
    color: "grey",
  },
  textInput: {
    borderWidth: 1,
    paddingStart: 20,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#34f818",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
