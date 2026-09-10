"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [status, setStatus] = useState("");

  function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !password) return setStatus("Enter your email and password to continue.");
    if (!email.includes("@")) return setStatus("Enter a valid email address.");
    setStatus("Sign-in is coming soon. No account information was submitted.");
  }

  return <main className="auth-page">
    <style jsx global>{` .auth-page{min-height:100vh;background:linear-gradient(135deg,#f0fdfa 0%,#fff 48%,#fff1f2 100%);padding:34px 20px 28px}.auth-shell{width:min(100%,520px);margin:auto}.auth-brand{justify-content:center;margin-bottom:34px}.auth-card{background:#fff;border:1px solid var(--border);border-radius:20px;box-shadow:0 20px 60px #0f172a14;padding:44px 48px}.auth-heading{text-align:center}.auth-heading .kicker{margin-bottom:12px}.auth-heading h1{font-size:clamp(2.1rem,5vw,2.8rem);margin-bottom:14px}.auth-heading p{color:var(--slate);font-size:.95rem;margin:0 auto;max-width:360px}.auth-form{display:block;margin-top:32px;max-width:none}.field-group{margin-bottom:20px}.field-group label,.field-label-row label{display:block;font-size:.85rem;font-weight:600;margin-bottom:8px}.field-label-row{display:flex;justify-content:space-between;align-items:baseline;gap:12px}.field-label-row a,.auth-switch a{color:var(--teal-dark);font-weight:600;text-decoration:none}.field-label-row a{font-size:.78rem}.auth-form input:not([type="checkbox"]){width:100%;height:50px;border-color:#cbd5e1}.password-field{position:relative}.password-field input{padding-right:68px}.password-toggle{position:absolute;right:10px;top:50%;transform:translateY(-50%);border:0;background:none;color:var(--teal-dark);font-size:.78rem;font-weight:700;cursor:pointer;padding:8px}.remember-row{display:flex;align-items:center;gap:8px;color:var(--slate);font-size:.84rem;cursor:pointer}.remember-row input{width:16px;height:16px;accent-color:var(--teal-dark)}.auth-submit{width:100%;margin-top:24px}.auth-status{text-align:center;color:var(--teal-dark)!important;min-height:22px}.auth-divider{display:flex;align-items:center;gap:12px;color:#94a3b8;font-size:.75rem;margin:23px 0}.auth-divider:before,.auth-divider:after{content:"";height:1px;background:var(--border);flex:1}.auth-divider span{white-space:nowrap}.google-button{width:100%;color:var(--navy);font-weight:600}.google-mark{font-weight:700;font-size:1.1rem;color:#4285f4}.auth-switch{text-align:center;color:var(--slate);font-size:.84rem;margin:27px 0 0}.auth-privacy{text-align:center;color:#64748b;font-size:.72rem;margin:22px auto 0;max-width:390px}@media(max-width:520px){.auth-card{padding:34px 24px}.auth-page{padding-top:24px}.auth-brand{margin-bottom:24px}} `}</style>
    <a className="skip-link" href="#login-form">Skip to login form</a>
    <div className="auth-shell">
      <a className="brand auth-brand" href="/" aria-label="Pulse Health home"><span className="brand-mark">âœš</span><span>Pulse<span className="brand-accent">Health</span></span></a>
      <section className="auth-card" aria-labelledby="login-heading">
        <div className="auth-heading"><span className="kicker">WELCOME BACK</span><h1 id="login-heading">Sign in to your care.</h1><p>Access your appointments, health information, and care team in one place.</p></div>
        <form id="login-form" className="auth-form" onSubmit={submitLogin} noValidate>
          <div className="field-group"><label htmlFor="login-email">Email address</label><input id="login-email" name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></div>
          <div className="field-group"><div className="field-label-row"><label htmlFor="login-password">Password</label><a href="#password-recovery" onClick={(event) => { event.preventDefault(); setStatus("Password recovery is coming soon."); }}>Forgot password?</a></div><div className="password-field"><input id="login-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" /><button type="button" className="password-toggle" aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></div></div>
          <label className="remember-row"><input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} /> <span>Remember me</span></label>
          <button className="button button-pink auth-submit" type="submit">Sign In <span>â†’</span></button><p className="form-status auth-status" aria-live="polite">{status}</p>
        </form>
        <div className="auth-divider"><span>or continue with</span></div>
        <button className="button button-outline google-button" type="button" onClick={() => setStatus("Google sign-in is coming soon.")}><span className="google-mark" aria-hidden="true">G</span> Continue with Google</button>
        <p className="auth-switch">New to Pulse Health? <a href="#create-account" onClick={(event) => { event.preventDefault(); setStatus("Account creation is coming soon."); }}>Create an account</a></p>
      </section>
      <p className="auth-privacy">Your privacy matters. Pulse Health uses fictional demo interactions in this preview.</p>
    </div>
  </main>;
}
