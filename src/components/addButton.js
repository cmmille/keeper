import "./addButton.css";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function AddButton(props) {
  return (
    <div className="right-container">
      <Zoom in={props.zoom}>
        <Fab className="btn">
          +
        </Fab>
      </Zoom>
    </div>
  );
}

export default AddButton;
