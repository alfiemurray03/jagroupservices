import { Link } from '../router';
import { Helmet } from '@dr.pogodin/react-helmet';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — JA Group Services</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
        <link rel="canonical" href="https://jagroupservices.co.uk/404" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--secondary)))' }}>
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-8xl font-bold text-white/20 select-none">404</h1>
              <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
              <p className="text-white/80 text-lg">
                The page you are looking for does not exist or has been moved.
              </p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/">
                <button className="px-8 py-3 bg-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ color: 'hsl(var(--primary))' }}>
                  Go to Homepage
                </button>
              </Link>
              <button
                className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-white/30"
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
