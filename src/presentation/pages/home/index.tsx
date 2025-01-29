import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Collapse, List, ListItem, IconButton } from "@mui/material";
import useStyles from "./styles";
import {
  Appetizers,
  Beverages,
  Categories,
  Desserts,
  Hamburgers,
} from "../../../domain/usecases";
import {
  AppetizersModel,
  BeveragesModel,
  CategoriesModel,
  DessertsModel,
  HamburgersModel,
} from "../../../domain";
import imagem from "../../assets/imagem-login.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Ícone do carrinho
import { useNavigate } from "react-router-dom"; // Para navegação
// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HomeProps {
  categ: Categories;
  hamburg: Hamburgers;
  appet: Appetizers;
  desser: Desserts;
  bever: Beverages;
}

function Home({ categ, hamburg, appet, desser, bever }: HomeProps) {
  const styles = useStyles();
  const navigate = useNavigate(); // Hook para navegação

  const [hamburgers, setHamburgers] = useState<HamburgersModel[]>([]);
  const [appetizers, setAppetizers] = useState<AppetizersModel[]>([]);
  const [desserts, setDesserts] = useState<DessertsModel[]>([]);
  const [beverages, setBeverages] = useState<BeveragesModel[]>([]);
  const [categories, setCategories] = useState<CategoriesModel[]>([]);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Estado para controlar a visibilidade das categorias

  useEffect(() => {
    const getMenu = async () => {
      const cat = await categ.category();
      setCategories(cat);
      const burg = await hamburg.hamburger();
      setHamburgers(burg);
      const appe = await appet.appetizer();
      setAppetizers(appe);
      const dess = await desser.dessert();
      setDesserts(dess);
      const bev = await bever.beverage();
      setBeverages(bev);
    };
    getMenu();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsCategoriesOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen); // Alterna a visibilidade da lista de categorias
  };

  const handleCartClick = () => {
    navigate("/cart"); // Navega para a página do carrinho
  };

  return (
    <Box sx={styles.homeContainer}>
      {/* Header com botão para abrir/fechar categorias e ícone do carrinho */}
      <Box sx={styles.header}>
        <Box sx={styles.headerLeft}>
          <Button sx={styles.headerButton} onClick={toggleCategories}>
            Categorias
          </Button>
          <Collapse in={isCategoriesOpen}>
            <List sx={styles.categoryList}>
              {categories.map((category) => (
                <ListItem
                  key={category.id}
                  sx={styles.categoryItem}
                  onClick={() => scrollToSection(category.id)}
                >
                  {category.text}
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
        <IconButton sx={styles.cartIcon} onClick={handleCartClick}>
          <ShoppingCartIcon />
        </IconButton>
      </Box>

      {/* Hero Section */}
      <Box sx={styles.heroSection}>
        <Typography variant="h2" sx={styles.title}>
          Bem-vindo à FIAP Hamburgueria
        </Typography>
        <Box component="img" src={imagem} />
        <Typography variant="body1" sx={styles.subtitle}>
          Os melhores hambúrgueres feitos com paixão e ingredientes frescos.
        </Typography>
      </Box>

      {/* Menu Sections */}
      {/* Hambúrgueres */}
      <Box id="hamburgers" sx={styles.menuSection}>
        <Typography variant="h4" sx={styles.menuTitle}>
          Hambúrgueres
        </Typography>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {hamburgers.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={styles.menuItem}>
                {item.image && (
                  <img
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.title}
                    style={{
                      ...styles.menuImage,
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <Typography variant="h6" sx={styles.itemTitle}>
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography sx={styles.itemDescription}>
                    {item.description}
                  </Typography>
                )}
                <Typography sx={styles.itemPrice}>
                  R${" "}
                  {typeof item.values === "object"
                    ? item.values.single ?? 0
                    : item.values ?? 0}
                </Typography>
                <Button sx={styles.addToCartButton} variant="contained">
                  Adicionar ao Carrinho
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Entradas */}
      <Box id="appetizers" sx={styles.menuSection}>
        <Typography variant="h4" sx={styles.menuTitle}>
          Entradas
        </Typography>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {appetizers.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={styles.menuItem}>
                {item.image && (
                  <img
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.title}
                    style={{
                      ...styles.menuImage,
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <Typography variant="h6" sx={styles.itemTitle}>
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography sx={styles.itemDescription}>
                    {item.description}
                  </Typography>
                )}
                <Typography sx={styles.itemPrice}>
                  R${" "}
                  {typeof item.values === "object"
                    ? item.values.small ?? item.values.large ?? 0
                    : item.values ?? 0}
                </Typography>
                <Button sx={styles.addToCartButton} variant="contained">
                  Adicionar ao Carrinho
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Sobremesas */}
      <Box id="desserts" sx={styles.menuSection}>
        <Typography variant="h4" sx={styles.menuTitle}>
          Sobremesas
        </Typography>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {desserts.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={styles.menuItem}>
                {item.image && (
                  <img
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.title}
                    style={{
                      ...styles.menuImage,
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <Typography variant="h6" sx={styles.itemTitle}>
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography sx={styles.itemDescription}>
                    {item.description}
                  </Typography>
                )}
                <Typography sx={styles.itemPrice}>
                  R${" "}
                  {typeof item.values === "object"
                    ? item.values.small ?? item.values.large ?? 0
                    : item.values ?? 0}
                </Typography>
                <Button sx={styles.addToCartButton} variant="contained">
                  Adicionar ao Carrinho
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Bebidas */}
      <Box id="beverages" sx={styles.menuSection}>
        <Typography variant="h4" sx={styles.menuTitle}>
          Bebidas
        </Typography>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {beverages.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={styles.menuItem}>
                {item.image && (
                  <img
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.title}
                    style={{
                      ...styles.menuImage,
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <Typography variant="h6" sx={styles.itemTitle}>
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography sx={styles.itemDescription}>
                    {item.description}
                  </Typography>
                )}
                <Typography sx={styles.itemPrice}>
                  R${" "}
                  {typeof item.values === "object"
                    ? item.values.small ?? item.values.large ?? 0
                    : item.values ?? 0}
                </Typography>
                <Button sx={styles.addToCartButton} variant="contained">
                  Adicionar ao Carrinho
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Footer Section */}
      <Box sx={styles.footerSection}>
        <Typography variant="body2" sx={styles.footerText}>
          FIAP Hamburgueria © 2025 - Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
