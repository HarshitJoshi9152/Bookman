import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Title,
  Text,
} from '@mantine/core';
import React from 'react';
import { RandomNapoleon } from '../../components/RandomNapoleon';
import { Link } from 'react-router-dom';

interface Props {}

export const NotFoundPage: React.FC<Props> = () => {
  return (
    <Container size="lg">
      <Center>
        <Box>
          <Box>
            <Title align="center">Oh how did you land here .....?</Title>
            <Title align="center" order={2}>
              Well Theres nothing we can do....
            </Title>
          </Box>
          <RandomNapoleon mt={10}></RandomNapoleon>
          <Group>
            <Button size="lg">Go back </Button>
            <Link to="/">
              <Button size="lg">Go Home</Button>
            </Link>
          </Group>
        </Box>
      </Center>
    </Container>
  );
};
