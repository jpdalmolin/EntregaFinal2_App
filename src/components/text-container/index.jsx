import { Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const TextContainer = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextContainer;