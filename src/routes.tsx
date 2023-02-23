import { FC } from "react";
import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";
import DashboardLayout from "./components/DashboardLayout";
import CharagingSatition from "./components/charaging-statition";
const Loadable = (Component: FC) => (props: any) =>
(
    <Suspense fallback={<div>loading..</div>}>
        <Component {...props} />
    </Suspense>
);
const Home = Loadable(lazy(() => import("./components/home/index")));
const Weather = Loadable(lazy(() => import("./components/weather/index")));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "charging-stations",
                element: <CharagingSatition/>
            },
            {
                path: "weather",
                element: <Weather />,
            },
        ],
    },
];

export { routes };