import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
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

class Community extends Component {
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
                                source={require("../../assets/account.png")}
                                style={styles.image}
                            />
                        </CardItem>
                        <CardItem style={styles.contentFlex}>
                            <ScrollView>
                                <View style={styles.formFlex}>
                                    <Item
                                        floatingLabel
                                        style={styles.itemMargin}
                                    >
                                        <Label>Username</Label>
                                        <Input />
                                    </Item>
                                    <Item
                                        floatingLabel
                                        style={styles.itemMargin}
                                    >
                                        <Label>
                                            Password - Click to Change it
                                        </Label>
                                        <Input
                                            secureTextEntry={true}
                                            value={"Password"}
                                            onFocus={() => {
                                                this.props.navigation.navigate(
                                                    "ChangePassword"
                                                );
                                            }}
                                        />
                                    </Item>
                                    <Item
                                        floatingLabel
                                        style={styles.itemMargin}
                                    >
                                        <Label>Gender</Label>
                                        <Input />
                                    </Item>
                                    <Item
                                        floatingLabel
                                        style={styles.itemMargin}
                                    >
                                        <Label>Date of Birth</Label>
                                        <Input />
                                    </Item>
                                    <Item
                                        floatingLabel
                                        style={styles.itemMargin}
                                    >
                                        <Label>Interested In</Label>
                                        <Input />
                                    </Item>
                                </View>
                                <View style={styles.centerHorizontal}>
                                    <Button
                                        full
                                        backgroundColor={"#ff919d"}
                                        style={styles.buttonFlex}
                                        textStyle={styles.mainFont}
                                    >
                                        <Text>Save Changes</Text>
                                    </Button>
                                    <Button
                                        full
                                        backgroundColor={"#aaaaaa"}
                                        style={styles.buttonFlex}
                                        textStyle={styles.mainFont}
                                    >
                                        <Text>Cancel</Text>
                                    </Button>
                                </View>
                            </ScrollView>
                        </CardItem>
                    </Card>
                </View>
            </LinearGradient>
        );
    }
}

export default Community;

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
        flex: 5
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
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    itemMargin: {
        marginTop: 5
    }
});
