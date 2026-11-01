/** @type {import('next').NextConfig} */
const nextConfig = {
  // Builds plain HTML files into /out, so it deploys to GitHub Pages, Netlify or Vercel unchanged.
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
