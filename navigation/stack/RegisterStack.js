import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Content, Input, Item, Label, Button, Form } from 'native-base'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const ValidateSchema = Yup.object().shape({
    name: Yup.string().required("กรุณากรอกชื่อ"),
    email: Yup.string()
      .email("รูปแบบ E-mail ไม่ถูกต้อง")
      .required("กรุณากรอกอีเมลใหม่"),
    password: Yup.string()
      .min(3, "รหัสผ่านต้องมี 3 ตัวอักษรขึ้นไป")
      .required("กรุณาป้อนรหัสผ่าน"),
  });
  
const RegisterStack = ({navigation}) => {
    return (
        <Container>
        <Content padder>
          <Formik
            // ค่าเริ่มต้นของข้อมูล โดยกำหนดให้ตรงกับ backend
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={ValidateSchema}
            //เมื่อคลิก register (submit)
            onSubmit={ async (values, {setSubmitting}) => {
              // same shape as initial values
              console.log(values);
              const url = "https://api.codingthailand.com/api/register"
              try {
                const {status, data} = await axios.post(url,{
                  name: values.name,
                  email:values.email,
                  password: values.password
                })
                alert(data.message)
                navigation.navigate('HomeStack')
              }catch (err) {
                alert(err.message)
              }finally {
                setSubmitting(false)
              }
            }}
          >
            {/* errors --> ใช้เช็ค error (State) เช่นิผู้ใช้ไม่กรอกข้อมูล จะให้ขึ้นอะไร */}
            {/* touched เมื่อ user กด name แล้วไปทำอย่างอื่นนอกช่อง โดยที่ยังไม่ใส่ข้อมูล */}
            {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
              <Form>
                <Item
                  fixedLabel
                  error={errors.name && touched.name ? true : false}
                >
                  <Label>Name</Label>
                  <Input
                    value={values.name}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                  />
                  {errors.name && touched.name}
                </Item>
                {errors.name && touched.name && (
                  <Item>
                    <Label style={{ color: "red" }}>{errors.name}</Label>
                  </Item>
                )}
  
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
                  onPress={handleSubmit }
                >
                  <Text
                    style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                  >
                    Register
                  </Text>
                </Button>
              </Form>
            )}
          </Formik>
        </Content>
      </Container>
    )
}

export default RegisterStack

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' }
});