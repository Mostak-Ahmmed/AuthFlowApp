import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { saveToken } from '../utils/storage';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async () => {
    // Simulate API registration response
    const token = 'mocked_token_registered';
    await saveToken(token);
    dispatch(login({ email, token }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
});

export default RegisterScreen;
