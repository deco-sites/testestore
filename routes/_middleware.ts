import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 607,
  site: "testestore",
  domains: ["testestore.deco.site"],
});