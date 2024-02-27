import { HStack, Icon } from "@chakra-ui/react";
import { Star, StarHalf } from "@phosphor-icons/react";
import React from "react";

type Props = {
  rate: number;
};

export default function StarRate({ rate }: Props) {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(1);
  }

  if (hasHalfStar) {
    stars.push(0);
  }

  return (
    <HStack>
      {stars.map((star, i) => {
        const isFull = star === 1;
        return isFull ? (
          <Icon as={Star} key={i} weight="fill" />
        ) : (
          <Icon as={StarHalf} key={i} weight="fill" />
        );
      })}
    </HStack>
  );
}
