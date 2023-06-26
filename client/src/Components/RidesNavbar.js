import { Box, Input, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
const RidesNavbar = () => {
  const [location, setLocation] = useState("");
  return (
    <View
      display={"flex"}
      flexDir={"row"}
      alignItems={"center"}
      mt={4}
      padding={1}
      height={"10%"}
    >
      <Box
        backgroundColor={""}
        height={"10"}
        width={"10"}
        rounded={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        background={require("../../assets/person.png")}
      >
        {/* <Image /> */}
      </Box>
      <Box w={"2/3"} flex={1}>
        <Input
          rounded={"2xl"}
          value={location}
          backgroundColor={"#C9D0EA"}
          autoCapitalize={"none"}
          mx={"4"}
          textAlign={"center"}
          fontSize={18}
          placeholder="Where to"
          padding={"1.5"}
          inputMode="text"
          onChangeText={(e) => setLocation(e)}
          InputRightElement={() => (
            <Ionicons name="search" size={24} color="black" />
          )}
        />
      </Box>
    </View>
  );
};

export default RidesNavbar;
