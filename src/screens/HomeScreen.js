import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SummitChart from "../components/SummitChart";
import DebtAccountCard from "../components/DebtAccountCard";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Summit</Text>

      {/* Summit Card */}
      <SummitChart />

      {/* Small Cards Container */}
      <View style={commonStyles.smallCardsContainer}>
        {/* Payment Total Card */}
        <View style={commonStyles.smallCard}>
          <Text style={commonStyles.label}>Payment Total</Text>
          <Text style={commonStyles.amount}>725</Text>
        </View>
        {/* Total Card */}
        <View style={commonStyles.smallCard}>
          <Text style={commonStyles.label}>Total</Text>
          <Text style={commonStyles.amount}>10k</Text>
        </View>
      </View>

      {/* Accounts Header */}
      <Text style={commonStyles.subTitle}>Accounts</Text>

      {/* Additional Info */}
      <View style={commonStyles.infoContainer}>
        <DebtAccountCard type="Credit Card" amount="500" dueDate="2023-11-01" />
        <DebtAccountCard type="Student Loan" amount="1500" dueDate="2023-12-15" />
      </View>

      {/* Plus Button */}
      <TouchableOpacity style={commonStyles.plusButton}>
        <FontAwesomeIcon icon={faPlus} size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
