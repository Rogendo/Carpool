import { Text } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Activity = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={{ alignSelf: "center", textAlign: "center" }}>
          Hello activity
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

export default Activity;
