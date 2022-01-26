import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeStack from './navigation/stack/HomeStack';
import DetailStack from './navigation/stack/DetailStack';
import FirstPage from './component/pages/firstpage';
import SecondPage from './component/pages/secondpage';
import ThirdPage from './component/pages/thirdpage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>This is Navigation Class NAJA</Text> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeStack"
          screenOptions = {{
            headerStyle:{backgroundColor: "#24E3AD"},
            headerTintColor:"white",
            headerTitleStyle:{fontWeight:"bold"}
          }}>
          <Stack.Screen name='FirstPage' component={FirstPage}/>
          <Stack.Screen name='SecondPage' component={SecondPage}/>
          <Stack.Screen name='ThirdPage' component={ThirdPage}/>
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
