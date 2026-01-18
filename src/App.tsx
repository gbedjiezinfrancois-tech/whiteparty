import { Router, useRouter } from './components/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import HomePage from './pages/HomePage';
import { PrestationsPage } from './pages/PrestationsPage';
import { BilletteriePage } from './pages/BilletteriePage';
import { GaleriePage } from './pages/GaleriePage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/prestations':
        return <PrestationsPage />;
      case '/billetterie':
        return <BilletteriePage />;
      case '/galerie':
        return <GaleriePage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
