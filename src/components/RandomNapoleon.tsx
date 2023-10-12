import { Grid, Image, ImageProps } from '@mantine/core';
import React from 'react';

interface Props extends ImageProps {
  seed?: number;
}

// TODO: Optimise these images
const IMAGES: Array<String> = [
  './assets/Napoleon/14jt8m.jpg',
  './assets/Napoleon/7zr9ky.png',
  './assets/Napoleon/8054ty.jpg',
  './assets/Napoleon/80ol0k.jpg',
  './assets/Napoleon/c19ra.jpg',
  './assets/Napoleon/nty63.jpg',
  './assets/Napoleon/pd0ei.jpg',
  './assets/Napoleon/t77jx.jpg',
];

export const RandomNapoleon: React.FC<Props> = (props) => {
  const { seed } = props;

  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  const link = IMAGES[7];
  // undefined....
  // ./assets/Napoleon/8054ty.jpg
  if (seed) return <Image src={IMAGES[seed]} width={100} fit="contain"></Image>;
  return <Image {...props} src={link} width={100} fit="contain"></Image>;
};
