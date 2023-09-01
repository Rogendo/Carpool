import { Text } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Activity = () => {
  return (
    <>
      <Text style={{ alignSelf: "center", textAlign: "center" }}>
        Hello activity
      </Text>
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

export default Activity;
