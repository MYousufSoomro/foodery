import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Comingsoon() {
  MySwal.fire({
    position: "bottom-start",
    type: "info",
    title: "COMING SOON...",
    showConfirmButton: false,
    timer: 1500
  });
}

export default Comingsoon;
