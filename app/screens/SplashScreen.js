import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Home");
        }, 1000);
    }
    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={["#ff919d", "#ffffff"]}
                style={styles.linearGradient}
            >
                <View style={styles.centerEverything}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={styles.logo}
                    />
                </View>
            </LinearGradient>
        );
    }
}

export default SplashScreen;

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    centerEverything: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 200
    }
});
