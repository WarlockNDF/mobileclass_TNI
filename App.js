import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image, Button } from 'react-native';
import HomeStack from './navigation/stack/HomeStack';
import DetailStack from './navigation/stack/DetailStack';
import FirstPage from './component/pages/firstpage';
import SecondPage from './component/pages/secondpage';
import ThirdPage from './component/pages/thirdpage';
import {createDrawerNavigator} from "@react-navigation/drawer"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomSidebarMenu from './component/pages/customSidebarMenu';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './component/pages/HomeScreen';
import SettingScreen from './component/pages/SettingScreen';
import Profile from './component/pages/Profile';
import Menu from './component/api/Menu';
import RegisterStack from './navigation/stack/RegisterStack';
import { FontAwesome } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function firstScreenStack({navigation}){
  return(
       <Stack.Navigator initialRouteName="HomeStack"
          screenOptions = {{
            headerStyle:{backgroundColor: "#020000"},
            headerTintColor:"white",
            headerTitleStyle:{fontWeight:"bold"},
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />
          }}>
          <Stack.Screen options={{
            headerRight: () => (
              <FontAwesome 
              name="registered" 
              size={24} 
              color="white"
              onPress={() => navigation.navigate("RegisterStack")}
              />
            )
          }} name='HomeStack' component={HomeStack}/>
          <Stack.Screen name='RegisterStack' component={RegisterStack}/>
        </Stack.Navigator>
  )
}

function seccondScreenStack({navigation}){
  return (
    <Stack.Navigator initialRouteName="HomeStack"
    screenOptions = {{
      headerStyle:{backgroundColor: "#020000"},
      headerTintColor:"white",
      headerTitleStyle:{fontWeight:"bold"},
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />
    }}>
    <Stack.Screen name='DetailedStack' component={DetailStack}/>
    <Stack.Screen name='RegisterStack' component={RegisterStack}/>
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
        drawerContent= {(props) => (<Menu {...props}/>)}
        >
          <Drawer.Screen options={{title:"Home"}} name='FirstDrawerPage' component={firstScreenStack}/> 
          <Drawer.Screen options={{title:"Product Detailed"}} name='SecondDrawerPage' component={seccondScreenStack}/>
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}


const Home = () =>{
  return (
    <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
      <Text>Hello</Text>
    </View>
  )
}


const Setting = () =>{
  return (
    <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
      <Text style={{}}>Setting</Text>
    </View>
  )
}

function ScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage"
    screenOptions = {{
      headerStyle:{backgroundColor: "#020000"},
      headerTintColor:"white",
      headerTitleStyle:{fontWeight:"bold"},
    }}>
    <Stack.Screen name='SettingScreen' component={SettingScreen}/>
    <Stack.Screen name='ProfileScreen' component={Profile}/>
  </Stack.Navigator>
  )
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             console.log(color)
//             if (route.name === 'HomeScreen') {
//               iconName = focused
//                 ? 'app-settings-alt'
//                 : 'app-settings-alt';
//             } else if (route.name === 'SettingScreen') {
//               iconName = focused ? 'format-list-bulleted' : 'list-alt';
//             }

//             // You can return any component that you like here!
//             console.log(iconName)
//             return <MaterialIcons name={iconName} size={12} color={color} />;
//           },
//         })}
//         tabBarOptions ={{
//           tabBarActiveTintColor: '#020000',
//           InactiveTintColor: 'gray',
//         }}
//       >
//           <Tab.Screen name='HomeScreen' component={HomeScreen}/>
//           <Tab.Screen name='SettingScreen' component={ScreenStack}/>
//         </Tab.Navigator>
//       </NavigationContainer>
//     </View>
//   )
// }

// export default function App() {

//   return(
//     <View>
//       <NavigationContainer>
//         <Drawer.Navigator
//         initialRouteName='HomeStack'
//         drawerContent={(props) => <CustomSidebarMenu {...props}/>}
//         >
//           <Drawer.Screen name='HomeStack' component={HomeStack}/>
//           <Drawer.Screen name='ProductStack' component={DetailStack}/>
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
