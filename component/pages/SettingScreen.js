import { StyleSheet, Text, View,SafeAreaView, Button } from 'react-native';
import React from 'react';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,alignItems:"center"}}>
        <View style={{flex:1,justifyContent:"center"}}>
            <Text style={{marginLeft:50,marginBottom:25}}>Setting Screen</Text>
            <Button title='Go to Home Screen' onPress={() => navigation.navigate("HomeScreen")}/>
            <Button title='Go to News Screen'/>
            <Button title='Go to Profile Screen' onPress={() => navigation.navigate("ProfileScreen")}/>
        </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
