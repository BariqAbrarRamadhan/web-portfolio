import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 md:px-16 bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-tighter">
        <Link href="/">●●</Link>
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide">
        <Link href="/" className="hover:text-brand-yellow transition-colors">Home</Link>
        <Link href="#about" className="hover:text-brand-yellow transition-colors">About</Link>
        <Link href="#portfolio" className="hover:text-brand-yellow transition-colors">Portfolio</Link>
        {/* <Link href="#exhibitions" className="hover:text-brand-yellow transition-colors">Exhibitions</Link> */}
        <Link href="#contact" className="hover:text-brand-yellow transition-colors">Contact</Link>
      </nav>
      <div className="text-xs text-gray-500">
        Indonesia, {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </header>
  );
}
