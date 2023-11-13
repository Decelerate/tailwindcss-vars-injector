// import { ThemeConfig } from "tailwindcss/types/config";
// export type ThemeKey = Array<keyof Omit<ThemeConfig, "extend">>;
import { CSSRuleObject } from "tailwindcss/types/config";
import { defaultConfig } from "./defaultConfig";
import { TailwindcssVarsInjectorConfig } from "./types";

const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

export function tailwindcssVarsInjector(
  customConfig: TailwindcssVarsInjectorConfig
) {
  const config = { ...defaultConfig, ...customConfig };

  return function ({
    addBase,
    theme,
  }: {
    addBase: (base: CSSRuleObject | CSSRuleObject[]) => void;
    theme: (path: string, defaultValue?: unknown) => any;
  }) {
    const colorEntries = Object.entries(
      flattenColorPalette(theme("colors"))
    ).map(([key, val]) => [`--${config.prefix}-${key}`, val]);

    const blurEntries = Object.entries(theme("blur")).map(([key, val]) => [
      `--${config.prefix}-blur-${key}`,
      val,
    ]);

    let newVars = Object.fromEntries([...colorEntries, ...blurEntries]);

    addBase({
      ":root": newVars,
    });
  };
}
