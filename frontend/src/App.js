import { createBrowserRouter, RouterProvider } from "react-router";

import {
  fetchEventDetail,
  fetchEvents,
  removeEventId,
  sendEvent,
} from "./api/api.js";

import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root.jsx";
import EventsRootLayout from "./pages/EventsRoot.jsx";
import ErrorPage from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: fetchEvents },
          {
            path: ":eventId",
            id: "event-detail",
            loader: fetchEventDetail,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: removeEventId,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: sendEvent },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
