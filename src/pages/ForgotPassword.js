import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/styles";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    return (
        <View style={[styles.container, { backgroundColor: styles.lightTheme.background }]}>
            <View style={[styles.section, styles.logoBox]}>
                <Avatar.Image
                    style={{ backgroundColor: "transparent" }}
                    size={175}
                    source={require("../assets/logo.png")}
                />
            </View>

            <View style={[styles.section, { marginTop: -5 }]}>
                <TextInput
                    textContentType="emailAddress"
                    label="Email"
                    mode="outlined"
                    placeholder="Enter your email"
                    style={[styles.input, { backgroundColor: styles.lightTheme.card }]}
                    outlineColor={styles.lightTheme.inputOutline}
                    activeOutlineColor="#0056B3"
                    labelStyle={{ color: styles.lightTheme.text }}
                    left={<TextInput.Icon icon="email" size={23} color={styles.lightTheme.text} />}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={[styles.section, { marginTop: 18 }]}>
                <Button
                    onPress={() => console.log("recover password")}
                    mode="contained"
                    style={[styles.button, { backgroundColor: styles.lightTheme.buttonBackground }]}
                    labelStyle={styles.buttonText}
                >
                    Recover Password
                </Button>

                <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
                    <Text style={[styles.centeredText, { color: styles.lightTheme.text }]}>Remembered your password?</Text>
                </View>

                <Button
                    onPress={() => console.log("login")}
                    mode="contained"
                    style={[styles.button, { backgroundColor: '#A0A0A0' }]}
                    labelStyle={styles.buttonText}
                >
                    Login Here
                </Button>
            </View>
        </View>
    );
};

export default ForgotPassword;
