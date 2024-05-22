import {
  HStack,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useBackOnClose from "../hooks/useBackOnClose";
import backOnClose from "../lib/backOnClose";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

interface Props {
  data: any;
  imagePath: string;
  index: number;
}

export default function ImageView({ data, imagePath, index }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const initialRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [active, setActive] = useState(index);

  const isNextDisabled = active === data.ss.length - 1;
  const isPrevDisabled = active === 0;

  return (
    <>
      <Image
        alt={`Screenshot ${data.title} ke-${index + 1}`}
        loading={"lazy"}
        transition={"200ms"}
        _hover={{ opacity: 0.6 }}
        cursor={"pointer"}
        src={imagePath}
        w={["80vw", null, "600px"]}
        objectFit={"contain"}
        borderRadius={"0 !important"}
        aspectRatio={"16/9"}
        scrollSnapAlign={"center"}
        onClick={onOpen}
      />

      <Modal
        isOpen={isOpen}
        onClose={() => {
          backOnClose(onClose);
        }}
        initialFocusRef={initialRef}
        size={"full"}
      >
        <ModalOverlay />

        <ModalContent ref={initialRef} bg={"transparent"} overflow={"clip"}>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              justify={"center"}
              h={"100vh"}
              flex={1}
              onClick={() => {
                backOnClose(onClose);
              }}
            >
              <Image
                id="imageViewer"
                alt={`Screenshot ${data.title} ke-${index + 1}`}
                loading={"lazy"}
                transition={"200ms"}
                src={data.ss[active]}
                w={"100%"}
                maxW={"80vw"}
                objectFit={"contain"}
                borderRadius={"0 !important"}
                aspectRatio={"16/9"}
                ref={imageRef}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />

              <VStack className="carouselControl" mt={2}>
                <HStack>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(active - 1);
                    }}
                    className="btn clicky"
                    aria-label="carousel-previous"
                    icon={<Icon as={ArrowLeft} fontSize={20} />}
                    isDisabled={isPrevDisabled}
                  />
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(active + 1);
                    }}
                    className="btn clicky"
                    aria-label="carousel-next"
                    isDisabled={isNextDisabled}
                    icon={<Icon as={ArrowRight} fontSize={20} />}
                  />
                </HStack>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
