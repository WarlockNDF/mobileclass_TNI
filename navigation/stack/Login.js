import { StyleSheet, Text, View } from 'react-native'
import { Container, Content, Input, Item, Label, Button, Form } from 'native-base'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import React from 'react'

const ValidateSchema = Yup.object().shape({
    email: Yup.string()
        .email("รูปแบบ E-mail ไม่ถูกต้อง")
        .required("กรุณากรอกอีเมลใหม่"),
    password: Yup.string()
        .min(3, "รหัสผ่านต้องมี 3 ตัวอักษรขึ้นไป")
        .required("กรุณาป้อนรหัสผ่าน"),
});

const Login = ({ navigation }) => {
    return (
        <Container>
            <Content padder>
                <Formik
                    // ค่าเริ่มต้นของข้อมูล โดยกำหนดให้ตรงกับ backend
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={ValidateSchema}
                    //เมื่อคลิก register (submit)
                    onSubmit={async (values, { setSubmitting }) => {
                        // same shape as initial values
                        console.log(values);
                        const url = "https://api.codingthailand.com/api/login"
                        try {
                            const { status, data } = await axios.post(url, {
                                email: values.email,
                                password: values.password
                            })
                            alert(data.access_token)
                            navigation.navigate('HomeStack')
                        } catch (err) {
                            alert(err.message)
                        } finally {
                            setSubmitting(false)
                        }
                    }}
                >
                    {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                        <Form>
                            <Item
                                fixedLabel
                                error={errors.email && touched.email ? true : false}
                            >
                                <Label>Email</Label>
                                <Input
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                />
                                {errors.email && touched.email}
                            </Item>
                            {errors.email && touched.email && (
                                <Item>
                                    <Label style={{ color: "red" }}>{errors.email}</Label>
                                </Item>
                            )}

                            <Item
                                fixedLabel
                                last
                                error={errors.password && touched.password ? true : false}
                            >
                                <Label>Password</Label>
                                <Input
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                />
                                {errors.password && touched.password}
                            </Item>
                            {errors.password && touched.password && (
                                <Item>
                                    <Label style={{ color: "red" }}>{errors.password}</Label>
                                </Item>
                            )}
                            <Button
                                block
                                large
                                style={{ marginTop: 30, backgroundColor: "#654321" }}
                                onPress={handleSubmit}
                            >
                                <Text
                                    style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                                >
                                    Login
                                </Text>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Content>
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({})