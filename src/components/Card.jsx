function Card({
  id,
  name,
  username,
  email,
  
  phone,
  website,
  
}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      
      <p>Phone: {phone}</p>
    <p> wedsite:{website} </p>
    </div>
  );
}

export default Card;
