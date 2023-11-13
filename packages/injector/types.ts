export type TailwindcssVarsInjectorConfig = {
  /**
   * The prefix to use for the CSS variables.
   * @default "tw"
   * @example [ '--tw-white', '#fff' ]
   * @example [ '--tw-orange-300', '#fdba74' ]
   */
  prefix?: string;
  /**
   * The list of theme keys to inject.
   * @default all keys from the theme config
   * @example [ 'colors', 'spacing' ]
   */
  activeVars?: Array<keyof typeof TailwindcssThemeKeyEnum>;
};

export enum TailwindcssThemeKeyEnum {
  "screens" = "screens",
  "colors" = "colors",
  "spacing" = "spacing",
  "backgroundColor" = "backgroundColor",
  "backgroundImage" = "backgroundImage",
  "gradientColorStops" = "gradientColorStops",
  "borderColor" = "borderColor",
  "borderRadius" = "borderRadius",
  "borderWidth" = "borderWidth",
  "boxShadow" = "boxShadow",
  "fontSize" = "fontSize",
  "fontWeight" = "fontWeight",
  "height" = "height",
  "width" = "width",
  "minWidth" = "minWidth",
  "minHeight" = "minHeight",
  "maxWidth" = "maxWidth",
  "maxHeight" = "maxHeight",
  "padding" = "padding",
  "margin" = "margin",
  "space" = "space",
  "letterSpacing" = "letterSpacing",
  "lineHeight" = "lineHeight",
  "listStyleType" = "listStyleType",
  "inset" = "inset",
  "zIndex" = "zIndex",
  "fill" = "fill",
  "stroke" = "stroke",
  "fontFamily" = "fontFamily",
}
