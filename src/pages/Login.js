import { View } from "react-native";
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import styles from "../styles/styles";
import { useState } from "react";

const Login = () => {
    const [togglePassword, setTogglePassword] = useState(false);

    return (
        <View style={styles.container}>
            <View style={[styles.section, styles.logoBox, ]}>
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
                    style={styles.input}
                    outlineColor="#A0A0A0"
                    activeOutlineColor="#0056B3" 
                    left={<TextInput.Icon icon="email" size={23} />}
                />

                <TextInput
                    label="Password"
                    mode="outlined"
                    placeholder="Enter your password"
                    style={styles.input}
                    outlineColor="#A0A0A0" 
                    activeOutlineColor="#0056B3"
                    left={<TextInput.Icon icon="key" size={23} />}
                    right={
                        <TextInput.Icon
                            onPress={() => setTogglePassword(!togglePassword)}
                            icon={togglePassword ? "eye" : "eye-off"}
                            size={23}
                        />
                    }   
                    secureTextEntry={!togglePassword}
                />
            </View>

            <View style={[styles.section, { marginTop: 18 }]}>
                <Button
                    onPress={() => console.log("login")}
                    mode="contained"
                    style={[styles.button, { backgroundColor: '#0056B3' }]} 
                    labelStyle={styles.buttonText}
                >
                    Login
                </Button>
                
                <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
                    <Text style={styles.centeredText}>Don't have an account yet?</Text>
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
