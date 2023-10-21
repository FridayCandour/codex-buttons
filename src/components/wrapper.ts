import _, { Ref, div, p } from "cradova";
import { IconLink, IconLoader, IconPlus, IconSearch } from "@codexteam/icons";
import { Button } from "./button";

/**
 * ? Buttons Ref
 */

export const Wrapper = new Ref(function (params: {}) {
  return div(
    p("Types"),
    div(
      {
        style: {
          display: "flex",
        },
      },
      Button({ Type: "Solid" }),
      Button({ Type: "Outline" }),
      Button({ Type: "Soft" }),
      Button({ Type: "Ghost" })
    ),
    p("Sizes"),
    div(
      { display: "flex" },
      Button({ Size: "Small" }),
      Button({ Size: "Medium" }),
      Button({ Size: "Large" })
    ),
    p("Style"),
    div(
      { display: "flex" },
      Button({ Style: "Primary" }),
      Button({ Style: "Secondary" }),
      Button({ Style: "Danger" })
    ),
    p("State"),
    div(
      { display: "flex" },
      Button({ State: "Default" }),
      Button({ State: "Hover" }),
      Button({ State: "Disabled" })
    ),
    p("Icon Type"),
    div(
      { display: "flex", flexWrap: "wrap" },
      Button({ Icon_Type: "None", Icons: [IconPlus] }),
      Button({ Icon_Type: "Leading", Icons: [IconPlus] }),
      Button({ Icon_Type: "Trailing", Icons: [IconLink] }),
      Button({ Icon_Type: "LeadingTrailing", Icons: [IconPlus, IconSearch] }),
      Button({ Icon_Type: "Standalone", Icons: [IconPlus] }),
      Button({
        Icon_Type: "Trailing",
        text: "Hold tight while we check",
        Icons: [IconLoader],
      })
    )
  );
});
