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

function App() {
  return (
    <>
    <Box mx={10} mb={5}>
      <main>
        <Carousel slideGap="md" align="start" mb={20}>
          <Carousel.Slide>
            {" "}
            <img
              src="http://www.jinanandachildrens.org/images/temp/4.jpg"
              alt=""
            />{" "}
          </Carousel.Slide>
          <Carousel.Slide>
            {" "}
            <img
              src="http://jinanandachildrens.org/images/temp/1-1.jpg"
              alt=""
            />{" "}
          </Carousel.Slide>
          <Carousel.Slide>
            {" "}
            <img
              src="http://www.jinanandachildrens.org/images/temp/1920x714.jpg"
              alt=""
            />{" "}
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
            <p>
              <Anchor href="https://www.google.com/maps/place/Sri+Jinananda+Children%E2%80%99s+Home/@6.8795651,79.8576904,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae25bc704ef71d1:0x3dd16eac3799ceae!8m2!3d6.8795677!4d79.8598772">
                Google Maps Link
              </Anchor>
            </p>
            <p>Account Number: 06 8000 468 998 001</p>
            <p>
              Account Name : Sri jinananda childrnes Home Seylan Bank,
              Wellawatta. Branch, 391, Galle Road, Wellawatte, Colombo, Sri
              Lanka.
            </p>
            SWIFT CODE –{" "}
            <Anchor href="http://www.jinanandachildrens.org/donation.html">
              SEYBLKLX Donate link
            </Anchor>
            <Text size="xl" fw={600} mt={15}>
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
            <p>
              <Anchor href="https://www.google.com/maps/place/Vajira+Sri+Children%E2%80%99s+Development+Center/@6.8854107,79.8931708,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae25a3d85133a9b:0xf14d02f3391050fe!8m2!3d6.8854054!4d79.8953595">
                Google Maps Link
              </Anchor>
            </p>
            <p>Phone: +94 (011) 285 6146 Fax: +94 (011) 276 8469</p>
            <p>E-mail: info@vajirasri.com</p>
            <p>
              <Anchor href="http://vajirasri.com/donate/">Donation link</Anchor>
            </p>
          </Box>
        </Box>
      </main>
    </Box>

    <SimpleGrid cols={4} sx={{backgroundImage: 'url(https://www.feedingamerica.org/themes/custom/ts_feeding_america/images/background-images/foodbank/oranges_foodbank_lg.jpg)'}}>
      <Anchor href="#" className="no-hover-link">
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