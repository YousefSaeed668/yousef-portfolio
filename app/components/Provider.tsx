"use client";

import { DirectionProvider } from "@radix-ui/react-direction";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <DirectionProvider dir="rtl" i18nIsDynamicList>
      {children}
    </DirectionProvider>
  );
}
