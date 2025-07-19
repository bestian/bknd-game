import { serve } from "bknd/adapter/cloudflare";

export default serve({
   mode: "warm",
   d1: {
      session: true,
   },
   onBuilt: async (app) => {
      app.server.get("/", (c) => c.json({ hello: "world" }));
   }
});
