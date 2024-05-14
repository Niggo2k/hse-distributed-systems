/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	async rewrites() {
	  return [
		{
		  source: '/api/:path*',
		  destination: 'http://todobackend-springboot:8080/:path*',
		},
	  ]
	},
};
  
export default nextConfig;
