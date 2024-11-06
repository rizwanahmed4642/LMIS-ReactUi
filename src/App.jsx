import "./assets/css/normalize.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/all.min.css";
import "./assets/fonts/flaticon.css";
import "./assets/css/animate.min.css";
import "./assets/css/jquery.dataTables.min.css";
import "./assets/css/fullcalendar.min.css";
import "./assets/fonts/flaticon.css";
import "./assets/css/style.css";
import "./assets/css/main.css";
import Toaster from "./ui/Toastr";
import AppRouting from "./App.routing";

function App() {
  return (
    <>
    <Toaster />

    <AppRouting />
    </>
  );
}

export default App;
