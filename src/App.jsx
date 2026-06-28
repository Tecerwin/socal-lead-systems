import React from "react";
import {
  PhoneCall,
  MessageSquareText,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Mail,
  Car,
  Hammer,
  Cross,
  Home,
  Wrench,
  TrendingUp,
  DollarSign,
  Clock3,
  BarChart3,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SoCalLeadSystemsLandingPage() {
  if (window.location.pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(37,99,235,0.10),transparent_30%)]" />

      <nav className="relative z-10 border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-center gap-3 text-2xl font-black tracking-tight">
            <Zap className="h-8 w-8 fill-blue-500 text-blue-500" />
            <span>SoCal Lead Systems</span>
          </a>

          <div className="hidden items-center gap-12 text-base font-semibold text-white/90 md:flex">
            <a href="#how" className="hover:text-blue-300">How it works</a>
            <a href="#features" className="hover:text-blue-300">Features</a>
            <a href="#pricing" className="hover:text-blue-300">Pricing</a>
            <a href="#who" className="hover:text-blue-300">Who we help</a>
            <a href="/privacy-policy" className="hover:text-blue-300">Privacy</a>
          </div>

          <a
            href="tel:+16194190966"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-black text-slate-950 shadow-[0_0_35px_rgba(255,255,255,0.16)] transition hover:scale-105"
          >
            <PhoneCall className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[1fr_0.95fr] md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-blue-500/80 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-100 shadow-[0_0_25px_rgba(37,99,235,0.18)]">
            <Zap className="h-4 w-4 fill-blue-500 text-blue-500" />
            Missed-call recovery for local businesses
          </div>

          <h1 className="max-w-3xl text-6xl font-black leading-[1.05] tracking-[-0.055em] md:text-7xl lg:text-8xl">
            Stop losing customers from{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-violet-500 bg-clip-text text-transparent">
              missed calls.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200/90">
            We set up an automated text-back system that replies instantly when your business misses a call, captures the lead, and helps turn it into a booked appointment.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+16194190966"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-black text-slate-950 shadow-xl transition hover:scale-105"
            >
              Get a free demo <ArrowRight className="h-6 w-6" />
            </a>
            <a
              href="mailto:info@socalleadsystems.com"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/[0.03] px-8 py-5 text-lg font-black text-white transition hover:bg-white/10"
            >
              <Mail className="h-6 w-6" />
              Email us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "B", "C", "D"].map((letter) => (
                <div
                  key={letter}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#020817] bg-gradient-to-br from-slate-200 to-slate-500 text-sm font-black text-slate-950"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <div className="text-xl tracking-[0.15em] text-yellow-400">★★★★★</div>
              <p className="text-sm text-slate-300">Trusted by local businesses across SoCal</p>
            </div>
          </div>

          <div id="who" className="mt-11">
            <p className="mb-6 text-sm font-black uppercase tracking-widest text-blue-400">Who we help</p>
            <div className="grid grid-cols-5 gap-6 text-center text-sm text-slate-300">
              <Who icon={<Car />} label="Auto Shops" />
              <Who icon={<Hammer />} label="Contractors" />
              <Who icon={<Cross />} label="Clinics" />
              <Who icon={<Home />} label="Realtors" />
              <Who icon={<Wrench />} label="Service Biz" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-blue-500 to-violet-600 opacity-80 blur-sm" />
          <div className="relative rounded-[2rem] border border-blue-400/70 bg-[#050b1a]/95 p-8 shadow-[0_0_60px_rgba(37,99,235,0.28)]">
            <div className="rounded-3xl bg-black/20 p-7 shadow-2xl">
              <div className="mb-8 flex items-center gap-5 rounded-2xl bg-black/20 p-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-950">
                  <PhoneCall className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-2xl font-black">Missed Call Detected</p>
                  <p className="text-lg text-slate-300">Customer called after hours</p>
                </div>
              </div>

              <div className="space-y-6">
                <HeroStep icon={<MessageSquareText />} title="Instant text-back" text="Your caller gets a fast, friendly reply before they call a competitor." />
                <HeroStep icon={<CalendarCheck />} title="Booking link or reply capture" text="Send them to your booking page or let them reply directly." />
                <HeroStep icon={<ShieldCheck />} title="Lead logged automatically" text="Every missed call is tracked so your team can follow up." />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="how" className="relative z-10 border-y border-white/10 bg-white/[0.025] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="inline-flex items-center gap-6 text-4xl font-black tracking-tight md:text-5xl">
              <span className="h-1 w-10 rounded-full bg-blue-500" />
              How it works
              <span className="h-1 w-10 rounded-full bg-blue-500" />
            </h2>
            <p className="mt-5 text-lg text-slate-300">A simple system that recovers missed calls and turns them into booked appointments.</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <InfoCard number="01" icon={<PhoneCall />} title="We connect your phone system" text="Your missed calls trigger a simple automation. No complicated app for your staff to learn." />
            <InfoCard number="02" icon={<MessageSquareText />} title="Customers get an instant reply" text="A text goes out right away with your custom message, booking link, or next step." />
            <InfoCard number="03" icon={<TrendingUp />} title="You recover more leads" text="You get cleaner follow-up, fewer lost opportunities, and better visibility into missed calls." />
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-5xl font-black tracking-tight">
            Simple offer.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Clear ROI.</span>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-8 text-slate-200">
            If one recovered call turns into a real job, this system can pay for itself. That is the whole point — not fancy AI theater, just fewer missed opportunities.
          </p>

          <div className="mt-9 space-y-6">
            <Benefit icon={<DollarSign />} title="Recover more of the leads" text="you already paid to get" />
            <Benefit icon={<Clock3 />} title="Respond instantly" text="while they’re still interested" />
            <Benefit icon={<BarChart3 />} title="See everything in one place" text="and follow up with confidence" />
          </div>
        </div>

        <div id="pricing" className="rounded-[2rem] border border-blue-400/80 bg-[#050b1a]/80 p-10 shadow-[0_0_60px_rgba(37,99,235,0.18)]">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">Starter Setup</p>
          <h3 className="mt-5 text-5xl font-black tracking-tight">Missed Call Text-Back</h3>
          <ul className="mt-8 space-y-6 text-lg text-slate-200">
            <Feature text="Instant SMS reply to missed callers" />
            <Feature text="Custom message for your business" />
            <Feature text="Booking link or reply capture" />
            <Feature text="Basic lead log for follow-up" />
          </ul>
          <a
            href="mailto:info@socalleadsystems.com?subject=Free Demo Request"
            className="mt-10 inline-flex w-full items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-5 text-xl font-black text-white shadow-xl transition hover:scale-[1.02]"
          >
            Request a demo <ArrowRight className="h-7 w-7" />
          </a>
          <p className="mt-6 flex items-center justify-center gap-2 text-base text-slate-400">
            <Lock className="h-4 w-4" />
            No obligations. Free walkthrough.
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-base text-slate-400">
        <p>
          SoCal Lead Systems LLC <span className="mx-4 text-blue-500">•</span> info@socalleadsystems.com <span className="mx-4 text-blue-500">•</span> (619) 419-0966
        </p>
        <p className="mt-4">
          <a href="/privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </a>
        </p>
      </footer>
    </main>
  );
}

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#020817] px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300">
          ← Back to Home
        </a>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-[0_0_60px_rgba(37,99,235,0.12)] md:p-12">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-400">
            Last updated: June 28, 2026
          </p>

          <div className="mt-10 space-y-8 text-lg leading-8 text-slate-300">
            <p>
              SoCal Lead Systems LLC respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website, contact us, request a demo, or communicate with businesses using systems we provide.
            </p>

            <section>
              <h2 className="text-2xl font-black text-white">Information We Collect</h2>
              <p className="mt-3">
                We may collect information you voluntarily provide, including your name, phone number, email address, business name, and any message or inquiry you submit through our website, phone, email, text message, or contact forms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">How We Use Information</h2>
              <p className="mt-3">
                We use information to respond to inquiries, provide services, operate missed-call text-back systems, improve our website, communicate with customers or potential customers, and support business follow-up.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">SMS and Text Messaging</h2>
              <p className="mt-3">
                If you provide your phone number or contact a business using a system powered by SoCal Lead Systems, you may receive text messages related to your inquiry, appointment, quote request, service request, or missed call follow-up.
              </p>
              <p className="mt-3">
                Message frequency may vary. Message and data rates may apply. You can opt out of receiving text messages at any time by replying STOP. For help, reply HELP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">No Sale of Personal Information</h2>
              <p className="mt-3">
                We do not sell, rent, or trade personal information. We may share information only with service providers necessary to operate our website, messaging systems, customer communication tools, or legal compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Third-Party Services</h2>
              <p className="mt-3">
                Our website and systems may use third-party providers for hosting, analytics, email, forms, messaging, automation, or customer communication. These providers may process information only as needed to provide their services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Data Security</h2>
              <p className="mt-3">
                We use reasonable safeguards to protect information from unauthorized access, misuse, or disclosure. However, no internet, phone, SMS, or electronic communication system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Your Choices</h2>
              <p className="mt-3">
                You may contact us to request access, correction, or deletion of personal information we have collected from you, subject to applicable legal and business requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Contact Us</h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, contact us:
              </p>
              <p className="mt-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@socalleadsystems.com" className="text-blue-400 underline hover:text-blue-300">
                  info@socalleadsystems.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+16194190966" className="text-blue-400 underline hover:text-blue-300">
                  (619) 419-0966
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function HeroStep({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.055] p-6">
      <div className="flex gap-6">
        <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-700 shadow-[0_0_28px_rgba(59,130,246,0.35)]">
          {React.cloneElement(icon, { className: "h-8 w-8" })}
        </div>
        <div>
          <h3 className="text-2xl font-black">{title}</h3>
          <p className="mt-2 text-lg leading-8 text-slate-300">{text}</p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ number, icon, title, text }) {
  return (
    <div className="relative rounded-[1.75rem] border border-white/15 bg-slate-900/70 p-9 shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-700 text-lg font-black shadow-[0_0_28px_rgba(59,130,246,0.3)]">
          {number}
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
          {React.cloneElement(icon, { className: "h-10 w-10" })}
        </div>
      </div>
      <h3 className="text-2xl font-black leading-tight">{title}</h3>
      <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function Feature({ text }) {
  return (
    <li className="flex gap-4">
      <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-blue-400" />
      <span>{text}</span>
    </li>
  );
}

function Benefit({ icon, title, text }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-blue-400 text-blue-400">
        {React.cloneElement(icon, { className: "h-8 w-8" })}
      </div>
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="text-lg text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function Who({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-blue-200">{React.cloneElement(icon, { className: "h-9 w-9" })}</div>
      <span>{label}</span>
    </div>
  );
}