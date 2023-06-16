import { Button, Stack, Input, Text, Box } from "native-base";
const FormFields = ({
  name,
  placeholder,
  value,
  onchange,
  secureTextEntry,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginY={3}
    >
      <Text
        fontSize={19}
        letterSpacing={0.7}
        color={"black"}
        textTransform={"capitalize"}
      >
        {name}
      </Text>
      <Input
        w={"3/4"}
        variant={"filled"}
        borderRadius={10}
        backgroundColor={"white"}
        placeholder={placeholder}
        value={value}
        onChangeText={onchange}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </Box>
  );
};

export default FormFields;
