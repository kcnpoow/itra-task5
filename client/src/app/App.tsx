import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/base.css";
import { Home } from "@/pages/home";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient();

export const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const locale = localStorage.getItem("locale") ?? "en";

    i18n.changeLanguage(locale);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};
