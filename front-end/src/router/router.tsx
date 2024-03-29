import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import BaseLayout from "../layouts/BaseLayout";
import ProposalsPage from "../pages/proposalPage/ProposalsPage";
import ValidatorsPage from "../pages/validatorPage/ValidatorsPage";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/proposals", element: <ProposalsPage /> },
      { path: "/validators", element: <ValidatorsPage /> },
    ],
  },
]);
