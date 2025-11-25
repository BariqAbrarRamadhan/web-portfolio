import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20 overflow-hidden relative">
      {/* Marquee Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-20">
        <h2 className="text-[10rem] font-black uppercase leading-none animate-marquee">
          about. about. about. about. about.
        </h2>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video md:aspect-square lg:aspect-video">
             {/* Abstract Background Pattern */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] bg-white rounded-full opacity-10 blur-3xl"></div>
             </div>
             
             {/* Central Image */}
             <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative w-64 h-80 md:w-96 md:h-120 grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/images/Diri%20Saya.jpg"
                    alt="About Me"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
             </div>

             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 w-1 h-24 bg-white"></div>
             <div className="absolute top-1/2 right-10 md:right-20 -translate-y-1/2 w-1 h-24 bg-white"></div>
             <div className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-1 bg-white"></div>
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-1 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
