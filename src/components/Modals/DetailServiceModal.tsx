import {
  HStack,
  Text,
  Icon,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  ModalFooter,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import { ArrowUp } from "@phosphor-icons/react";

import landingData from "../../constant/landingData";
import { getLang } from "../../lib/lang";

type Props = {
  data: {
    icon: any;
    title: string;
    image: string;
    narative: string;
    detailLink: string;
  };
};

export default function DetailServiceModal({ data }: Props) {
  const lang = getLang();
  const reversePrimaryColor = useColorModeValue("p.400", "p.500");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        mt={"auto"}
        color={reversePrimaryColor}
        fontWeight={500}
        role="group"
        transition={"200ms"}
        gap={1}
        onClick={onOpen}
        cursor={"pointer"}
      >
        <Text>{landingData.services[lang].detail}</Text>

        <Icon
          transition={"200ms"}
          w={"0px"}
          opacity={0}
          _groupHover={{ w: "20px", opacity: 1 }}
          as={ArrowUp}
        />
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />

        <ModalContent>
          <ModalBody mt={6}>
            <VStack position={"relative"} mb={4}>
              <Image
                loading={"lazy"}
                src={data.image}
                alt={data.title}
                borderRadius={8}
                objectFit={"cover"}
              />

              <Center
                position={"absolute"}
                top={4}
                right={4}
                p={2}
                bg={"blackAlpha.500"}
                color={"white"}
                borderRadius={8}
                backdropFilter={"blur(5px)"}
              >
                <Icon
                  as={data.icon}
                  fontSize={42}
                  color={"current"}
                  weight="fill"
                />
              </Center>
            </VStack>

            <Text fontWeight={700} fontSize={20} mb={2} lineHeight={1.4}>
              {data.title}
            </Text>

            <Text>{data.narative}</Text>
          </ModalBody>

          <ModalFooter>
            <Button w={"100%"} className="btn-solid clicky" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
