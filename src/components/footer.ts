import _, { br, p } from "cradova";

/**
 * ? Buttons Ref
 */

export const footer = function (params: {}) {
  return _(
    br,
    p(
      " This Button component sample aims to follow Codex buttons design system. available at https://codex.so/button "
    ),
    br,
    p("Written in Cradova and CSS by Friday Candour"),
    br,
    br
  );
};
