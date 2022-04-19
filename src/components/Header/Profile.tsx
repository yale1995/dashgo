import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Yale Araújo</Text>
          <Text color="gray.300" fontSize="small">
            yale850@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Yure Araújo"
        src="https://github.com/yale1995.png"
      />
    </Flex>
  );
}
