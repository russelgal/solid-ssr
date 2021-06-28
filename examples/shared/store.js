import { createResource, createRoot } from "solid-js";

export const store = createRoot(() => {
  let [r] = createResource(() => fetch("https://dog.ceo/api/breeds/list/all").then(r => r.json));
  return { dog: r() };
});
