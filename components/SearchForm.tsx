import React from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputEndEditingEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onEndEditing: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  onPress: () => void;
};

const SearchForm = (props: Props) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons style={styles.inputIcon} size={25} name='search' />
      <TextInput
        placeholder='Search Cryptocurrency'
        style={styles.searchInput}
        value={props.value}
        onChangeText={props.onChange}
        onEndEditing={props.onEndEditing}
      />
      <TouchableOpacity onPress={props.onPress}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchForm;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  searchContainer: {
    position: "absolute",
    top: 75,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 2,
    borderRadius: 5,
    height: 35,
    marginRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 35,
    width: screenWidth - 135,
  },
  inputIcon: {
    left: 30,
    color: "rgba(0,0,0,0.1)",
  },
  cancelButton: {},
});
