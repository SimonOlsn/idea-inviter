import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Footer } from './components/layout/Footer';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { DeviceVisualization } from './pages/dashboard/DeviceVisualization';
import { Analytics } from './pages/dashboard/Analytics';
import { Settings } from './pages/dashboard/Settings';
import { CameraFeeds } from './pages/dashboard/CameraFeeds';
import { useAuthStore } from './store/authStore';
import { ProductsPage } from './pages/ProductsPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <Footer />
          </div>
        } />
        
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<DashboardHome />} />
          <Route path="devices" element={<DeviceVisualization />} />
          <Route path="cameras" element={<CameraFeeds />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;