import { Carousel } from "@mantine/carousel";
import {
  Anchor,
  Blockquote,
  Box,
  Button,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import "./App.css"
import { _jinanandachildrensLinks, _vijayaSriLinks, createLinks, useStyles } from "./navBar";
import img1 from "./assets/4.jpeg";
import img2 from "./assets/1-1.jpeg";
import img3 from "./assets/1920x714.jpeg";

function App() {
  const { classes, theme } = useStyles();

  const vajiraSriLinks = createLinks(_vijayaSriLinks, theme, classes);
  const jinanandachildrensLinks = createLinks(_jinanandachildrensLinks, theme, classes);

  return (
    <>
    <Box mx={10} mb={5}>
      <main>
        <Carousel slideGap="md" align="start" mb={20}>
          <Carousel.Slide>
            <img
              src={img1}
              alt="an image of children"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src={img2}
              alt="an image of children"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            
            <img
              src={img3}
              alt="an image of children"
            />
          </Carousel.Slide>
        </Carousel>
        <SimpleGrid cols={2} mb={20}>
          <Blockquote cite="– Mahatma Gandhi">
            If we are to have real peace in the world, we will have to begin
            with the children.
          </Blockquote>
          <Blockquote cite="– Frank Warren">
            It's the children the world almost breaks who grow up to save it.
          </Blockquote>
          <Blockquote cite="– Nelson Mandela">
            There can be no keener revelation of a society's soul than the way
            in which it treats its children.
          </Blockquote>
          <Blockquote cite="– Robert Brault">
            The world is as many times new as there are children in our lives.
          </Blockquote>
        </SimpleGrid>
        <div style={{ display: "flex", gap: "1rem" }}>
          <img
            src="https://media.discordapp.net/attachments/1066589346557349978/1066614578621976686/seruds-np-1.png"
            alt="children eating"
          />
          <div style={{ marginTop: 80 }}>
            <Title order={2}>Our Vision: A Sri Lanka without Hunger</Title>
            <p>
              Miracle Foundation is one of the most active charities in Sri
              Lanka working to end hunger. We partner with food banks,
              orphanages to end hunger.
            </p>
          </div>
        </div>

        <Box mb={50} mt={50}>
          <Title mb={10}>Places to donate to</Title>
          <Box ml={10}>
            <Text size="xl" fw={600}>
              Sri Jinananda Children’s Home
            </Text>
            Sri Jinanda-Begun in 1986 The Jinananda Children Development Centre
            is an initiative of Rev. Urumuththe Sugathananda Thero and is home
            to over 70 boys from across the island. Each of these children has a
            story of their own, with many of them coming from broken and
            underprivileged homes. Whilst at the centre, these boys, aged
            between 3 and 19 are in the care of the homes' Matron and staff. The
            younger boys attend Montessori, and the rest are educated at
            Arethusa College, a school nearby. The boys are also involved in
            many extracurricular and religious activities, ensuring a more
            wholesome upbringing. The centre meets all their needs—from their
            meals to clothing, from school supplies to tuition classes, from
            medical conditions to leisure time activities. For these children,
            this centre is home, and the staff, and their families.{" "}
            <SimpleGrid cols={2} spacing={0}>
                  {jinanandachildrensLinks}
            </SimpleGrid>

            <Text size="xl" fw={600} mt={20}>
              Vajira Sri Children's development centre
            </Text>
            Vajira Sri Children’s Development Centre was established in 1983 to
            provide care and protection for 101 children who were orphaned by
            the civil war in the Northern part of the island. The children who
            were in the Morawawa refugee camp with the traumatic experiences of
            the war were brought to the Lanka Rama Temple, where Vajira Sri
            Children’s Development Centre was housed. This programme was
            initiated at the request of the Late Mr Wijesundara the Government
            Agent of Morawewa, the brother of the Founder and Executive Director
            of Vajira Sri Children’s Development Centre Ven. Dr. Hunupolagama
            Vajira Sri Nayake Thero. Although the war is no more, we still have
            children who are referred to the centre by the Department of
            Probation and Child Care Services and the Judiciary for the need of
            care and protection. At present we have 150 children both girls and
            boys who are receiving our services. 35 staff members provide
            services for the children. The children are located in 3 buildings.
            One for children below the age of five, the other building for girls
            between the ages of 6 to 12 and girls above 12 years. In the 3rd
            building boys below 12 years are in one section and those above 12
            years in the other. Since the inception of Vajira Sri Children’s
            Development Centre over 4500 children have been re-unified either
            with their families as well as being employed both in Sri Lanka
            <SimpleGrid cols={2} spacing={0}>
                  {vajiraSriLinks}
            </SimpleGrid>
          </Box>
        </Box>
      </main>
    </Box>

    <SimpleGrid cols={4} sx={{backgroundImage: 'url(https://www.feedingamerica.org/themes/custom/ts_feeding_america/images/background-images/foodbank/oranges_foodbank_lg.jpg)'}}>
      <Anchor href="http://vajirasri.com/donate/" className="no-hover-link">
          <Box
            display="flex"
            py={30}
            my={35}
            ml={10}
            bg="white"
            px={25}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid",
              borderColor: "black"
            }}
          >
            <img src="https://feedingamerica.org/assets/images/icons/Give-icon-1-green.png" />
              <Title order={4} mt={6}>Give Today</Title>
            <Text size="xs">
              Make a secure donation via credit card or PayPal.
            </Text>
              <Button mt={8}>Donate Now</Button>
          </Box>
        </Anchor>
        
          <Anchor href="http://www.jinanandachildrens.org/donation.html" className="no-hover-link">
          <Box
            display="flex"
            py={30}
            my={35}
            bg="white"
            px={25}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid",
              borderColor: "black"
            }}
          >
            <img src="https://www.feedingamerica.org/assets/images/icons/Calendar-icon-green.png" />
              <Title order={4} mt={6}>Give Monthly</Title>
            <Text size="xs">
              Provide meals year-round to your neighbors.
            </Text>
              <Button mt={8}>Donate Monthly</Button>
          </Box>
          </Anchor>
          <Anchor href="#" className="no-hover-link">
          <Box
            display="flex"
            py={30}
            my={35}
            bg="white"
            px={25}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid",
              borderColor: "black"
            }}
            >
            <img src="https://www.feedingamerica.org/assets/images/icons/Plate-icon-green.png" />
              <Title order={4} mt={6}>Fundraise</Title>
            <Text size="xs">
            Start a fundraiser or support an existing campaign.
            </Text>
              <Button mt={8}>Learn More</Button>
          </Box>
              </Anchor>
          <Anchor href="#" className="no-hover-link">
          <Box
            display="flex"
            py={30}
            my={35}
            mr={10}
            bg="white"
            px={25}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid",
              borderColor: "black"
            }}
            >
            <img src="https://www.feedingamerica.org/assets/images/icons/Join-icon-green.png" />
              <Title order={4} mt={6}>Volunteer</Title>
            <Text size="xs">
            Give your time and serve your community.
            </Text>
              <Button mt={8}>Pledge to Volunteer</Button>
          </Box>
              </Anchor>
        </SimpleGrid>

    </>
  );
}

export default App;