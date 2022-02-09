import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

const Menu = ({ navigation }) => {
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
                </Content>
            </View>
        </ScrollView>
    )
}

export default Menu

const styles = StyleSheet.create({})