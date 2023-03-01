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
import { collection, query, getDocs } from "firebase/firestore";
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;
export default function UsersListScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const users = [];
    const q = query(collection(firebase.db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const { email, username } = doc.data();
      users.push({
        id: doc.id,
        email,
        username,
      });
    });
    setUsers(users);
  }, []);
  return (
    <ScrollView
      style={styles.scrollview}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        {users.map((user) => {
          return (
            <ListItem
              onPress={() => {                
                navigation.navigate("UserDetail", { userId: user.id });
              }}
              bottomDivider
              key={user.id}
              style={styles.listItem}
            >
              <ListItem.Chevron />
              <Avatar
                rounded
                source={{
                  uri: "https://avatars.githubusercontent.com/u/6126173?v=4",
                }}
              />
              <ListItem.Content>
                <ListItem.Title>{user.username}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
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
