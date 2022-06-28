import { Layout } from "./layout";
import { Welcome, Transactions } from "./sections";

const App = () => (
  <Layout>
    <Welcome />
    <Transactions />
  </Layout>
);

export default App;
