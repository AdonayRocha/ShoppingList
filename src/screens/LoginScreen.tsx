import { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import type { NavigationProp } from '@react-navigation/native'

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [isLogin, setIsLogin] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    useEffect(() => {
        setIsButtonDisabled(!(email.trim() && password.trim()))
    }, [email, password])

    const onLoginPress = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user

            console.log("Login realizado com sucesso:", user.uid)
            navigation.navigate("HomeScreen")
        } catch(error) {
            Alert.alert(
                "Ops!",
                "Não foi possível fazer login. Verifique suas credenciais e tente novamente."
            )
        }
    }

    const onRegisterPress = async () => {
        if (!name || !email || !password) {
            Alert.alert(
                "Atenção!",
                "Por favor, preencha todos os campos."
            )
            return
        }
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user

            await updateProfile(user, { displayName: name })

            navigation.navigate("HomeScreen")
        } catch(error) {
            Alert.alert(
                "Problemas ao cadastrar!",
                (error instanceof Error ? error.message : "Ocorreu um erro inesperado.")
            )
        }
    }

    return(
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{flex: 1, width: '100%'}}
                keyboardShouldPersistTaps='always'
            >

                <Image
                    style={styles.logo}
                    source={require("../../assets/icon.png")}
                />

                {!isLogin && (
                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={text => setName(text)}
                        value={name}
                        autoCapitalize='words'
                    />
                )}

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    autoCapitalize='none'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    autoCapitalize='none'
                    secureTextEntry
                />

                <TouchableOpacity
                    style={[styles.button, {opacity: isButtonDisabled ? 0.5 : 1}]}
                    onPress={isButtonDisabled ? undefined : (isLogin ? onLoginPress : onRegisterPress)}
                >
                    <Text style={styles.buttonTitle}>
                        {isLogin ? "Entrar" : "Cadastrar"}
                    </Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        {isLogin ? "Não possui uma conta? " : "Já possui uma conta? "}
                        <Text 
                            style={styles.footerLink}
                            onPress={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? "Criar conta" : "Entrar"}
                        </Text>
                    </Text>
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        height: 120,
        width: 90,
        alignSelf: 'center',
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 6,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 30,
        paddingLeft: 16

    },
    button: {
        backgroundColor: '#788eec',
        marginHorizontal: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    footerView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    footerText: {
        fontSize: 16,
        color: "#2e2e2d"
    },
    footerLink: {
        color: "#788eec",
        fontWeight: 'bold',
        fontSize: 16
    }
})