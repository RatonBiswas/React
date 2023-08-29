import useFetchPerson from "./useFetchPerson";
const url = "https://api.github.com/users/RatonBiswas";

const FetchData = () => {
  const { isLoading, isError, user } = useFetchPerson(url);

  if (isLoading) {
    return <h2>Loading.......</h2>;
  }
  if (isError) {
    return <h2>Fetching data error</h2>;
  }
  const { name, avatar_url, bio, location } = user;

  return (
    <div>
      <br />
      <h5>this is comes from custom hooks</h5>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{bio}</p>
      <h3>{location}</h3>
    </div>
  );
};

export default FetchData;
