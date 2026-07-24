import { Navigate } from "react-router-dom";
import { detectLocale } from "./types";

/** Send `/` visitors to `/en` or `/es` based on preference / browser. */
export function LocaleRedirect() {
  return <Navigate to={`/${detectLocale()}`} replace />;
}
