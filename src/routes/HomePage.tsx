import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <>
      <div>
        <Link to="/coin">coinPage</Link>
      </div>
      <div>
        <Link to="/trello">TrelloApp </Link>
      </div>
      <div>
        <Link to="/motion">motion </Link>
      </div>
    </>
  );
}
