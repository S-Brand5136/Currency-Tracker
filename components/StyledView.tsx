import { View, ViewProps } from "./Themed";

export const StyledView = (props: ViewProps) => {
  return (
    <View {...props} style={[props.style]}>
      {props.children}
    </View>
  );
};
