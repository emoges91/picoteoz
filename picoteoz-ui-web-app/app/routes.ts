import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("views/home/home.tsx"),
    route("products", "views/products/products.tsx"),

] satisfies RouteConfig;
