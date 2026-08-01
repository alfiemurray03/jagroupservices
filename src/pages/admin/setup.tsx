import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

export default function AdminSetupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ token: '', name: '', email: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);
    const res = await fetch('/api/admin/seed', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: form.token, name: form.name, email: form.email, password: form.password }),
    });
    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => navigate('/admin/login'), 3000);
    } else {
      setError(data.error || 'Setup failed.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Setup — JA Group Services</title>
        <meta name="description" content="One-time admin account setup for JA Group Services Ltd." />
        <link rel="canonical" href="https://jagroupservices.co.uk/admin/setup" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1F44] via-[#1e3a5f] to-[#0A1F44] px-4">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#2563EB] flex items-center justify-center mb-4 shadow-lg shadow-blue-900/40">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Setup</h1>
            <p className="text-white/50 text-sm mt-1">Create your super admin account</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {success ? (
              <div className="flex flex-col items-center text-center gap-4 py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A1F44]">Super admin created</p>
                  <p className="text-sm text-gray-500 mt-1">Redirecting to login…</p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-semibold text-[#0A1F44] mb-2">One-time setup</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Enter the seed token from your app secrets, then choose your admin credentials.
                </p>

                {error && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="token">Seed token *</Label>
                    <Input
                      id="token"
                      type="password"
                      required
                      value={form.token}
                      onChange={e => setForm(f => ({ ...f, token: e.target.value }))}
                      placeholder="From Settings → Secrets → ADMIN_SEED_TOKEN"
                      className="font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="admin@jagroupservices.co.uk"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={form.password}
                        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                        placeholder="Min. 8 characters"
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(v => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="confirm">Confirm password *</Label>
                    <Input
                      id="confirm"
                      type="password"
                      required
                      value={form.confirm}
                      onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                      placeholder="Repeat password"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold h-11 mt-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating account…
                      </span>
                    ) : (
                      'Create super admin'
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>

          <p className="text-center text-white/30 text-xs mt-6">
            This page only works once — it is blocked after the first admin is created
          </p>
        </div>
      </div>
    </>
  );
}
