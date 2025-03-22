import {
  Outlet,
} from "react-router";
import MainLayout from "./layout/main-layout";
import "./app.css";


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout children={children} />
  );
}

export default function App() {
  return <Outlet />;
}

