"use client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useThemeStore } from "@/store/useThemeStore";
import React, { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  if (!mounted) return <LoadingSpinner></LoadingSpinner>;
  return <>{children}</>;
};

export default Provider;
