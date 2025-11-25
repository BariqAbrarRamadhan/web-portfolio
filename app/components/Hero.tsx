import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Instagram, Github } from './SocialIcons';

export default function Hero() {
  return (
    <section className="relative px-8 md:px-16 pt-10 pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.85]">
            Bariq Abrar<br />Ramadhan
          </h1>
          <p className="max-w-md text-sm md:text-base text-gray-600">
            Welcome to my portfolio, I am a Informatics Engineering student from EEPIS (Electronic Engineering Polytechnic Institute of Surabaya). I am interested in Web Development, UX Design, and Data Science. 
          </p>
          
          {/* <div className="flex gap-12 pt-8">
            <div>
              <div className="text-4xl font-bold">+250k</div>
              <div className="text-xs text-gray-500 mt-1 max-w-[150px]">
                Videos that reaching a wide audience and give lasting impression
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold">+800k</div>
              <div className="text-xs text-gray-500 mt-1 max-w-[150px]">
                Hours watched, engaging storytelling that captivates viewers
              </div>
            </div>
          </div> */}
          
          <div id="contact" className="flex gap-2 mt-8">
            {[
              { Icon: Instagram, url: 'https://instagram.com/bariq_rama/' },
              { Icon: Github, url: 'https://github.com/BariqAbrarRamadhan/' },
            ].map(({ Icon, url }, index) => (
              <a 
                key={index} 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* <div className="relative flex justify-center lg:justify-end">
          <div className="bg-brand-yellow rounded-[3rem] p-8 relative w-full max-w-md aspect-4/5 flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start z-20">
               <div className="text-white font-cursive text-4xl opacity-80 font-serif italic">
                 Signature
               </div>
               <div className="bg-black text-white p-3 rounded-full">
                 <Globe size={24} />
               </div>
            </div>
            
            <div className="absolute inset-0 top-0 bottom-0 z-10 flex items-end justify-center">
               <div className="relative w-full h-full">
                  <Image 
                    src="/images/diri-saya-formal.png"
                    alt="Photographer" 
                    fill
                    className="object-cover object-center"
                  />
               </div>
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 pl-4">
               <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=100" alt="thumb1" fill className="object-cover" />
               </div>
               <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=100" alt="thumb2" fill className="object-cover" />
               </div>
            </div>

            <div className="relative z-20 mt-auto">
               <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <ArrowUpRight size={28} />
               </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}


