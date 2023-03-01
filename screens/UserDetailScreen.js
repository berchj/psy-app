import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../database/firebase.js";
import {
  collection,
  query,
  getDocs,
  getDoc,
  where,
  doc,
} from "firebase/firestore";
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;
export default function UserDetailScreen(props) {
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });
  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };
  //traer data de firebase
  const getUserById = async (id) => {
    const docRef = doc(firebase.db, "users", id);
    const docSnap = await getDoc(docRef);
    const userFetched = docSnap.data();
    setUser({ ...userFetched, id: docSnap.id });
  };
  useEffect(() => {
    getUserById(props.route.params.userId);    
  }, []);

  return (
    <ScrollView
      style={styles.scrollview}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Text style={styles.subtitle}>Edit or delete profile:</Text>
        <TextInput
          value={user.username}
          onChangeText={(value) => handleTextChange(value, "username")}
          style={styles.textInput}
          placeholder="username"
        />
        <TextInput
          value={user.email}
          onChangeText={(value) => handleTextChange(value, "email")}
          style={styles.textInput}
          placeholder="example@mail.com"
        />
        <TextInput
          value={user.password}
          onChangeText={(value) => handleTextChange(value, "password")}
          style={styles.textInput}
          placeholder="password"
        />
        <Pressable onPress={() => alert("works!")} style={styles.button}>
          <Text style={styles.text}>update</Text>
        </Pressable>
        <Pressable onPress={() => alert("works!")} style={styles.buttonDelete}>
          <Text style={styles.text}>delete</Text>
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
    width: "100%",
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
  buttonDelete: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#ff244d",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  listItem: {
    width: "100%",
  },
});
