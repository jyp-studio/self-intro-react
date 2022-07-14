import { useState } from "react";
import {
  Box,
  IconButton,
  Image,
  Heading,
  Text,
  Flex,
  Center,
  Container,
  useBreakpointValue,
  Stack,
  useColorModeValue,
  WrapItem,
  VStack,
  Icon,
  Tag,
  TagLabel,
  TagRightIcon,
  Spacer,
} from "@chakra-ui/react";
import Slider from "react-slick";
import img_thanksgivening from "../assets/thanks_giving.jpg";
import img_guitarist from "../assets/guitarist.jpg";
import img_mc_all_spotlight from "../assets/mc_all_spotlight.jpg";
import img_mc_all from "../assets/mc_all.jpg";
import img_speech from "../assets/speech.jpg";
import img_coding_bg from "../assets/coding_bg1.png";
import img_creativity from "../assets/creativity_bg.jpg";
import img_learn from "../assets/learn_bg.png";
import img_confidence from "../assets/confidence_bg.png";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {
  FiHome,
  FiCompass,
  FiYoutube,
  FiCommand,
  FiMessageCircle,
  FiBox,
  FiChevronLeft,
  FiChevronRight,
  FiFeather,
  FiBookOpen,
  FiUserCheck,
} from "react-icons/fi";

// Sidebar link items
const LinkItems = [
  { id: "link_1", name: "Home", icon: FiHome, href: "#" },
  { id: "link_2", name: "Abstract", icon: FiCompass, href: "#abstract" },
  { id: "link_3", name: "Trailer", icon: FiYoutube, href: "#trailer" },
  {
    id: "link_4",
    name: "Architecture",
    icon: FiCommand,
    href: "#architecture",
  },
  { id: "link_5", name: "Thoughts", icon: FiMessageCircle, href: "#thoughts" },
  { id: "link_6", name: "Demo", icon: FiBox, href: "#demo" },
];

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// cards of Carousel
const cards = [
  {
    id: "card_1",
    title: "LAiMM設計思考工作坊",
    text: "學習設計思考的方式來構思專案，解決問題",
    image: img_coding_bg,
  },
  {
    id: "card_2",
    title: "活動總召",
    text: "擔任成大中友會聖誕節晚會總召",
    image: img_thanksgivening,
  },
  {
    id: "card_3",
    title: "營隊講師與隊輔",
    text: "2度參加成大科系探索營，幫助莘莘學子",
    image: img_mc_all,
  },
];

// data of widget
const data = [
  {
    id: "data_1",
    name: "Creativity",
    image: img_creativity,
    detail: "有價值的差異化，是我的創新",
    icon: FiFeather,
  },
  {
    id: "data_2",
    name: "Fast-learner",
    image: img_learn,
    detail: "快速學習，應用知識",
    icon: FiBookOpen,
  },
  {
    id: "data_3",
    name: "Self-confidence",
    image: img_confidence,
    detail: "我相信我做得到，而我也總是做得到",
    icon: FiUserCheck,
  },
];

