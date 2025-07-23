import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { email } = useSelector(state => state.auth);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
});

export default ProfileScreen;
