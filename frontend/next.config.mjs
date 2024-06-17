/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	async rewrites() {
	  return [
		{
		  source: '/api/todos/',
		  destination: 'http://todobackend-springboot:8080/todos/',
		},
		{
		  source: '/api/:path*',
		  destination: 'http://todobackend-springboot:8080/:path*',
		},
	  ]
	},
};
  
export default nextConfig;
