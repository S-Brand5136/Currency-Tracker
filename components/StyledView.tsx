import { View, ViewProps } from "./Themed";

export const BaseView = (props: ViewProps) => {
  return (
    <View {...props} style={[props.style]}>
      {props.children}
    </View>
  );
};
