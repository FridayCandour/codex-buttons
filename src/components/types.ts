export type ButtonProps =
  | {
      Size?: "Small" | "Medium" | "Large";
      State?: "Default" | "Hover" | "Disabled";
      Style?: "Primary" | "Secondary" | "Danger";
      Type?: "Solid" | "Outline" | "Soft" | "Ghost";
      Icon_Type?:
        | "None"
        | "Leading"
        | "Trailing"
        | "LeadingTrailing"
        | "Standalone";
      // icons inputs
      Icons?: string[];
      "leading-icon"?: string;
      "trailing-icon"?: string;
      text?: string;
    }
  | string;
