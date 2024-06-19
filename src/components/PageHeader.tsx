import { Box, Heading, VStack } from "@chakra-ui/react";
import Container from "./Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = {
  children: any;
};

export default function PageHeader({ children }: Props) {
  const containerRef = useRef(null);
  // Animation
  useGSAP(
    () => {
      gsap.from("#pageHeaderTitle", {
        y: 50,
        opacity: 0,
      });
      gsap.from("#pageHeaderAccent", {
        delay: 0.2,
        scale: 0,
      });
    },
    { scope: containerRef }
  );

  return (
    <VStack
      id="pageHeader"
      ref={containerRef}
      position={"relative"}
      align={"stretch"}
    >
      <Container
        bgSize={"cover"}
        bgPos={"top"}
        borderRadius={"0 0 12px 12px"}
        overflow={"hidden"}
      >
        <VStack align={"stretch"}>
          <VStack pt={"80px"} pb={"100px"} position={"relative"}>
            <Heading
              id="pageHeaderTitle"
              as={"h1"}
              className="serif"
              fontSize={[42, 48, 52]}
              mb={4}
            >
              {children}
            </Heading>

            <Box
              h={"2px"}
              w={"140px"}
              bg={"var(--divider3)"}
              borderRadius={12}
              id="pageHeaderAccent"
            />
          </VStack>
        </VStack>
      </Container>
    </VStack>
  );
}
