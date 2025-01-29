import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import useStyles from "./styles";
import axios from "axios";

function Home() {
  const styles = useStyles();
  interface MenuItem {
    id: number;
    title: string;
    description?: string;
    image?: string;
    values?: {
      small?: number;
      large?: number;
    };
    value?: number;
  }

  const [hamburgers, setHamburgers] = useState<MenuItem[]>([]);
  const [appetizers, setAppetizers] = useState<MenuItem[]>([]);
  const [desserts, setDesserts] = useState<MenuItem[]>([]);
  const [beverages, setBeverages] = useState<MenuItem[]>([]);

  useEffect(() => {
    axios.get("https://burgerlivery-api.vercel.app/hamburgers").then((response) => setHamburgers(response.data));
    axios.get("https://burgerlivery-api.vercel.app/appetizers").then((response) => setAppetizers(response.data));
    axios.get("https://burgerlivery-api.vercel.app/desserts").then((response) => setDesserts(response.data));
    axios.get("https://burgerlivery-api.vercel.app/beverages").then((response) => setBeverages(response.data));
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={styles.homeContainer}> {/* Apply styles to the main container */}
      {/* Header com categorias */}
      <Box sx={styles.header}>
        <Button onClick={() => scrollToSection("hamburgers")}>Hambúrgueres</Button>
        <Button onClick={() => scrollToSection("appetizers")}>Entradas</Button>
        <Button onClick={() => scrollToSection("desserts")}>Sobremesas</Button>
        <Button onClick={() => scrollToSection("beverages")}>Bebidas</Button>
      </Box>

      {/* Hero Section */}
      <Box sx={styles.heroSection}>
        <Typography variant="h2" sx={styles.title}>
          Bem-vindo à FIAP Hamburgueria
        </Typography>
        <Typography variant="body1" sx={styles.subtitle}>
          Os melhores hambúrgueres feitos com paixão e ingredientes frescos.
        </Typography>
      </Box>

      {/* Menu Sections */}
      <Box sx={styles.menuSection}>
        <Typography variant="h4" sx={styles.menuTitle}>
          Hambúrgueres
        </Typography>
        <Grid container spacing={2}> {/* Use Grid for responsive layout */}
          {hamburgers.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Box sx={styles.menuItem}> {/* Apply styles to each menu item */}
                {item.image && (
                  <img
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.title}
                    style={{ width: "30%" }}
                  />
                )}
                <Typography variant="h6">{item.title}</Typography>
                {item.description && <Typography>{item.description}</Typography>}
                <Typography>R$ {item.values?.small ?? item.value ?? 0}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box id="appetizers" sx={styles.menuSection}>
        <Typography variant="h4" sx={styles.menuTitle}>
          Entradas
        </Typography>
        <Grid container spacing={2}> {/* Use Grid for responsive layout */}
          {appetizers.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Box sx={styles.menuItem}> {/* Apply styles to each menu item */}
                {item.image && (
                  <img
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.title}
                    style={{ width: "30%" }}
                  />
                )}
                <Typography variant="h6">{item.title}</Typography>
                {item.description && <Typography>{item.description}</Typography>}
                <Typography>R$ {item.values?.small ?? item.values?.large ?? 0}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box id="desserts" sx={styles.menuSection}>
        <Typography variant="h4" sx={styles.menuTitle}>
          Sobremesas
        </Typography>
        <Grid container spacing={2}> {/* Use Grid for responsive layout */}
          {desserts.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Box sx={styles.menuItem}> {/* Apply styles to each menu item */}
                {item.image && (
                  <img
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.title}
                    style={{ width: "30%" }}
                  />
                )}
                <Typography variant="h6">{item.title}</Typography>
                {item.description && <Typography>{item.description}</Typography>}
                <Typography>R$ {item.value ?? 0}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box id="beverages" sx={styles.menuSection}>
        <Typography variant="h4" sx={styles.menuTitle}>
          Bebidas
        </Typography>
        <Grid container spacing={2}> {/* Use Grid for responsive layout */}
          {beverages.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Box sx={styles.menuItem}> {/* Apply styles to each menu item */}
                {item.image && (
                  <img
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.title}
                    style={{ width: "30%" }}
                  />
                )}
                <Typography variant="h6">{item.title}</Typography>
                {item.description && <Typography>{item.description}</Typography>}
                <Typography>R$ {item.value ?? 0}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box sx={styles.footerSection}>
        <Typography variant="body2">
          FIAP Hamburgueria © 2025 - Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
