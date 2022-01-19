import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeStack from './navigation/stack/HomeStack';
import DetailStack from './navigation/stack/DetailStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>This is Navigation Class NAJA</Text> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='HomeStack' component={HomeStack}/>
          <Stack.Screen name='DetailStack' component={DetailStack}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
