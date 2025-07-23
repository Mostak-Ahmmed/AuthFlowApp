// src/screens/LoginScreen.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { saveToken } from '../utils/storage';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const fakeToken = 'abc123'; // Simulate login
    await saveToken(fakeToken);
    dispatch(login(fakeToken));
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 12 },
});
