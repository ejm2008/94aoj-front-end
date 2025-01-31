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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useApp } from "../../context/appContext";

interface HomeProps {
  categ: Categories;
  hamburg: Hamburgers;
  appet: Appetizers;
  desser: Desserts;
  bever: Beverages;
}

function Home({ categ, hamburg, appet, desser, bever }: HomeProps) {
  const styles = useStyles();
  const { RemoveOrder, AddOrder, items } = useApp();
  const navigate = useNavigate();

  const [hamburgers, setHamburgers] = useState<HamburgersModel[]>([]);
  const [appetizers, setAppetizers] = useState<AppetizersModel[]>([]);
  const [desserts, setDesserts] = useState<DessertsModel[]>([]);
  const [beverages, setBeverages] = useState<BeveragesModel[]>([]);
  const [categories, setCategories] = useState<CategoriesModel[]>([]);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

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
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <Box sx={styles.homeContainer}>
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

      <Box sx={styles.heroSection}>
        <Typography variant="h2" sx={styles.title}>
          Bem-vindo à FIAP Hamburgueria
        </Typography>
        <Box component="img" src={imagem} />
        <Typography variant="body1" sx={styles.subtitle}>
          Os melhores hambúrgueres feitos com paixão e ingredientes frescos.
        </Typography>
      </Box>

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
                <Button 
                  sx={styles.addToCartButton} 
                  variant="contained"
                  onClick={() => {
                    const id = {
                      title: item.title,
                      value: item.values.combo
                    }
                    AddOrder(id)
                  }}
                  >
                  Adicionar ao Carrinho
                </Button>
                <Button 
                  sx={styles.addToCartButton} 
                  variant="contained"
                  disabled={items.filter(v => v.title === item.title).length <= 0}
                  onClick={() => {
                    const id = {
                      title: item.title,
                      value: item.values.combo
                    }
                    RemoveOrder(id)}
                  }
                  >
                  Remover do Carrinho
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

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
                <Button 
                  sx={styles.addToCartButton} 
                  variant="contained"
                  onClick={() => {
                    const id = {
                      title: item.title,
                      value: item.values.small!
                    }
                    AddOrder(id)}
                  }>
                  Adicionar ao Carrinho
                </Button>
                <Button 
                  sx={styles.addToCartButton} 
                  variant="contained"
                  disabled={items.filter(v => v.title === item.title).length <= 0}
                  onClick={() => {
                    const id = {
                      title: item.title,
                      value: item.values.small!
                    }
                    RemoveOrder(id)}
                  }
                  >
                  Remover do Carrinho
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

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
                  {item.value}
                </Typography>
                <Button 
                  sx={styles.addToCartButton} 
                  variant="contained"
                  onClick={() => {
                    const id = {
                      title: item.title,
                      value: item.value,
                    }
                    AddOrder(id)}
                  }>
                  Adicionar ao Carrinho
                </Button>
                <Button 
                  sx={styles.addToCartButton} 
                  variant="contained"
                  disabled={items.filter(v => v.title === item.title).length <= 0}
                  onClick={() => {
                    const id = {
                      title: item.title,
                      value: item.value,
                    }
                    RemoveOrder(id)}
                  }
                  >
                  Remover do Carrinho
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

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
                  {item.value}
                </Typography>
                <Button 
                  sx={styles.addToCartButton} 
                  variant="contained"
                  onClick={() => {
                    const id = {
                      title: item.title,
                      value: item.value,
                    }
                    AddOrder(id)}
                  }>
                  Adicionar ao Carrinho
                </Button>
                <Button 
                  sx={styles.addToCartButton} 
                  variant="contained"
                  disabled={items.filter(v => v.title === item.title).length <= 0}
                  onClick={() => {
                    const id = {
                      title: item.title,
                      value: item.value,
                    }
                    RemoveOrder(id)}
                  }
                  >
                  Remover do Carrinho
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box sx={{ textAlign: "center", margin: "40px 0" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff5722",
            color: "#fff",
            padding: "10px 30px",
            fontSize: "1.2rem",
            "&:hover": {
              backgroundColor: "#e64a19",
            },
          }}
          onClick={handleCartClick}
        >
          Ver Carrinho
        </Button>
      </Box>

      <Box sx={styles.footerSection}>
        <Typography variant="body2" sx={styles.footerText}>
          FIAP Hamburgueria © 2025 - Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;