import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Summit</Text>

      {/* Summit Card */}
      <View style={commonStyles.card}>
        {/* Progress Steps */}
        <View style={commonStyles.stepsContainer}>
          <View style={commonStyles.steps}>
            <View style={commonStyles.step} />
            <View style={commonStyles.step} />
            <View style={commonStyles.step} />
            <View style={[commonStyles.step, commonStyles.incompleteLine]} />
          </View>
        </View>
      </View>

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

      {/* Additional Info */}
      <View style={commonStyles.infoContainer}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>CC</Text>
          <Text style={commonStyles.infoValue}>1/27</Text>
        </View>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Student</Text>
          <Text style={commonStyles.infoValue}>2/3</Text>
        </View>
      </View>

      {/* Plus Button */}
      <TouchableOpacity style={commonStyles.plusButton}>
        <FontAwesomeIcon icon={faPlus} size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
