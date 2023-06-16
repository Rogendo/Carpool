import { Appearance } from "react-native";
const isDarkMode = Appearance.getColorScheme() === "dark";

const viewStyles = {
  margin: 0,
  padding: 10,
  height: "100%",
  borderRadius: 10,
  //   alignItems: "center",
  backgroundColor: `${isDarkMode ? "#e6e6e6" : "#e6e6e6"}`,
};

const headingStyles = {
  fontSize: 24,
  letterSpacing: 1,
  marginTop: 15,
  color: `${isDarkMode ? "#FFF" : "#010000"}`,
};

export { viewStyles };
