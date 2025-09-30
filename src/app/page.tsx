import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <section className="mx-auto max-w-4xl py-16 px-4 space-y-8">
        <h2 className="text-2xl font-bold text-usaBlue">What you get</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Guided application flow and secure payment</li>
          <li>Status tracking and email updates</li>
          <li>Transparent pricing and support</li>
        </ul>
      </section>
    </main>
  );
}
