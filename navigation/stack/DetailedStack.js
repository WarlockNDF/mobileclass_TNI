import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import { getCourse } from '../../component/api/service/service';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const DetailedStack = ({ navigation, route }) => {

  const { id, title } = route.params;
  const [detailed, setDetailed] = useState([])
  const [loading, setLoading] = useState(true);
  let cancelToken; 

  const getDetailed = async () => {
    setLoading(true)
    await getCourse(id)
      .then(res => {
        if (res.status != 200) {
          alert("Pull Failed")
          return
        }
        if (!res.data) {
          alert("No data")
          return
        }
        console.log(res.data.data);
        setDetailed(res.data.data);
        setLoading(false)
        //console.log(detailed);
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  // useEffect(() => {
  //   getDetailed();
  // }, [id])

  useFocusEffect(
    useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getDetailed();
      return () => {
        cancelToken.cancel();
        alert("Exit Page")
      }
    },[id])
  )

  const _onRefresh = () => {
    getDetailed();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: !title ? "รายละเอียดสินค้า" : `รายละเอียดสินค้าของ ${title}`
    })
  }, [navigation])

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
        data={detailed}
        keyExtractor={(data, idx) => data.ch_id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <ListItem thumbnail
          >
            <Left>
              {/* <Thumbnail square source={{ uri: item.picture }} /> */}
              <Text>{index+1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>{item.ch_title.split(' ').slice(2,10)}</Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.ch_view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  )
}

export default DetailedStack


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
});

