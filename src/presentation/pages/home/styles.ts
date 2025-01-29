
const useStyles = () => ({
  homeContainer: {
    backgroundColor: '#f5f5f5', // Cor de fundo da página
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#2196F3', // Cor de fundo do cabeçalho
    color: '#fff',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  heroSection: {
    textAlign: 'center',
    padding: '50px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#666',
  },
  menuSection: {
    padding: '40px',
  },
  menuTitle: {
    marginBottom: '20px',
  },
  menuItem: {
    border: '1px solid #ddd',
    padding: '20px',
    textAlign: 'center',
  },
  footerSection: {
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
});

export default useStyles;
