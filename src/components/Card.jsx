function Card({
  id,
  name,
  username,
  email,
  age,
  gender,
  department,
  country,
  phone,
  active,
  newsletter,
  skills,
}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Department: {department}</p>
      <p>Country: {country}</p>
      <p>Phone: {phone}</p>
      <p>Active: {active ? "Yes" : "No"}</p>
      <p>Newsletter: {newsletter ? "Subscribed" : "Not Subscribed"}</p>
      <p>Skills: {skills.join(", ")}</p>
    </div>
  );
}

export default Card;
