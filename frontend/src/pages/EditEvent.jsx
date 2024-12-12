import { useRouteLoaderData } from "react-router";

import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return <EventForm event={event} />;
};

export default EditEventPage;