function Activity() {
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <>
      <Navbar />
      <Sidebar linkItems={LinkItems} key={LinkItems.id} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        <Box
          position={"relative"}
          height={"600px"}
          width={"full"}
          overflow={"hidden"}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}
          <IconButton
            color={"whiteAlpha.800"}
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            <FiChevronLeft size="40px" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            color={"whiteAlpha.800"}
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            <FiChevronRight size="40px" />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card) => (
              <Box
                key={card.id}
                height={"6xl"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={card.image}
              >
                {/* This is the block you need to change, to customize the caption */}
                <Container
                  size="container.lg"
                  height="600px"
                  position="relative"
                >
                  <Stack
                    spacing={6}
                    w={"full"}
                    maxW={"lg"}
                    position="absolute"
                    top="50%"
                    transform="translate(0, -50%)"
                    backdropFilter="auto"
                    backdropBlur="4px"
                    alignItems={"center"}
                  >
                    <Heading
                      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                      fontWeight={"bolder"}
                      color="white"
                    >
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="gray.300">
                      {card.text}
                    </Text>
                  </Stack>
                </Container>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* here is widget */}
        <VStack>
          <Heading marginTop={"10"} fontSize={"6xl"}>
            我的特質
          </Heading>
        </VStack>
        <Flex flexWrap={"wrap"} justify={"center"} py={"10"}>
          {data.map((item) => (
            <WrapItem px={"2"} key={item.key}>
              <Widget {...item} />
            </WrapItem>
          ))}
        </Flex>

        {/* body of content */}
        <Box w={"full"} bg={"teal.50"}>
          <Container maxW={"8xl"} py="3" centerContent>
            <Flex flexWrap={"wrap"} justifyContent="center" marginTop={"20"}>
              <Flex flexWrap="wrap" flexDirection="column" w={"20em"}>
                <Heading fontSize={"6xl"}>活動總召</Heading>
                <Text>感恩節活動時，擔任中友扒雞會總召</Text>
                <Flex flexWrap="wrap">
                  <CreativityTags />
                  <ConfidenceTags />
                </Flex>
              </Flex>
              <Box p="2" width={{ base: "sm", md: "md", lg: "3xl" }}>
                <Image
                  borderRadius="lg"
                  src={img_thanksgivening}
                  alt="感恩節活動照片"
                  boxShadow="xl"
                />
              </Box>
            </Flex>

            <Flex flexWrap="wrap" flexDirection="row-reverse">
              <Center>
                <Box p="2" w="sm">
                  <Heading fontSize={"5xl"}>營隊講者</Heading>
                  <Text fontSize={"xl"}>
                    擔任兩次中友科系探索營的科系講者，負責介紹系所、準備歷程與讀書計畫等。
                  </Text>
                </Box>
              </Center>
              <Box p="2" width={{ base: "sm", md: "md", lg: "lg" }}>
                <Image
                  borderRadius="lg"
                  src={img_speech}
                  alt="演講狀況照片"
                  boxShadow="xl"
                />
              </Box>
            </Flex>
            <Flex flexWrap="wrap" justify="center">
              <Center>
                <Box p="2" maxWidth="sm">
                  <Heading>隊輔x表演</Heading>
                  <Text>
                    在兩次中友科系探索營中除了擔任講者外，同時也有擔任過隊輔，領導小隊員；
                    擔任MC、樂團吉他手等。
                  </Text>
                </Box>
              </Center>
              <Box p="2" width={{ base: "sm", md: "md", lg: "lg" }}>
                <Image
                  borderRadius="lg"
                  src={img_guitarist}
                  alt="彈吉他照片"
                  boxShadow="xl"
                />
              </Box>
              <Box p="2" width={{ base: "sm", md: "md", lg: "md" }}>
                <Image
                  borderRadius="lg"
                  src={img_mc_all}
                  alt="MC表演大合照1"
                  boxShadow="xl"
                />
              </Box>
              <Box p="2" width={{ base: "sm", md: "md", lg: "md" }}>
                <Image
                  borderRadius="lg"
                  src={img_mc_all_spotlight}
                  alt="MC表演大合照2"
                  boxShadow="xl"
                />
              </Box>
            </Flex>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
}

export default Activity;

// widget component
const Widget = (props) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Image
        src={props.image}
        alt={`Widget of ${props.name}`}
        roundedTop="lg"
      />
      <VStack h={"250px"} justify={"center"}>
        <Icon as={props.icon} w={"5"} h={"5"} />
        <Heading fontWeight={"light"} px={"5"}>
          {props.name}
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")} px={"10"}>
          {props.detail}
        </Text>
      </VStack>
    </Box>
  );
};

// tag component
const CreativityTags = () => {
  return (
    <Tag
      size={{ base: "sm", md: "md", lg: "lg" }}
      borderRadius="full"
      variant="solid"
      colorScheme="teal"
    >
      <TagLabel>Creativity</TagLabel>
      <TagRightIcon as={FiFeather} />
    </Tag>
  );
};

const LearnerTags = () => {
  return (
    <Tag
      size={{ base: "sm", md: "md", lg: "lg" }}
      borderRadius="full"
      variant="solid"
      colorScheme="teal"
    >
      <TagLabel>Fast-learner</TagLabel>
      <TagRightIcon as={FiBookOpen} />
    </Tag>
  );
};

const ConfidenceTags = () => {
  return (
    <Tag
      size={{ base: "sm", md: "md", lg: "lg" }}
      borderRadius="full"
      variant="solid"
      colorScheme="teal"
    >
      <TagLabel>Self-confidence</TagLabel>
      <TagRightIcon as={FiUserCheck} />
    </Tag>
  );
};
