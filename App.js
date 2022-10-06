import { StyleSheet, Text, View,useColorScheme , ActivityIndicator } from 'react-native';
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import MyButton from './screens/Lang';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};


export default function App() {
  const scheme = useColorScheme();

  return (
    <View style={styles.container}>
          <NavigationContainer theme={MyTheme}>{/* content */}</NavigationContainer>

      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Text>hhhhhhhhhhhhhh</Text>
    </NavigationContainer>
    <MyButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
