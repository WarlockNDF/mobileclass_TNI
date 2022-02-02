import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import HomeStack from './navigation/stack/HomeStack';
import DetailStack from './navigation/stack/DetailStack';
import FirstPage from './component/pages/firstpage';
import SecondPage from './component/pages/secondpage';
import ThirdPage from './component/pages/thirdpage';
import {createDrawerNavigator} from "@react-navigation/drawer"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomSidebarMenu from './component/pages/customSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({navigation}){
  return(
       <Stack.Navigator initialRouteName="FirstPage"
          screenOptions = {{
            headerStyle:{backgroundColor: "#020000"},
            headerTintColor:"white",
            headerTitleStyle:{fontWeight:"bold"},
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />
          }}>
          <Stack.Screen name='FirstPage' component={FirstPage}/>
          <Stack.Screen name='SecondPage' component={SecondPage}/>
          <Stack.Screen name='ThirdPage' component={ThirdPage}/>
        </Stack.Navigator>
  )
}

function seccondScreenStack({navigation}){
  return (
    <Stack.Navigator initialRouteName="FirstPage"
    screenOptions = {{
      headerStyle:{backgroundColor: "#020000"},
      headerTintColor:"white",
      headerTitleStyle:{fontWeight:"bold"},
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />
    }}>
    <Stack.Screen name='SecondPage' component={SecondPage}/>
    <Stack.Screen name='ThirdPage' component={ThirdPage}/>
  </Stack.Navigator>
  )
}

const NavigationDrawerStructure = (props) => {

  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }

  return(
    <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
      <MaterialCommunityIcons style={{marginLeft: 20}} name="account-details" size={26} color="white" />
        {/* <Image
          source={"./assets/drawerWhite.png"}
          style={{width:25, height:25, marginLeft: 5}}
        /> */}
      </TouchableOpacity>
    </View>
  )

}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>This is Navigation Class NAJA</Text> */}
      <NavigationContainer>
        <Drawer.Navigator
        drawerContent= {(props) => (<CustomSidebarMenu {...props}/>)}
        >
          <Drawer.Screen name='FirstDrawerPage' component={firstScreenStack}/> 
          <Drawer.Screen name='SecondDrawerPage' component={seccondScreenStack}/>
        </Drawer.Navigator>
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
