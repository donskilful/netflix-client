import { ArrowBackOutlined } from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";
import "../../pages/watch/watch.scss";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">  
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        className="video"
        controls
        src={movie.video}
      />
    </div>
  );
};

export default Watch;
