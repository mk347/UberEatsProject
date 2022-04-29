import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from 'aws-amplify';
import { User } from "../../models";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const {dbUser} = useAuthContext();

  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");;
  const [lat, setLat] = useState(dbUser?.lat.toString() || "");
  const [lng, setLng] = useState(dbUser?.lng.toString() || "");

  const { sub, setDbUser } = useAuthContext();

  const navigation = useNavigation();

  const onSave = async () => {
    if (dbUser) {
      console.log("AWS Request Update App User");
      await updateUser();
    } else {
      console.log("AWS Request Create App User");
      await createUser();
    }
    navigation.goBack();
  };

  const updateUser = async () => {
    // Save used for creating AND updating
    console.log("AWS Request Update app user Inside Async");
    const user = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.name = name;
        updated.address = address;
        updated.lat = parseFloat(lat);
        updated.lng = parseFloat(lng);
      })
    );
    setDbUser(user);
  };

  const createUser = async () => {
    try {
      console.log("AWS Request Update create user Inside Async");
      const user = await DataStore.save(
        new User({ 
          name, 
          address, 
          lat: parseFloat(lat), 
          lng: parseFloat(lng), 
          sub,
        })
      );
      setDbUser(user);
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <View style={{ margin: 10 }}><Button onPress={onSave} title="Save" /></View>
      <Button onPress={() => Auth.signOut()} title="Sign Out" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
