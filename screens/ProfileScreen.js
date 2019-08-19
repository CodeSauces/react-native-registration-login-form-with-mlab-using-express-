import React, { Component } from "react";
import { View, Text } from "react-native";

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile'
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>
                    Welcome :     {this.props.navigation.state.params.name}
                </Text>
            </View>
        )
    }
}
export default ProfileScreen;