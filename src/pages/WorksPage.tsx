import {
  Box,
  Button,
  HStack,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Container from "../components/Container";
import useTrigger from "../global/useTrigger";
import landingData from "../constant/landingData";
import { getLang } from "../lib/lang";
import { useLocation, useNavigate } from "react-router-dom";
import worksData from "../constant/worksData";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import PageHeader from "../components/PageHeader";
import PortfolioCard from "../components/Cards/PortfolioCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TopNav from "../components/TopNav";
import PageContainer from "../components/PageContainer";
import designWorksData from "../constant/designWorksData";

export default function WorksPage() {
  const { trigger } = useTrigger();
  const lang = getLang();
  const categories = [
    lang === "id" ? "Karya Web" : "Web Works",
    lang === "id" ? "Karya Desain" : "Design Works",
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const activeCategory = parseInt(query.get("category") as string);

  useEffect(() => {
    if (location.pathname === "/works" && !location.search) {
      navigate("/works?category=0");
    }
  }, [location.pathname, navigate]);

  const activeRef = useRef<any>(null);
  // Active Category scroll to view
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  useGSAP(() => {
    gsap.from("#worksControl", {
      y: -50,
      opacity: 0,
    });
    gsap.from(".categoryChip", {
      scale: 0,
      stagger: {
        each: 0.2,
      },
    });
  });

  useGSAP(
    () => {
      gsap.from(".workItem", {
        scale: 0.5,
        opacity: 0,
        stagger: {
          each: 0.05,
        },
      });
    },
    {
      dependencies: [activeCategory],
      scope: "#worksPage",
      revertOnUpdate: true,
    }
  );

  return (
    <PageContainer id="worksPage">
      <TopNav />

      <Text display={"none"}>{trigger}</Text>

      <PageHeader>{landingData.works.content[lang].nav}</PageHeader>

      {/* <Container>
        <HStack
          id={"worksControl"}
          w={"100%"}
          maxW={"700px"}
          justify={"center"}
          mx={"auto"}
          mb={10}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={MagnifyingGlass} fontSize={20} />
            </InputLeftElement>
            <Input
              placeholder={lang === "id" ? "Pencarian" : "Search"}
              className="input"
              onChange={handleSearch}
            />
          </InputGroup>

          <Tooltip label={"Reset"} openDelay={500}>
            <IconButton
              onClick={onReset}
              className="btn-solid clicky"
              aria-label="reset filter button"
              icon={<Icon as={X} fontSize={20} />}
            />
          </Tooltip>
        </HStack>
      </Container> */}

      <Box overflowX={"auto"} className="noScroll">
        <HStack justify={"center"} w={"max-content"} mx={"auto"} px={[5, 6, 8]}>
          {categories.map((c, i) => (
            <Box
              className="categoryChip"
              key={i}
              ref={activeCategory === i ? activeRef : null}
            >
              <Button
                className="btn-solid clicky"
                color={activeCategory === i ? "p.500" : ""}
                onClick={() => {
                  query.set("category", i.toString());
                  navigate(`${location.pathname}?${query.toString()}`);
                }}
              >
                {c}
              </Button>
            </Box>
          ))}
        </HStack>
      </Box>

      <Container py={16} pt={10} flex={1} minH={"500px"}>
        {activeCategory === 0 && (
          <SimpleGrid columns={[1, 2, 3, null, 4]} gap={5} zIndex={1}>
            {worksData[lang]
              .slice()
              .reverse()
              .map((work, i) => (
                <Box className={"workItem"} key={i}>
                  <PortfolioCard work={work} index={i} />
                </Box>
              ))}
          </SimpleGrid>
        )}

        {activeCategory === 1 && (
          <SimpleGrid columns={[2, null, 3, null, 4]} gap={5} zIndex={1}>
            {designWorksData
              .slice()
              .reverse()
              .map((work, i) => (
                <Box className="workItem" key={i}>
                  <ChakraLink
                    scrollSnapAlign={"center"}
                    width={"100%"}
                    overflow={"clip"}
                    borderRadius={12}
                    bg={"var(--divider)"}
                    _hover={{ opacity: 0.8 }}
                    transition={"200ms"}
                    href={work.url}
                    isExternal
                  >
                    <Image
                      src={work.imageUrl}
                      h={"100%"}
                      w={"100%"}
                      objectFit={"contain"}
                    />
                  </ChakraLink>
                </Box>
              ))}
          </SimpleGrid>
        )}
      </Container>

      <Contact />

      <Footer />
    </PageContainer>
  );
}
