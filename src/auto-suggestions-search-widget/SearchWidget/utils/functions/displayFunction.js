import { positionStyle } from "../constants/widgetPosition";

export const onDisplaySearchWidget = (inputId, widgetId, position) => {
  const widget = document.getElementById(widgetId);
  widget.classList.add("active");

  function setWidgetPosition() {
    const target = document.getElementById(inputId);
    const x = target.offsetLeft;
    const y = target.offsetTop;
    const height = target.offsetHeight;
    const width = target.offsetWidth;

    if (position === positionStyle.Right) {
      const widgetWidth = document.querySelector(
        ".search-widget-content"
      ).offsetWidth;
      widget.style.left = x - (widgetWidth - width) + "px";
      widget.style.top = y + height + "px";
    } else if (position === positionStyle.Left) {
      widget.style.left = x + "px";
      widget.style.top = y + height + "px";
    }
  }
  setWidgetPosition();
  window.addEventListener("resize", setWidgetPosition);
};

export const onHideSearchWidget = (widgetId) => {
  const widget = document.getElementById(widgetId);
  widget.classList.remove("active");
};

export const detectScreenChange = () => {};
