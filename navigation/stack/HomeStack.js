import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeStack = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
      title='HOME'
      onPress={() => navigation.navigate('DetailStack')}
      />
    </View>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
    container : { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
