import { Text } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Profile = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={{ alignSelf: "center", textAlign: "center" }}>
          Hello Profile
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
export default Profile;
