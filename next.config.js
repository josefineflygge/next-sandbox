const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  let env;
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    env = {
      mongodb_username: "dbUserJosy",
      mongodb_password: "kioskmongo",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-next-site-dev",
    };
  } else {
    env = {
      mongodb_username: "dbUserJosy",
      mongodb_password: "kioskmongo",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-next-site",
    };
  }

  return {
    reactStrictMode: true,
    env: env,
  };
};

module.exports = nextConfig;
