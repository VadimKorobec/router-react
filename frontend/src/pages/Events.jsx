import { Link } from "react-router";

const DUMMY_EVENTS = [
  { id: "e1", title: "First event" },
  { id: "e2", title: "Second event" },
  { id: "e3", title: "Third event" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
