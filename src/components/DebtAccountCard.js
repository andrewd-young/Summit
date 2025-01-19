import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCreditCard, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import commonStyles from "../styles/commonStyles";

const DebtAccountCard = ({ type, amount, dueDate }) => {
  let icon;
  switch (type) {
    case "Credit Card":
      icon = faCreditCard;
      break;
    case "Student Loan":
      icon = faGraduationCap;
      break;
    default:
      icon = faCreditCard; // Default icon
  }

  // Format the date to be shorter
  const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

return (
    <View style={commonStyles.debtCard}>
        <View style={commonStyles.debtCardHeader}>
            <FontAwesomeIcon icon={icon} size={24} style={{ marginRight: 10 }} color="white" />
            <Text style={commonStyles.debtCardAmount}>${amount}</Text>
            <Text style={commonStyles.debtCardDate}>{formattedDate}</Text>
        </View>
    </View>
);
};

export default DebtAccountCard;