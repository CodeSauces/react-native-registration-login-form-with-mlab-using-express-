import React, { Component } from 'react';
import { TextInput, View, Picker, Button, Text, Alert, ProgressBarAndroid } from 'react-native';
import LoginScreen from "./LoginScreen";

import { createStackNavigator, createAppContainer } from 'react-navigation';
class RegistrationScreen extends Component {

    static navigationOptions = {
        title: 'Registration',
    };

    constructor(props) {

        super(props);



        this.state = {
            name: undefined,
            password: undefined,
            email: undefined,
            gender: 'male',
        };
        _onPressSubmit = () => {
            var ObjToSend = {
                name: this.state.name,
                password: this.state.password,
                email: this.state.email,
                gender: this.state.gender,
            }

            var options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ObjToSend),
            };

            fetch('http://192.168.0.105:8000/formData', options).then((res) => {
                if (res.status == 200) {
                    Alert.alert("User Successfully Registered");
                    this.props.navigation.navigate("Login")

                } else {
                    Alert.alert("This Email is associatited with another account");

                }

            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
        }
    }
    render() {
        return (

            <View>
                <TextInput
                    placeholder="Name"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    placeholder="Password"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TextInput
                    placeholder="Email"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />

                <Picker
                    selectedValue={this.state.gender}
                    style={{ height: 50, width: 120 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ gender: itemValue })
                    }>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
                <Button
                    onPress={_onPressSubmit}
                    title="Submit"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}
export default RegistrationScreen;
