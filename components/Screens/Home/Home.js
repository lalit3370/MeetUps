import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import styles from './Styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <StatusBar style='auto' />
    </View>
  );
}
