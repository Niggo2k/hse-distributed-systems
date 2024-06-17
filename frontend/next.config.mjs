/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	async rewrites() {
	  return [
		{
		  source: '/api/todos/',
		  destination: `${process.env.BACKEND_API}/todos/`,
		},
		{
		  source: '/api/:path*',
		  destination: `${process.env.BACKEND_API}/:path*`,
		},
	  ]
	},
};
  
export default nextConfig;
