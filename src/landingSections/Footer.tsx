import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import LangSwitcher from "../components/LangSwitcher";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

export default function Footer(props: any) {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".footerItem", {
        scrollTrigger: scrollTriggerConfig("#contact"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <VStack
      id="footer"
      ref={containerRef}
      bg={"var(--divider)"}
      p={5}
      align={"stretch"}
      {...props}
    >
      <HStack
        id="footerContent"
        justify={"space-between"}
        w={"100%"}
        maxW={"1280px"}
        mx={"auto"}
      >
        <Text className="footerItem">
          2024 © Fatwa Linovera. All right reserved.
        </Text>

        <HStack>
          <Box className="footerItem">
            <ColorModeSwitcher color={props.color || "current"} />
          </Box>

          <Box className="footerItem">
            <LangSwitcher color={props.color || "current"} />
          </Box>
        </HStack>
      </HStack>
    </VStack>
  );
}
