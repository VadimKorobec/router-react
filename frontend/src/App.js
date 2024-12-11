// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import NotFoundPage from "./pages/NotFound.jsx";
import RootLayout from "./pages/Root.jsx";
import EventsRootLayout from "./pages/EventsRoot.jsx";

const fetchEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  }

  const resData = await response.json();
  return resData.events;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: fetchEvents },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
