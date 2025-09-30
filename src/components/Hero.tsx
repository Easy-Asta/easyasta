import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-usaBlue via-white to-usaRed py-24">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-usaBlue drop-shadow-sm">
              Apply for your <span className="text-usaRed">ESTA</span> to visit the United States
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-prose">
              Fast, secure application assistance. One simple form, clear pricing, and real-time status updates.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/apply" className="inline-flex items-center justify-center rounded-xl2 px-6 py-3 text-white bg-usaRed shadow-btn transition-transform active:scale-95 hover:brightness-110">
                Apply now
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center rounded-xl2 px-6 py-3 border border-usaBlue text-usaBlue hover:bg-usaBlue hover:text-white transition-colors">
                How it works
              </Link>
            </div>
          </div>
          <div className="relative h-80 md:h-96">
            <Image src="/landmarks.svg" alt="US landmarks" fill className="object-contain animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
