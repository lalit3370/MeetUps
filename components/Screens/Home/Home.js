import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useContext } from 'react';
import styles from './Styles';
import { AuthContext } from '../../Context/Auth';

export default function App() {
    const { authToken } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>HomeScreen {authToken}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
