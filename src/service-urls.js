import { config } from "config.js";

export function urlToServiceUrl(u) {
  return config.prefix + encodeURIComponent(u);
}
