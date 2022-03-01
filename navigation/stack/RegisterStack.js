import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Content, Input, Item, Label, Button, Form } from 'native-base'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const RegisterStack = () => {
    return (
        <Container>
            <Content padder>
                <Formik
                    initialValues={{
                        name: '',
                        password: '',
                        email: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched, values, handleChange, handleBlur }) => (
                        <Form>
                            <Item fixedLabel error={errors.email && touched.email ? true : false}>
                                <Label>Email</Label>
                                <Input
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                />
                            </Item>
                            <Item fixedLabel last error={errors.name && touched.name ? true : false}>
                                <Label>Name</Label>
                                <Input
                                    value={values.name}
                                    onChange={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                />
                            </Item>
                            <Item fixedLabel last error={errors.password && touched.password ? true : false}>
                                <Label>Password</Label>
                                <Input
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                />
                            </Item>
                        </Form>
                    )}
                </Formik>
                <Button block large style={{ marginTop: 30, backgroundColor: "#007bff" }}>
                    <Text style={{ color: "white" }}>Sign Up</Text>
                </Button>
            </Content>
        </Container>
    )
}

export default RegisterStack

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' }
});