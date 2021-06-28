import { createResource, createRoot } from "solid-js";
import fetch from "node-fetch";

globalThis.fetch || (globalThis.fetch = fetch);
export const store = createRoot(() => {
  let [r] = createResource(() => fetch("https://dog.ceo/api/breeds/list/all").then(r => r.json));
  return { dog: r() };
});
