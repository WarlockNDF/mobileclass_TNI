import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import { userStoreContext } from '../pages/Context/UserContext';

const Menu = ({ navigation }) => {


    useEffect(async () => {
        //userStore.updateProfile(JSON.parse(await AsyncStorage.getItem("@profile")))
        userStore.updateProfile(JSON.parse(await AsyncStorage.getItem("@profile")))
    }, []);

    const userStore = React.useContext(userStoreContext)

    return (
        <ScrollView>
            <View>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        padding: 20,
                        marginTop: 30
                    }}
                >
                    เมนูหลัก
                </Text>
                {
                    userStore.profile && (
                        <>
                            <Text style={{
                                color: 'black',
                                fontSize: 12,
                                fontWeight: 'bold',
                                marginLeft: 15
                            }}>
                                Welcome User : {userStore.profile.name}
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: 12,
                                fontWeight: 'bold',
                                marginLeft: 15,
                                marginBottom: 15
                            }}>
                            Email: {userStore.profile.email}
                            </Text>
                        </>
                    )
                }
                {/* Native Base Code */}
                <Content>
                    <ListItem
                        icon
                        onPress={() => navigation.navigate("FirstDrawerPage")}
                    >
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="home" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>หน้าหลัก</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" onPress={() => navigation.navigate("")} />
                        </Right>
                    </ListItem>
                    <ListItem
                        icon
                        onPress={() => navigation.navigate("SecondDrawerPage")}
                    >
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="cart" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>สินค้า</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        icon
                        onPress={() => navigation.navigate("LoginStack")}
                    >
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="log-in" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>เข้าสู่ระบบ</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                </Content>
            </View>
        </ScrollView>
    )
}

export default Menu

const styles = StyleSheet.create({})