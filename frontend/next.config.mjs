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
		  source: '/api/todos',
		  destination: `${process.env.BACKEND_API}/todos/`,
		},
		{
		  source: '/api/todos/:path*',
		  destination: `${process.env.BACKEND_API}/todos/:path*`,
		},
	  ]
	},
};
  
export default nextConfig;
