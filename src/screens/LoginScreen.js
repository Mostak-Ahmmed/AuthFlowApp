import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { saveToken } from '../utils/storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const fakeToken = 'abc123';
    await saveToken(fakeToken);
    dispatch(login(fakeToken));
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <Button title="Login" onPress={handleLogin} color="#0066cc" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});
