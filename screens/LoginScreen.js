import React, { Component } from "react";

import { View, TextInput, Button, Alert, Text } from "react-native";

import { Dialog } from 'react-native-simple-dialogs';
class LoginScreen extends React.Component {
    static navigationOptions = {
        //Setting the header of the screen
        title: 'Login Screen',
    };
    constructor(props) {

        super(props);
        this.state = {
            email: undefined,
            password: undefined,
            dialogVisible: false
        };
        _onLoginPress = () => {

            this.setState({ dialogVisible: true });
            var ObjToSend = {
                email: this.state.email,
                password: this.state.password
            }
            // Creating Request Headers
            var options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ObjToSend),
            }

            //Find if user Exsist in the DB
            fetch('http://192.168.0.105:8000/login', options).then((res) => {


                if (res.status == 200) {
                    this.setState({ dialogVisible: false })
                    return res.json();

                }
                else if (res.status == 404) {
                    this.setState({ dialogVisible: false })
                    Alert.alert("In-Correct Credentials")
                    //incorrect details or user doesn't exisit

                }
            }).then((json) => {
                this.setState({ dialogVisible: false })
                this.props.navigation.navigate("Profile", json)

                console.log(json); // The json object is here
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
        }
        _onRegisterPress = () => {
            this.props.navigation.navigate("Registration")
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TextInput
                    placeholder="Enter Your Mail.."
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="Password"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button
                    onPress={_onLoginPress}
                    title="Login"
                    style={{ marginBottom: 40 }}
                ></Button>

                <Dialog
                    visible={this.state.dialogVisible}
                    title="Logging You in..."
                    onTouchOutside={() => this.setState({ dialogVisible: false })} >

                </Dialog>


                <Button onPress={_onRegisterPress}
                    title="Register">
                </Button>
            </View>
        );
    }
}
export default LoginScreen;