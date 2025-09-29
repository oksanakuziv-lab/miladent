import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './pages/AppLayout/AppLayout';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricesPage } from './pages/PricesPage';

export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="about"
            element={<AboutUsPage />}
          />
          <Route
            path="services"
            element={<ServicesPage />}
          />
          <Route
            path="prices"
            element={<PricesPage />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};
