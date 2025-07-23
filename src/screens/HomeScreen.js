// src/screens/HomeScreen.jsx
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { removeToken } from '../utils/storage';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await removeToken();
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});
