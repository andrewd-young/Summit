import React from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
import commonStyles from "../../styles/commonStyles";


const WelcomeScreen = ({ navigation }) => {

    const blurb = "Managing your student loans just got smarter! Summit is your all-in-one app for taking control of your financial future. Track your loan balances, payment schedules, and interest rates effortlessly. Set personalized goals, receive timely reminders, and explore repayment strategies tailored to your unique needs. Whether you're planning for repayment or exploring forgiveness options, Summit is here to simplify the process and empower you to make confident financial decisions. Take the first step toward a debt-free future today—because your success starts with being Summit!"
    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.title}>Welcome to Summit</Text>
            <Image
                source={require("../../assets/summit-app-icon.png")}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
            />
            <Text style={commonStyles.label}>{blurb}</Text>
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