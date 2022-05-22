import { StyleProp } from "./StyleProp";

export type Stylesheet = {[key in keyof typeof StyleProp]?: any};
