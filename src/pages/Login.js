import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/styles";

const Login = ({ isDarkMode, toggleTheme }) => {
    const [togglePassword, setTogglePassword] = useState(false);
    const currentTheme = isDarkMode ? styles.darkTheme : styles.lightTheme;

    return (
        <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
            <TouchableOpacity 
                onPress={toggleTheme}
            >
                <Icon 
                    name={isDarkMode ? "sun-o" : "moon-o"} 
                    size={30} 
                    color={currentTheme.text} 
                />
            </TouchableOpacity>

            <View style={[styles.section, styles.logoBox]}>
                <Avatar.Image
                    style={{ backgroundColor: "transparent" }}
                    size={250}
                    source={require("../assets/logo.png")}
                />
            </View>
            
            <View style={[styles.section, { marginTop: -10 }]}>
                <TextInput
                    textContentType="emailAddress"
                    label="Email"
                    mode="outlined"
                    placeholder="Enter your email"
                    placeholderTextColor={currentTheme.placeholderText}
                    style={[styles.input, { backgroundColor: currentTheme.card }]}
                    outlineColor={currentTheme.inputOutline}
                    activeOutlineColor="#0056B3"
                    labelStyle={{ color: currentTheme.text }}
                    left={<TextInput.Icon icon="email" size={23} color={currentTheme.text} />}
                    secureTextEntry={false}
                    theme={{ colors: { text: currentTheme.inputText, placeholder: currentTheme.placeholderText } }}
                />

                <TextInput
                    label="Password"
                    mode="outlined"
                    placeholder="Enter your password"
                    placeholderTextColor={currentTheme.placeholderText}
                    style={[styles.input, { backgroundColor: currentTheme.card }]}
                    outlineColor={currentTheme.inputOutline} 
                    activeOutlineColor="#0056B3"
                    labelStyle={{ color: currentTheme.text }}
                    left={<TextInput.Icon icon="key" size={23} color={currentTheme.text} />}
                    right={
                        <TextInput.Icon
                            onPress={() => setTogglePassword(!togglePassword)}
                            icon={togglePassword ? "eye" : "eye-off"}
                            size={23}
                            color={currentTheme.text}
                        />
                    }   
                    secureTextEntry={!togglePassword}
                    theme={{ colors: { text: currentTheme.inputText, placeholder: currentTheme.placeholderText } }}
                />
            </View>

            <View style={[styles.section, { marginTop: 18 }]}>
                <Button
                    onPress={() => console.log("login")}
                    mode="contained"
                    style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]} 
                    labelStyle={styles.buttonText}
                >
                    Login
                </Button>
                
                <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
                    <Text style={[styles.centeredText, { color: currentTheme.text }]}>Don't have an account yet?</Text>
                </View>
                
                <Button
                    onPress={() => console.log("register")}
                    mode="contained"
                    style={[styles.button, { backgroundColor: '#A0A0A0' }]}
                    labelStyle={styles.buttonText}
                >
                    Register Here
                </Button>
                
                <Button
                    onPress={() => console.log("forgot")}
                    mode="outlined"
                    style={styles.forgotButton} 
                    labelStyle={{ color: '#0056B3' }} 
                >
                    Forgot Password?
                </Button>
            </View>
        </View>
    );
};

export default Login;
