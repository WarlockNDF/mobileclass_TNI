import { Button, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

import { userStoreContext } from '../../component/pages/Context/UserContext';


const HomeStack = ({ navigation }) => {

  useEffect(async () => {
    //userStore.updateProfile(JSON.parse(await AsyncStorage.getItem("@profile")))
    userStore.updateProfile(JSON.parse(await AsyncStorage.getItem("@profile")))
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="register" iconName="ios-document-attach" onPress={() => alert('Register ทำไมบ้าบอที่สุด')} />
      </HeaderButtons>
      ),
      headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="search" iconName="ios-search" onPress={() => alert('Search ทำไมบ้าบอที่สุด')} />
      </HeaderButtons>
      )
    });
  }, [navigation]);

  const userStore = React.useContext(userStoreContext)

  return (
    <View style={styles.container}>
      {
        userStore.profile && (
          <>
            <Text>
              ยินดีต้อนรับ
            </Text>
            <Text>
              {userStore.profile.name}
            </Text>
            <Text>
              {userStore.profile.email}
            </Text>
          </>
        )
      }
      <Ionicons name="ios-cart-outline" size={24} color="black" />
      <Button
        title='ไปยังหน้าสินค้า'
        onPress={() => navigation.navigate('ProductStack')}
      />
    </View>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
