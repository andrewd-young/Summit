import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import commonStyles from "../styles/commonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faMountain } from "@fortawesome/free-solid-svg-icons";
import SummitChart from "../components/SummitChart";
import DebtAccountCard from "../components/DebtAccountCard";
import { useUserData } from "../context/UserProvider";

const HomeScreen = ({ navigation }) => {
  const { user } = useUserData();

  return (
    <View style={[commonStyles.container, { flex: 1 }]}>
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
          <Text style={commonStyles.title}>Summit</Text>
          <FontAwesomeIcon icon={faMountain} size={32} color="white" style={{ marginLeft: 10 }} />
        </View>

        {/* Summit Card */}
        <SummitChart />

        {/* Small Cards Container */}
        <View style={commonStyles.smallCardsContainer}>
          <View style={commonStyles.smallCard}>
            <Text style={commonStyles.label}>Payment Total</Text>
            <Text style={commonStyles.amount}>725</Text>
          </View>
          <View style={commonStyles.smallCard}>
            <Text style={commonStyles.label}>Total</Text>
            <Text style={commonStyles.amount}>{user.debt}</Text>
          </View>
        </View>

        <Text style={commonStyles.subTitle}>Accounts</Text>

        {/* Additional Info */}
        <View style={commonStyles.infoContainer}>
          <DebtAccountCard type="Credit Card" amount="500" dueDate="2023-11-01" />
          <DebtAccountCard type="Student Loan" amount="1500" dueDate="2023-12-15" />
          <DebtAccountCard type="Auto Loan" amount="8000" dueDate="2024-01-10" />
          <DebtAccountCard type="Mortgage" amount="200000" dueDate="2024-02-01" />
          <DebtAccountCard type="Personal Loan" amount="3000" dueDate="2024-03-05" />
        </View>
      </ScrollView>

      <TouchableOpacity style={commonStyles.plusButton}>
        <FontAwesomeIcon icon={faPlus} size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
