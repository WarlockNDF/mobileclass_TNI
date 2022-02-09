import { StyleSheet, View, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import { getProduct } from '../../component/api/service/service';

const DetailStack = ({ navigation }) => {

  const [product, setProduct] = useState([]);

  useEffect(async () => {
    await getProduct().then(res => {
      if (res.status != 200) alert("Pull Failed")
      if (!res.data.data) alert("No Data Found")
      setProduct(res.data.data)
      console.log(product)
    })
    return
  }, []);



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
        renderItem={({ item }) => (
          <ListItem thumbnail>
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

export default DetailStack;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
});
