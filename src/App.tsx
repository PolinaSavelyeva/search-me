import { Container, Grid2, Stack, TextField, ThemeProvider, Typography } from "@mui/material";
import "./index.css"
import { theme } from "./Theme";
import CharacterCard from "./components/CharacterCard.tsx";
import React, { useState } from "react";
import axios from "axios";
import { ShadowBox } from "./components/ShadowBox.tsx";

type Character = { name: string, created: string, status: "Alive" | "Dead" | "unknown", url: string };

export default function App() {
  let name = '';
  const [characters, setCharacters] = useState<Character[]>([]);
  const [canShow, setCanShow] = useState(false);

  async function fetchCharacters(desiredName: string, page?: number): Promise<Character[]> {
    try {
      const { data } = await axios.get("https://rickandmortyapi.com/api/character", { params: { name: desiredName, page: page } });
      const characters = data.results;
      const remainingCharacters = await Promise.all(Array.from({ length: data.info.pages }, (_, i) => i + 1).slice(1).map((page) =>
        axios.get('https://rickandmortyapi.com/api/character', { params: { name: desiredName, page: page } }).then((res) => res.data.results)));
      return remainingCharacters.flat().concat(characters)
    } catch {
      return [];
    }
  }

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newName = event.target.value;
    name = newName;
    if (name.length >= 4) {
      setCanShow(true)
      const characters = await fetchCharacters(name);
      if (name == newName)
        console.log(characters);
      setCharacters(characters);
    } else {
      if (canShow) {
        setCharacters([])
        setCanShow(false)
      }
    }
  }

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
        <ShadowBox
          sx={{ width: "100%", maxWidth: "626px", }}
          boxSizing="border-box"
          padding="19px 25px 19px 25px"
        >
          <TextField
            onChange={handleChange}
            variant="standard"
            placeholder="Search characters..."
            autoFocus
            fullWidth
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
            sx={{
              '& input::placeholder': { ...theme.typography.h2, opacity: "100%" },
              '.MuiInputBase-input': { ...theme.typography.h2, color: 'transparent', textShadow: '0 0 0 #656EC2', padding: 0 },
            }} />
        </ShadowBox>
        <Stack width="100%" maxWidth="626px" direction="row" marginTop="13px" paddingLeft="39px" boxSizing="border-box">
          {canShow ? (
            <>
              <Typography>Found characters:&nbsp;</Typography>
              <Typography>{characters.length}</Typography>
            </>
          ) : null}
        </Stack>
        <Grid2 container marginTop="67px" marginBottom="20px" width="100%" direction="row" spacing="20px">
          {characters.length === 1 ? (
            <CharacterCard minHeight="262px" name={characters[0].name} date={characters[0].created} status={characters[0].status} href={characters[0].url} />
          ) : characters.length >= 2 ? (
            <>
              <CharacterCard minHeight="262px" name={characters[0].name} date={characters[0].created} status={characters[0].status} href={characters[0].url} />
              <CharacterCard minHeight="262px" name={characters[1].name} date={characters[1].created} status={characters[1].status} href={characters[1].url} />
            </>
          ) : null}
        </Grid2>
        <Grid2 container marginBottom="128px" width="100%" direction="row" spacing="20px" columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
          {characters.slice(2).map((val, index) => (
            <Grid2 key={index} size={{ xs: 4, sm: 8, md: 6, lg: 4 }}>
              <CharacterCard minHeight="150px" name={val.name} date={val.created} status={val.status} href={val.url} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </ThemeProvider>
  );
}
