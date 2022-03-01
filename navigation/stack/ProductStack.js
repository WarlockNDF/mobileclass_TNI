import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import { getProduct } from '../../component/api/service/service';
import { useFocusEffect } from '@react-navigation/native';

const ProductStack = ({ navigation }) => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    await getProduct().then(res => {
      if (res.status != 200) alert("Pull Failed")
      if (!res.data.data) alert("No Data Found")
      setProduct(res.data.data)
      setLoading(false)
      console.log(product)
    })
  }

  useFocusEffect(
    useCallback(() => {
      getData();
    },[]))

  const _onRefresh = () => {
    getData();
  }

  // useEffect(async () => {
  //   getData();
  //   return
  // }, []);

  if(loading){
    <View style={styles.container}>
      <ActivityIndicator color='blue' size="large"/>
    </View>
  }

  return (
    <View style={styles.container}>
      {/* <Button
        title='Detailed'
        onPress={() => navigation.navigate('HomeStack')}
      /> */}
      {/* <Button 
      transparent
      onPress={() => navigation.navigate('HomeStack')}
      >
        <MaterialCommunityIcons name="account-details" size={24} color="black" />
        <Text>Back To Home</Text>
      </Button> */}
      <FlatList
        data={product}
        keyExtractor={(data, idx) => data.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({ item }) => (
          <ListItem thumbnail
          onPress={() => {navigation.navigate("DetailedStack", {
            id: item.id,
            title: item.title
          })}}
          >
            <Left>
              <Thumbnail square source={{ uri: item.picture }} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductStack;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
});
