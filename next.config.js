const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/vila-visnjica" : "",
  assetPrefix: isGitHubPages ? "/vila-visnjica/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/vila-visnjica" : "",
  },
};

module.exports = nextConfig;
