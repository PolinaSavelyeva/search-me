import { Container, Grid2, Stack, ThemeProvider, Typography } from "@mui/material";
import "./index.css"
import { theme } from "./Theme";
import SearchField from "./components/SearchField.tsx";
import CharacterCard from "./components/CharacterCard.tsx";

const characters: { name: string, date: string, status: "alive" | "unknown" | "dead", href: string }[] = [
  { name: "Rick", date: "01.01.1992", status: "alive", href: "https://rickandmortyapi.com/documentation/#rest" },
  { name: "Morty", date: "01.01.2100", status: "unknown", href: "https://rickandmortyapi.com/documentation/#rest" },
  { name: "Summer", date: "17.12.2025", status: "dead", href: "https://rickandmortyapi.com/documentation/#rest" },
  { name: "Beth", date: "15.03.2000", status: "alive", href: "https://rickandmortyapi.com/documentation/#rest" },
  { name: "Jerry", date: "13.02.2134", status: "alive", href: "https://rickandmortyapi.com/documentation/#rest" },
  { name: "Birdperson", date: "99.99.9999", status: "dead", href: "https://rickandmortyapi.com/documentation/#rest" },
  { name: "Mr. Meeseeks", date: "22.11.1345", status: "unknown", href: "https://rickandmortyapi.com/documentation/#rest" },
  { name: "Squanchy", date: "22.12.2133", status: "alive", href: "https://rickandmortyapi.com/documentation/#rest" },
  { name: "Meme", date: "01.01.2100", status: "alive", href: "https://rickandmortyapi.com/documentation/#rest" },
]

const [first, second, ...rest] = characters;

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters sx={{
        maxWidth: "1644px",
        paddingTop: "128px",
        px: { xs: "16px", sm: "24px", md: "128px" },
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <SearchField />
        <Stack width="100%" maxWidth="626px" direction="row" marginTop="13px" paddingLeft="39px" boxSizing="border-box">
          <Typography>Found characters:&nbsp;</Typography>
          <Typography>{characters.length}</Typography>
        </Stack>
        <Grid2 container marginTop="67px" marginBottom="20px" width="100%" direction="row" spacing="20px">
          {characters.length === 1 ? (
            <CharacterCard minHeight="262px" name={first.name} date={first.date} status={first.status} href={first.href} />
          ) : characters.length >= 2 ? (
            <>
              <CharacterCard minHeight="262px" name={first.name} date={first.date} status={first.status} href={first.href} />
              <CharacterCard minHeight="262px" name={second.name} date={second.date} status={second.status} href={second.href} />
            </>
          ) : null}
        </Grid2>
        <Grid2 container marginBottom="128px" width="100%" direction="row" spacing="20px" columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
          {rest.map((val, index) => (
            <Grid2 key={index} size={{ xs: 4, sm: 8, md: 6, lg: 4 }}>
              <CharacterCard minHeight="150px" name={val.name} date={val.date} status={val.status} href={val.href} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </ThemeProvider>
  );
}
