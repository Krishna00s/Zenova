import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { ROUTES } from './constants/routes';

// Pages
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Domain Service Hubs
import WebDevelopmentPage from './pages/services/WebDevelopment';
import VideoEditingPage from './pages/services/VideoEditing';
import AdCreationPage from './pages/services/AdCreation';
import PaidPromotionsPage from './pages/services/PaidPromotions';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path={ROUTES.HOME} element={<LandingPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            
            {/* Service Domain Routes */}
            <Route path={ROUTES.SERVICES.WEB_DEV} element={<WebDevelopmentPage />} />
            <Route path={ROUTES.SERVICES.VIDEO_EDITING} element={<VideoEditingPage />} />
            <Route path={ROUTES.SERVICES.AD_CREATION} element={<AdCreationPage />} />
            <Route path={ROUTES.SERVICES.PAID_PROMOTIONS} element={<PaidPromotionsPage />} />
            
            {/* Work & Portfolio */}
            <Route path={ROUTES.WORK.ROOT} element={<WorkPage />} />
            
            {/* Contact & Auth */}
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            
            {/* 404 Catch */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
