import { Input, Text, Box } from "native-base";
const FormFields = ({
  name,
  placeholder,
  value,
  onchange,
  secureTextEntry,
  icon,
}) => {
  return (
    <Box
      display={"flex"}
      p={1}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginY={3}
    >
      <Text
        fontSize={17}
        letterSpacing={0.7}
        color={"black"}
        textTransform={"capitalize"}
      >
        {name}
      </Text>
      <Input
        w={"3/4"}
        fontSize={14}
        margin={0.3}
        textAlign={"center"}
        variant={"filled"}
        borderRadius={10}
        backgroundColor={"white"}
        placeholder={placeholder}
        value={value}
        onChangeText={onchange}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        rightElement={icon || null}
      />
    </Box>
  );
};

export default FormFields;
