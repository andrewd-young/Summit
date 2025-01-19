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

  const formatNumberWithCommas = (number) => {
    if (number === undefined || number === null) {
      return '';
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Placeholder calculation for monthly payment amount
  const calculateMonthlyPayment = (totalDebt) => {
    const monthlyPaymentPercentage = 0.05; // 5% of the total debt
    return Math.round(totalDebt * monthlyPaymentPercentage);
  };

  const monthlyPayment = calculateMonthlyPayment(user.debt);

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
            <Text style={commonStyles.amount}>
              ${calculateMonthlyPayment(user.debt)}
            </Text>
          </View>
          <View style={commonStyles.smallCard}>
            <Text style={commonStyles.label}>Total</Text>
            <Text style={commonStyles.amount}>
              {user.debt > 999 ? formatNumberWithCommas((user.debt / 1000).toFixed(1)) + 'k' : formatNumberWithCommas(user.debt)}
            </Text>
          </View>
        </View>

        <Text style={commonStyles.subTitle}>Accounts</Text>

        {/* Additional Info */}
        <View style={commonStyles.infoContainer}>
          <DebtAccountCard type="Student Loan" amount={formatNumberWithCommas(user.debt)} dueDate="2025-02-02" />
        </View>
      </ScrollView>

      <TouchableOpacity style={commonStyles.plusButton}>
        <FontAwesomeIcon icon={faPlus} size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;