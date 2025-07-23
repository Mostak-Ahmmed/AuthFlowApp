// src/screens/SplashScreen.jsx
import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { login, setLoading } from '../redux/authSlice';
import { getToken } from '../utils/storage';

export default function SplashScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await getToken();
      if (token) dispatch(login(token));
      else dispatch(setLoading(false));
    };

    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
});
