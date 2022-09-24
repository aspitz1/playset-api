const redis = require("redis");
const { createClient } = redis;
const fs = require("fs");
const path = require("path");

const cert =
  process.env.NODE_ENV === "development" &&
  fs.readFileSync(path.resolve(__dirname, "..", "public.crt"));

const client = createClient({
  url:
    process.env.NODE_ENV === "production"
      ? process.env.REDIS_URL
      : process.env.LOCAL_REDIS_URL,
  ...(process.env.NODE_ENV === "development" && {
    socket: { tls: true, rejectUnauthorized: false, cert: cert },
  }),
});

module.exports = client;
