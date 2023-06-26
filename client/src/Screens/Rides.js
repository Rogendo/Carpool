import { Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { RidesItem, RidesNavbar } from "../Components";

const Rides = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <RidesNavbar />

        <RidesItem />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
});
export default Rides;
