import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  createStyles,
  Divider,
  Group,
  Header,
  HoverCard,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconMail,
  IconMap,
  IconPhoneCall,
} from "@tabler/icons";
import Logo from "./assets/Miracle_Foundation_Logo.png";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const _vijayaSriLinks = [
  {
    icon: IconMap,
    title: "Location On Google Maps",
    link: "https://www.google.com/maps/place/Vajira+Sri+Children%E2%80%99s+Development+Center/@6.8854107,79.8931708,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae25a3d85133a9b:0xf14d02f3391050fe!8m2!3d6.8854054!4d79.8953595",
  },
  {
    icon: IconPhoneCall,
    title: "Contact",
    description: "Phone: +94 (011) 285 6146 Fax: +94 (011) 276 8469",
  },
  {
    icon: IconMail,
    title: "Email",
    description: "info@vajirasri.com",
  },
];

const _jinanandachildrensLinks = [
  {
    icon: IconMap,
    title: "Location On Google Maps",
    link: "https://www.google.com/maps/place/Sri+Jinananda+Children%E2%80%99s+Home/@6.8795651,79.8576904,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae25bc704ef71d1:0x3dd16eac3799ceae!8m2!3d6.8795677!4d79.8598772",
  },
  {
    icon: IconPhoneCall,
    title: "Donation Details",
    description: `Account Number: 06 8000 468 998 001
    Account Name : Sri jinananda childrnes Home
    Seylan Bank, Wellawatta. Branch, 391, Galle Road, Wellawatte, Colombo, Sri Lanka. SWIFT CODE – SEYBLKLX
    `,
  },
  {
    icon: IconPhoneCall,
    title: "Donation Link",
    link: "http://www.jinanandachildrens.org/donation.html",
  },
];

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const createLinks = (links: Array<any>) =>
    links.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            {!!item?.link ? (
              <Anchor
                href={item.link}
                sx={{ color: "black" }}
                target="_blank"
                size="sm"
                weight={500}
                rel="noopener noreferrer"
              >
                {item.title}
              </Anchor>
            ) : (
              <Text size="sm" weight={500}>
                {item.title}
                <Text size="xs" color="dimmed">
                  {item.description}
                </Text>
              </Text>
            )}
          </div>
        </Group>
      </UnstyledButton>
    ));

  const vajiraSriLinks = createLinks(_vijayaSriLinks);
  const jinanandachildrensLinks = createLinks(_jinanandachildrensLinks);

  return (
    <Box mb={15} sx={{ position: "sticky", top: 0, zIndex: 999999 }}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Anchor href="/">
            <img
              src={Logo}
              style={{ maxHeight: 60 }}
              alt="Miracle Foundation logo"
            />
          </Anchor>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="http://vajirasri.com/donate/" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Vajira Sri Children's development centre
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text weight={500}>
                    Donate to Vajira Sri Children's development center
                  </Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <Text size="xs">
                  Vajira Sri Children’s Development Centre was established in
                  1983 to provide care and protection for 101 children who were
                  orphaned by the civil war in the Northern part of the island.
                  The children who were in the Morawawa refugee camp with the
                  traumatic experiences of the war were brought to the Lanka
                  Rama Temple, where Vajira Sri Children’s Development Centre
                  was housed. This programme was initiated at the request of the
                  Late Mr Wijesundara the Government Agent of Morawewa, the
                  brother of the Founder and Executive Director of Vajira Sri
                  Children’s Development Centre Ven. Dr. Hunupolagama Vajira Sri
                  Nayake Thero. Although the war is no more, we still have
                  children who are referred to the centre by the Department of
                  Probation and Child Care Services and the Judiciary for the
                  need of care and protection. At present we have 150 children
                  both girls and boys who are receiving our services. 35 staff
                  members provide services for the children. The children are
                  located in 3 buildings. One for children below the age of
                  five, the other building for girls between the ages of 6 to 12
                  and girls above 12 years. In the 3rd building boys below 12
                  years are in one section and those above 12 years in the
                  other. Since the inception of Vajira Sri Children’s
                  Development Centre over 4500 children have been re-unified
                  either with their families as well as being employed both in
                  Sri Lanka and
                </Text>

                <SimpleGrid cols={2} spacing={0}>
                  {vajiraSriLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Your donation can make a difference
                      </Text>
                    </div>
                    <a href="http://vajirasri.com/donate/">
                      <Button variant="filled">Donate Now</Button>
                    </a>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a
                  href="http://www.jinanandachildrens.org/donation.html"
                  className={classes.link}
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Jinananda Children's Development Centre
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text weight={500}>
                    Donate to Jinananda Children's Development Centre
                  </Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <Text size="xs">
                  Begun in 1986 The Jinananda Children Development Centre is an
                  initiative of Rev. Urumuththe Sugathananda Thero and is home
                  to over 70 boys from across the island. Each of these children
                  has a story of their own, with many of them coming from broken
                  and underprivileged homes. Whilst at the centre, these boys,
                  aged between 3 and 19 are in the care of the homes' Matron and
                  staff. The younger boys attend Montessori, and the rest are
                  educated at Arethusa College, a school nearby. The boys are
                  also involved in many extracurricular and religious
                  activities, ensuring a more wholesome upbringing. The centre
                  meets all their needs—from their meals to clothing, from
                  school supplies to tuition classes, from medical conditions to
                  leisure time activities. For these children, this centre is
                  home, and the staff, and their families.
                </Text>

                <SimpleGrid cols={2} spacing={0}>
                  {jinanandachildrensLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Your donation can make a difference
                      </Text>
                    </div>
                    <a href="http://www.jinanandachildrens.org/donation.html">
                      <Button variant="filled">Donate Now</Button>
                    </a>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>
    </Box>
  );
}
