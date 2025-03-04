import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "bkmjaay6",
  dataset: "production",
  apiVersion: "2023-03-01", // Use a recent API version
  useCdn: true, // `true` enables faster responses but might show stale data
});

export default client;
