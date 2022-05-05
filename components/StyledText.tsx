import { Text, TextProps } from "./Themed";

export const RegularText = (props: TextProps) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "Cabin-Regular",
          fontSize: props.fontSize,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};

export const BoldText = (props: TextProps) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "Cabin-Bold",
          fontSize: props.fontSize,
          letterSpacing: !props.letterSpacing ? 0.25 : props.letterSpacing,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};
