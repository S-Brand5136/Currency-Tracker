import { StyleSheet, TextInput } from "react-native";
import LoginSvg from "../assets/images/login.svg";

import React, { useState } from "react";
import { BaseView } from "../components/StyledView";
import { BoldText } from "../components/StyledText";

type Props = {};

const LoginModal = (props: Props) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <BaseView
      lightColor='#F8F9FA'
      style={styles.layout}
      flexDirection='column'
      alignItems='center'
    >
      <LoginSvg color='#F8F9FA' height={300} width={300} />
      <BoldText style={styles.title} fontSize={36}>
        Login
      </BoldText>
      <TextInput style={styles.input} placeholder='Email Or Username' />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={showPassword}
      />
    </BaseView>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  layout: {
    height: "100%",
  },
  title: {
    marginLeft: 20,
    marginTop: 5,
    letterSpacing: 1,
    textAlign: "left",
    width: "100%",
  },
  input: {
    width: "90%",
    height: 100,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
});
