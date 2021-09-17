import Default from "containers/Default";

function EventDetail({ match }) {
  return (
    <Default>
      <div>{match.params.slug}</div>
    </Default>
  );
}

export default EventDetail;
