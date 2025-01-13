"use server";

import { cookies } from "next/headers";

export async function changeLang(lang: string) {
  const cookiesStore = cookies();
  cookiesStore.set("lang", lang);
}
