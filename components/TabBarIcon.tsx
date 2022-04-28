/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
import { Ionicons } from "@expo/vector-icons";

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};
