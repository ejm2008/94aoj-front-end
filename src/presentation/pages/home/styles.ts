const useStyles = () => ({
  homeContainer: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#547AA5',
    color: '#fff',
    borderRadius: '0 0 16px 16px',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heroSection: {
    textAlign: 'center',
    padding: '80px 24px',
    backgroundColor: '#fff', // Fundo branco
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#000', // Título preto
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#000', // Subtítulo preto
  },
  logoImage: {
    width: '300px', // Tamanho da logo
    height: '300px',
    borderRadius: '50%', // Círculo ao redor da logo
    border: '6px solid #547AA5', // Borda azul
    padding: '8px', // Espaçamento interno
    backgroundColor: '#fff', // Fundo branco para o círculo
    margin: '0 auto 16px', // Centralizar e margem inferior
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
  },
  headerButton: {
    border: '1px solid #fff',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  categoryList: {
    backgroundColor: '#547AA5',
    borderRadius: '4px',
    padding: '8px 0',
  },
  categoryItem: {
    color: '#fff',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  cartIcon: {
    color: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  addToCartButton: {
    marginTop: '16px',
    backgroundColor: '#547AA5',
    '&:hover': {
      backgroundColor: '#3a5a7a',
    },
  },
  menuSection: {
    padding: '64px 24px',
    backgroundColor: '#ffffff',
  },
  menuTitle: {
    marginBottom: '32px',
    color: '#547AA5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuItem: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '24px',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  },
  menuImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  itemTitle: {
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  itemDescription: {
    color: '#666666',
    marginBottom: '16px',
  },
  itemPrice: {
    color: '#547AA5',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  footerSection: {
    backgroundColor: '#547AA5',
    color: '#fff',
    padding: '24px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '14px',
    color: '#e0e0e0',
  },
});

export default useStyles;
