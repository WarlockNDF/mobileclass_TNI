import { StyleSheet, Text, View,SafeAreaView, Button } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <SafeAreaView style={{flex:1,alignItems:"center"}}>
        <View style={{flex:1,justifyContent:"center"}}>
            <Text style={{marginLeft:50,marginBottom:25}}>Profile</Text>
        </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
