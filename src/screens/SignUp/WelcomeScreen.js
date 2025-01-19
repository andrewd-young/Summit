import React from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
import commonStyles from "../../styles/commonStyles";


const WelcomeScreen = ({ navigation }) => {

    const blurb = "Managing your student loans / debt just got smarter! Summit is your all-in-one app for taking control of your financial future. Track your loan balances, payment schedules, and interest rates effortlessly. Summit is here to simplify the process and empower you to make confident financial decisions."
    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.welcometitle}>Welcome to Summit</Text>
            <Image
                source={require("../../assets/summit-app-icon.png")}
                style={{ width: 200, height: 200, alignSelf: 'center' }}
            />
            <Text style={commonStyles.welcomelabel}>{blurb}</Text>
            <View style={styles.nextButton}>
                <Button title="Get Started" onPress={() => navigation.navigate('EmailScreen')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nextButton: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#gray',
    }
})

export default WelcomeScreen;