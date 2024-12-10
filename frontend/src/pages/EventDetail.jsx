import { useParams } from "react-router";

const EventDetailPage = () => {
  const {eventId} = useParams();
  

  return (
    <>
      <h1>Event Detail Page</h1>
          <p>Event Id: { eventId}</p>
    </>
  );
};

export default EventDetailPage;
