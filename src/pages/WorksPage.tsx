import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import useTrigger from "../global/useTrigger";
import landingData from "../constant/landingData";
import { getLang } from "../lib/lang";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useLocation, useNavigate } from "react-router-dom";
import worksData from "../constant/worksData";
import NoData from "../components/Feedbacks/NoData";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import PageHeader from "../components/PageHeader";
import { WorkData } from "../constant/types";
import PortfolioCard from "../components/Cards/PortfolioCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function WorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { trigger } = useTrigger();
  const lang = getLang();
  const categories = [
    lang === "id" ? "Semua Kategori" : "All Category",
    "gatau",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category");
  const search = query.get("search");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    if (category) {
      setActiveCategory(parseInt(category as string));
    }
  }, [category]);

  const activeRef = useRef<any>(null);
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  const [searchTimeout, setSearchTimeout] = useState<any>(null);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(
      setTimeout(() => {
        query.set("search", e.target.value);
        navigate(`${location.pathname}?${query.toString()}`);
      }, 500)
    );
  };
  const [data, setData] = useState<WorkData[] | null>(null);
  useEffect(() => {
    const filteredData = worksData[lang].filter((work) => {
      const searchTerm = search?.toLowerCase() as string;
      const categoryTerm = parseInt(category as string);
      console.log(searchTerm);

      const ok =
        (work.title.toLowerCase().includes(searchTerm) ||
          work.clientName.toLowerCase().includes(searchTerm) ||
          work.narative.toLowerCase().includes(searchTerm) ||
          work.solution.toLowerCase().includes(searchTerm) ||
          searchTerm === undefined) &&
        (work.category + 1 === categoryTerm || categoryTerm === 0);

      return ok;
    });

    setData(filteredData);
  }, [category, lang, search]);

  const onReset = () => {
    query.set("search", "");
    query.set("category", "0");
    navigate(`${location.pathname}?${query.toString()}`);
  };

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
        scale: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    {
      dependencies: [data],
      scope: "#worksPage",
      revertOnUpdate: true,
    }
  );

  return (
    <VStack id="worksPage" gap={0} align={"stretch"} overflowX={"clip"}>
      <Text display={"none"}>{trigger}</Text>

      <PageHeader>{landingData.works.content[lang].nav}</PageHeader>

      <Container>
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
      </Container>

      <Box overflowX={"auto"} className="noScroll">
        <HStack justify={"center"} w={"max-content"} mx={"auto"} px={[5, 6, 8]}>
          {categories.map((c, i) => (
            <Box
              className="categoryChip"
              key={i}
              ref={parseInt(category as string) === i ? activeRef : null}
            >
              <Button
                className="btn-solid clicky"
                color={parseInt(category as string) === i ? "p.500" : ""}
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
        {data && data.length > 0 ? (
          <SimpleGrid columns={[1, 2, 3, null, 4]} gap={5} zIndex={1}>
            {data.map((work, i) => {
              return (
                <Box className={"workItem"} key={i}>
                  <PortfolioCard work={work} />
                </Box>
              );
            })}
          </SimpleGrid>
        ) : (
          <NoData />
        )}
      </Container>

      <Contact />

      <Footer />
    </VStack>
  );
}
