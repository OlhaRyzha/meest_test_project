import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Authorization from "./app/routes/authorization/authorization.component";
import EmailActionRouter from "./app/routes/email-action-router/email-action-router.component";
import Services from "./app/routes/services/services.component";
import NotFound from "./app/routes/not-found/not-found.component";
import ServerError from "./app/routes/server-error/server-error.component";
import ComingSoon from "./app/routes/coming-soon/coming-soon.component";
import ServicesSubsection from "./app/features/services/services-subsection/services-subsection.component";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "auth", element: <Authorization /> },
      { path: "auth/action", element: <EmailActionRouter /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
      { path: "coming-soon", element: <ComingSoon /> },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            path: ":personaldata",
            element: <ServicesSubsection title={"Contact details"} />,
          },
          { path: "parcel/create", element: <Navigate replace to="/not-found" /> },
        ],
      },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
