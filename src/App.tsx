import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProcessPage } from "@/pages/ProcessPage";
import { ResourcesPage } from "@/pages/ResourcesPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { I18nProvider, LocaleRedirect, isLocale, detectLocale } from "@/i18n";

function LocaleGate() {
  const { lang } = useParams();
  if (!isLocale(lang)) {
    return <Navigate to={`/${detectLocale()}`} replace />;
  }

  return (
    <I18nProvider>
      <SiteLayout />
    </I18nProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocaleRedirect />} />
        <Route path="/:lang" element={<LocaleGate />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
