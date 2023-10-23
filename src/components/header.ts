import _, { Ref, button, div, useState } from "cradova";

/**
 * ? Buttons Ref
 */

export const header = new Ref(function () {
  const [DarkMode, setDarkMode] = useState<boolean>(false, this);
  // console.log(DarkMode);
  return div(
    _(
      ".button.primary.Outline",
      {
        onmount() {
          // send metrics
          if (DarkMode) {
            document.body.classList.add("dark");
          } else {
            document.body.classList.remove("dark");
          }
        },
        onclick() {
          setDarkMode(!DarkMode);
        },
        style: {
          width: "fit-content",
        },
      },
      DarkMode ? "Change to light mode" : "Change to dark mode"
    )
  );
});
