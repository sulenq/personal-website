import { Box, Button, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import useTrigger from "../global/useTrigger";
import landingData from "../constant/landingData";
import { getLang } from "../lib/lang";
import { useLocation, useNavigate } from "react-router-dom";
import worksData from "../constant/worksData";
import NoData from "../components/Feedbacks/NoData";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import PageHeader from "../components/PageHeader";
import { DesignWorkData, WorkData } from "../constant/types";
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
  const search = query.get("search");

  useEffect(() => {
    if (location.pathname === "/works" && !location.search) {
      navigate("/works?search=&category=0");
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

  // const [searchTimeout, setSearchTimeout] = useState<any>(null);
  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (searchTimeout) {
  //     clearTimeout(searchTimeout);
  //   }

  //   setSearchTimeout(
  //     setTimeout(() => {
  //       query.set("search", e.target.value);
  //       navigate(`${location.pathname}?${query.toString()}`);
  //     }, 500)
  //   );
  // };

  const [data0, setData0] = useState<WorkData[] | null>(null);
  const [data1, setData1] = useState<DesignWorkData[] | null>(null);

  // Data Setter
  useEffect(() => {
    if (activeCategory === 0) {
      const filteredData = worksData[lang].filter((work: WorkData) => {
        const searchTerm = search?.toLowerCase() as string;

        const ok =
          work.title.toLowerCase().includes(searchTerm) ||
          work.clientName.toLowerCase().includes(searchTerm) ||
          work.narative.toLowerCase().includes(searchTerm) ||
          work.solution.toLowerCase().includes(searchTerm) ||
          searchTerm === undefined;

        return ok;
      });

      setData0(filteredData.reverse());
    } else {
      const filteredData = designWorksData.filter((work: DesignWorkData) => {
        const searchTerm = search?.toLowerCase() as string;

        const ok = work.title.toLowerCase().includes(searchTerm);

        return ok;
      });

      setData1(filteredData.reverse());
    }
  }, [activeCategory, lang, search]);

  // const onReset = () => {
  //   query.set("search", "");
  //   query.set("category", "0");
  //   navigate(`${location.pathname}?${query.toString()}`);
  // };

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
        {activeCategory === 0 ? (
          data0 && data0.length > 0 ? (
            <SimpleGrid columns={[1, 2, 3, null, 4]} gap={5} zIndex={1}>
              {data0.map((work, i) => (
                <Box className={"workItem"} key={i}>
                  <PortfolioCard work={work} index={i} />
                </Box>
              ))}
            </SimpleGrid>
          ) : (
            <NoData />
          )
        ) : null}

        {activeCategory === 1 ? (
          data1 && data1.length > 0 ? (
            <SimpleGrid columns={[1, 2, 3, null, 4]} gap={5} zIndex={1}>
              {data1.map((work, i) => (
                <Box
                  scrollSnapAlign={"center"}
                  className="workItem"
                  key={i}
                  width={"100%"}
                  overflow={"clip"}
                  borderRadius={12}
                  bg={"var(--divider)"}
                >
                  <Image
                    src={work.imageUrl}
                    h={"100%"}
                    w={"100%"}
                    objectFit={"contain"}
                  />
                </Box>
              ))}
            </SimpleGrid>
          ) : (
            <NoData />
          )
        ) : null}
      </Container>

      <Contact />

      <Footer />
    </PageContainer>
  );
}
