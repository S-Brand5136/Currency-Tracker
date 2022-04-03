/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
import { FontAwesome } from "@expo/vector-icons";

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
