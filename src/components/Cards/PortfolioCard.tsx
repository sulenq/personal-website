import { Button, Icon, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { iconSize } from "../../constant/sizes";

export default function PortfolioCard(props: any) {
  const work = props?.work;
  const setActiveWork = props?.setActiveWork;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOnClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
    if (setActiveWork) {
      setActiveWork(work);
    }
  };

  return (
    <VStack
      bgImage={work.image}
      bgSize={"cover"}
      bgPos={"top"}
      cursor={"pointer"}
      scrollSnapAlign={"center"}
      align={"stretch"}
      borderRadius={12}
      overflow={"clip"}
      className="clicky"
      w={props?.w}
      _hover={{ opacity: isOpen ? 1 : 0.8 }}
      transition={"200ms"}
      gap={0}
      onClick={handleOnClick}
      aspectRatio={"4 / 5"}
      minW={"328px"}
      {...props}
    >
      <VStack
        transition={"200ms"}
        align={"stretch"}
        justify={"center"}
        p={6}
        h={"100%"}
        bg={"blackAlpha.800"}
        opacity={isOpen ? 1 : 0}
      >
        <VStack
          flex={1}
          transform={isOpen ? "translateY(0)" : "translateY(200px)"}
          transition={"200ms"}
        >
          <Text
            my={"auto"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={600}
            color={"white"}
          >
            {work.title}
          </Text>

          <Button
            w={"100%"}
            mt={"auto"}
            as={Link}
            to={`/works/${props.index}`}
            className="btn"
            color={"p.500"}
            rightIcon={<Icon as={ArrowUpRight} fontSize={iconSize} />}
          >
            Detail
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
}
