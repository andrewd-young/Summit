import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import commonStyles from "../../styles/commonStyles";

const WelcomeScreen = ({ navigation }) => {
    const blurb1 = "Managing your student loans just got smarter! Summit is your all-in-one app for taking control of your financial future. Track your loan balances, payment schedules, and interest rates effortlessly. Set personalized goals, receive timely reminders, and explore repayment strategies tailored to your unique needs.";
    const blurb2 = "Whether you're planning for repayment or exploring forgiveness options, Summit is here to simplify the process and empower you to make confident financial decisions. Take the first step toward a debt-free future today—because your success starts with being Summit!";
    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 100 }}>
            <View style={commonStyles.container}>
                <Text style={commonStyles.welcometitle}>Welcome to Summit!</Text>
                <Image
                    source={require("../../assets/summit-app-icon.png")}
                    style={{ width: 190, height: 190, alignSelf: 'center' }}
                />
                <Text style={[commonStyles.welcomelabel, { marginTop: 20 }]}>{blurb1}</Text>
                <Text style={[commonStyles.welcomelabel, { marginTop: 20 }]}>{blurb2}</Text>
                <TouchableOpacity style={commonStyles.longWhiteButton} onPress={() => navigation.navigate('EmailScreen')}>
                    <Text style={commonStyles.blackText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default WelcomeScreen;
