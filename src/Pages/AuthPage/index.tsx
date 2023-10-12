import { Box, Center, Container, Title } from '@mantine/core';
import React from 'react';

interface Props {}

export const AuthPage: React.FC<Props> = () => {
  return (
    <Container>
      <Center>
        {/* 1st Range */}
        <Box>
          <Title order={1}>Authenticate to Proceed</Title>
          {/* 3rd range */}
        </Box>
        {/* 2nd Range */}
      </Center>
    </Container>
  );
};
