import { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import { AuthContext, AuthContextType } from "../context/AuthContext";
import { ProfileBanner } from "../components/Banner";
import { BaseView } from "../components/StyledView";
import FavouritesCard from "../components/cards/FavouritesCard";
import AuthSvg from "../assets/images/auth.svg";
import { View } from "../components/Themed";

type Props = {};

const ProfileTab = (props: Props) => {
  const { user } = useContext(AuthContext) as AuthContextType;

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
        color={"#536DFE"}
      />
      {user.favourites.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.favourites}
          data={[{ title: "Bitcoin", symbol: "BTC" }]}
          keyExtractor={(data) => data.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <FavouritesCard title={item.title} symbol={item.symbol} />;
          }}
        />
      ) : (
        <View>
          <AuthSvg
            style={{ backgroundColor: "#F8F9FA" }}
            height={400}
            width={325}
          />
        </View>
      )}
    </BaseView>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
  favourites: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    paddingTop: 5,
    minHeight: "50%",
    width: "95%",
  },
});
