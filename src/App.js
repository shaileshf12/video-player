import "./styles.css";
import Playlist from "./modules/Playlist";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  console.log(Playlist);
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Playlist />
      </DndProvider>
    </div>
  );
}
