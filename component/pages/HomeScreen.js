import { Button, SafeAreaView, StyleSheet, Text, TextComponent, View } from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,alignItems:"center"}}>
        <View style={{flex:1,justifyContent:"center"}}>
            <Text style={{marginLeft:50,marginBottom:20}}>Home Screen</Text>
            <Button title='Go to Setting Screen' onPress={() => navigation.navigate("SettingScreen")}/>
            <Button title='Go to News Screen'/>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
