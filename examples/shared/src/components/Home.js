import { createSignal, onCleanup } from "solid-js";
import { store } from "../../store.js";
const Home = props => {
  const [s, set] = createSignal(0);
  const t = setInterval(() => set(s() + 1), 100);
  onCleanup(() => clearInterval(t));
  return (
    <Suspense fallback={"..."}>
      <pre onClick={e => console.log(`Home.js props: `, props)}>
        props.store{JSON.stringify(store, null, 2)}
      </pre>

      <h1>Welcome to this Simple Routing Example</h1>
      <p>Click the links in the Navigation above to load different routes.</p>
      <span>{s()}</span>
    </Suspense>
  );
};

export default Home;
