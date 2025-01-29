const useStyles = () => ({
  homeContainer: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#547AA5',
    color: '#fff',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  headerButton: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  heroSection: {
    textAlign: 'center',
    padding: '80px 24px',
    backgroundColor: '#547AA5',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#e0e0e0',
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
