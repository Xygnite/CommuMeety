import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
    Card,
    CardItem,
    Form,
    Item,
    Label,
    Input,
    Button,
    Text
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class Login extends Component {
    componentDidMount() {}
    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={["#ff919d", "#ffffff"]}
                style={styles.linearGradient}
            >
                <View style={styles.centerEverything}>
                    <Card style={styles.loginCard}>
                        <CardItem style={styles.centerEverything}>
                            <Image
                                source={require("../../assets/dark-logo.png")}
                                style={styles.logo}
                            />
                        </CardItem>
                        <CardItem style={styles.contentFlex}>
                            <ScrollView>
                                <View style={styles.formFlex}>
                                    <Item floatingLabel>
                                        <Label>Username</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Password</Label>
                                        <Input secureTextEntry={true} />
                                    </Item>
                                </View>
                                <View style={styles.centerHorizontal}>
                                    <Button
                                        full
                                        backgroundColor={"#ff919d"}
                                        // style={styles.buttonFlex}
                                        textStyle={styles.mainFont}
                                    >
                                        <Text>Login</Text>
                                    </Button>
                                    <Text style={styles.description}>
                                        Don't have an account?{"   "}
                                        <Text
                                            style={styles.descriptionLink}
                                            onPress={() =>
                                                this.props.navigation.navigate(
                                                    "Register"
                                                )
                                            }
                                        >
                                            Sign Up
                                        </Text>
                                    </Text>
                                </View>
                            </ScrollView>
                        </CardItem>
                    </Card>
                </View>
            </LinearGradient>
        );
    }
}

export default Login;

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    formFull: {
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
    },
    loginCard: {
        width: Dimensions.get("window").width - 50,
        height: Dimensions.get("window").height - 110
    },
    sign: {
        fontWeight: "bold",
        fontSize: 38
    },
    contentFlex: {
        flex: 3
    },
    formFlex: {
        flex: 5,
        justifyContent: "flex-start"
    },
    buttonFlex: {
        flex: 1,
        margin: 5
    },
    mainFont: {
        color: "#ffffff"
    },
    description: {
        fontSize: 14,
        color: "#555555"
    },
    descriptionLink: {
        textDecorationLine: "underline",
        fontSize: 16,
        color: "#555555"
    },
    centerHorizontal: {
        marginTop: 50,
        alignItems: "center"
    }
});
