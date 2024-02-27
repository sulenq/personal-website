import {
  Button,
  HStack,
  Image,
  Link as ChakraLink,
  Center,
  Icon,
  useToast,
  IconButton,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import landingData from "../../constant/landingData";
import { getLang } from "../../lib/lang";
import useScreenWidth from "../../hooks/useScreenWidth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import worksData from "../../constant/worksData";
import BlackToast from "../Toasts/MyToast";
import DrawerNav from "./DrawerNav";

export default function FloatingPortfolioNav() {
  const lang = getLang();
  const sw = useScreenWidth();
  const { id } = useParams();

  const [showNav, setShowNav] = useState<boolean>(true);
  const prevScrollY = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (sw < 768 || currentScrollY >= 0) {
        clearTimeout(scrollTimeout.current);

        if (
          (currentScrollY !== prevScrollY.current && currentScrollY >= 0) ||
          sw < 768
        ) {
          setShowNav(false);
          prevScrollY.current = currentScrollY;

          scrollTimeout.current = setTimeout(() => {
            setShowNav(true);
          }, 500);
        }
      } else {
        clearTimeout(scrollTimeout.current);
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current!);
    };
  }, [sw]);

  const worksLength = worksData[lang].length;
  const workCurrentId = parseInt(id as string);
  const navigate = useNavigate();
  const toast = useToast();

  const handleNext = () => {
    toast.closeAll();
    if (workCurrentId + 1 < worksLength) {
      navigate(`/works/${workCurrentId + 1}`);
      toast({
        position: "top",
        render: () => (
          <BlackToast>
            <Text textAlign={"center"} fontWeight={500}>
              {worksData[lang][workCurrentId + 1].title}
            </Text>
          </BlackToast>
        ),
        duration: 5000,
      });
    } else {
      toast({
        position: "top",
        render: () => (
          <BlackToast>
            <Text textAlign={"center"} fontWeight={500}>
              {lang === "id" ? "Batas terakhir" : "Last limit"}
            </Text>
          </BlackToast>
        ),
        duration: 5000,
      });
    }
  };

  const handlePrev = () => {
    toast.closeAll();
    if (workCurrentId - 1 >= 0) {
      navigate(`/works/${workCurrentId - 1}`);
      toast({
        position: "top",
        render: () => (
          <BlackToast>
            <Text textAlign={"center"} fontWeight={500}>
              {worksData[lang][workCurrentId - 1].title}
            </Text>
          </BlackToast>
        ),
        duration: 5000,
      });
    } else {
      toast({
        position: "top",
        render: () => (
          <BlackToast>
            <Text textAlign={"center"} fontWeight={500}>
              {lang === "id" ? "Batas pertama" : "First limit"}
            </Text>
          </BlackToast>
        ),
        duration: 5000,
      });
    }
  };

  return (
    <HStack
      position={"fixed"}
      left={0}
      bottom={0}
      w={"100%"}
      justify={"center"}
      p={4}
      zIndex={99}
    >
      <HStack
        bg={"blackAlpha.800"}
        transition={"300ms"}
        overflow={"hidden"}
        borderRadius={16}
        p={1}
        backdropFilter={"blur(5px)"}
        gap={1}
        align={"flex-end"}
        transform={!showNav ? "translateY(calc(100% + 16px))" : ""}
      >
        <Link to="/">
          <Center
            bg={"blackAlpha.800"}
            borderRadius={14}
            w={"48px"}
            h={"48px"}
            flexShrink={0}
          >
            <Image loading={"lazy"} src={"/logo.png"} h={"42px"} />
          </Center>
        </Link>

        <HStack p={1} borderRadius={14} bg={"blackAlpha.800"} gap={1}>
          <Tooltip
            label={lang === "id" ? "Karya sebelumnya" : "Previous Portfolio"}
          >
            <IconButton
              aria-label="prev portfolio"
              className="btn"
              borderRadius={12}
              color={"white"}
              onClick={handlePrev}
              icon={<Icon as={ArrowLeft} fontSize={20} />}
              // border={"1px solid var(--divider3)"}
            />
          </Tooltip>

          <Tooltip
            label={lang === "id" ? "Karya selanjutnya" : "Next Portfolio"}
          >
            <IconButton
              aria-label="next portfolio"
              className="btn"
              borderRadius={12}
              color={"white"}
              icon={<Icon as={ArrowRight} fontSize={20} />}
              onClick={handleNext}
              // border={"1px solid var(--divider3)"}
            />
          </Tooltip>
        </HStack>

        <Center
          bg={"blackAlpha.800"}
          borderRadius={14}
          w={"48px"}
          h={"48px"}
          flexShrink={0}
        >
          <DrawerNav color={"white"} />
        </Center>

        <HStack p={1} borderRadius={14} bg={"blackAlpha.800"} gap={1}>
          <Button
            px={6}
            className="btn-ap clicky"
            color={"white"}
            w={"150px"}
            as={ChakraLink}
            borderRadius={12}
            href="#contact"
          >
            {landingData.hero[lang].contactUs.label}
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
}
