import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-8 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20">
        <div className="text-4xl font-bold tracking-tighter mb-8 md:mb-0">●●</div>
        
        <nav className="flex flex-wrap gap-8 text-xs font-medium uppercase tracking-wide text-gray-600">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="#about" className="hover:text-black">About</Link>
          <Link href="#portfolio" className="hover:text-black">Portfolio</Link>
          <Link href="#contact" className="hover:text-black">Contact</Link>
          <Link href="/admin/login" className="hover:text-black text-brand-yellow">Admin Login</Link>
        </nav>
      </div>

      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-[12vw] leading-none font-black tracking-tighter text-center uppercase">
          Rama
        </h2>
      </div>
    </footer>
  );
}
