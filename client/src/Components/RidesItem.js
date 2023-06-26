import {
  Box,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Button,
} from "native-base";
import { ridesMock } from "../../mock/mock";

const RidesItem = () => {
  return (
    <>
      <Text
        m={4}
        fontSize={"md"}
        position={"relative"}
        letterSpacing={0.5}
        textTransform={"capitalize"}
        fontWeight={"700"}
        _dark={{ color: "warmGray.300" }}
      >
        showing 8 Rides available
      </Text>
      <FlatList
        m={4}
        display={"flex"}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={ridesMock}
        keyExtractor={(Item) => Item.id}
        renderItem={({ item }) => {
          return (
            <Box
              backgroundColor={"#D9D9D9"}
              height={150}
              marginTop={"8"}
              borderRadius={10}
            >
              <Text
                textAlign={"center"}
                fontSize={"md"}
                letterSpacing={".5"}
                mt={1}
              >
                {item.about}
              </Text>
              <Box
                height={100}
                borderRadius={10}
                w={281}
                backgroundColor={"#F6F6F6"}
                mt={1}
                display={"flex"}
                flexDirection={"row"}
                padding={1}
                mx={1}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  flex={1}
                  w={"1/3"}
                >
                  <Text fontSize={"md"}>
                    Pick up:
                    <Text marginLeft={2} color={"coolGray.700"} fontSize={"sm"}>
                      {item.pickupLocation.name}
                    </Text>
                  </Text>
                  <Text fontSize={"md"}>
                    Drop off:
                    <Text marginLeft={2} color={"coolGray.700"} fontSize={"sm"}>
                      {item.dropOffLocation.name}
                    </Text>
                  </Text>
                </Box>
                <Box width={"2/3"} display={"flex"} flexDirection={"row"}>
                  <Text mt={"1/6"} fontSize={"2xl"}>
                    {item.price.toLocaleString("en-us", {
                      style: "currency",
                      currency: "ksh",
                    })}
                  </Text>
                  <Text numberOfLines={2} lineBreakMode="middle" right={8}>
                    Available seats {item.availableSeats}
                  </Text>

                  <Text position={"absolute"} bottom={0} letterSpacing={0.5}>
                    Posted at
                  </Text>

                  <Button
                    position={"absolute"}
                    bottom={0}
                    right={2}
                    colorScheme={"gray"}
                    size={"sm"}
                  >
                    Book
                  </Button>
                </Box>
              </Box>
              <Box
                position={"absolute"}
                justifyContent={"space-around"}
                alignItems={"center"}
                h={"20"}
                w={"20"}
                right={0}
                top={0}
                borderRadius={5}
                backgroundColor={"#E6E6E6"}
              >
                <Text>Driver image</Text>
                <Text>{item.driver.name}</Text>
              </Box>
            </Box>
          );
        }}
      />
    </>
  );
};

export default RidesItem;
