import nextIcon from "./images/next.png";
import previousIcon from "./images/previous.png";

function SliderBtn(props) {
  function icon() {
    if (props.direction === "next") {
      return nextIcon;
    } else {
      return previousIcon;
    }
  }
  /*document.getElementById("btn").clicked===true*/
  // function moveSliderF() {
  //   if (props.direction === "next") {
  //     return btn-slide-next;
  //   } else {
  //     return btn-slide-prev;
  //   }
  // }

  return (
    <div>
      <button
        className={
          props.direction === "next" ? "btn-slide next" : "btn-slide prev"
        }
        id="btn"
        onClick={props.moveSlide}
      >
        <img src={icon()} alt="icon" />
      </button>
    </div>
  );
}
export default SliderBtn;
