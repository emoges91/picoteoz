// import type { Route } from "../../../../routes/+types/home";
import { Welcome } from "./componets/welcome";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

const Home = () => {
  return <Welcome />;
}

export default Home;
