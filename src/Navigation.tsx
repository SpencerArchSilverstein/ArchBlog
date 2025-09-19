import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleAlbums = () => {
    navigate("/albums");
  };
  const handleConcerts = () => {
    navigate("/concerts");
  };
  return (
    <nav>
      <button onClick={handleHome}>HOME</button>
      <button onClick={handleAlbums}>ALBUMS</button>
      <button onClick={handleConcerts}>CONCERTS</button>
    </nav>
  );
}
