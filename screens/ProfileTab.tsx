import { useContext } from "react";
import { StyleSheet } from "react-native";
import { AuthContext, AuthContextType } from "../context/AuthContext";
import { ProfileBanner } from "../components/Banner";
import { BaseView } from "../components/StyledView";

type Props = {};

const ProfileTab = (props: Props) => {
  const { user } = useContext(AuthContext) as AuthContextType;

  console.log(user);

  return (
    <BaseView
      alignItems='center'
      justifyContent='center'
      lightColor='#F8F9FA'
      style={styles.container}
    >
      <ProfileBanner
        title={
          user.username
            ? `Welcome, ${user.username}. Here you can view all your favourite currencies!`
            : "Welcome, Login or Register an account to start favourting currencies!"
        }
        username={user.username ? user.email : "Get Started!"}
        color={"#00c254"}
      />
    </BaseView>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
});
