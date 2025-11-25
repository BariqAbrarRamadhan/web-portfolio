'use client';

import { useState } from 'react';
import Image from 'next/image';

const exhibitions = [
  {
    id: '01',
    title: 'Company Financial Management Information System',
    techStack: 'Laravel',
    date: '2024',
    description: 'Sistem informasi manajemen keuangan perusahaan yang komprehensif, mencakup pencatatan pemasukan, pengeluaran, dan pelaporan keuangan secara real-time.',
    images: [
      '/images/projects/1/image-project-1-1.png',
      '/images/projects/1/image-project-1-2.png',
      '/images/projects/1/image-project-1-3.png',
    ]
  },
  {
    id: '02',
    title: 'Laundry Management Information System',
    techStack: 'Laravel',
    date: '2024',
    description: 'Aplikasi manajemen laundry untuk mengelola pesanan, pelacakan status cucian, dan manajemen pelanggan dengan fitur notifikasi.',
    images: [
      '/images/projects/2/image-project-2-1.png',
      '/images/projects/2/image-project-2-2.png',
      '/images/projects/2/image-project-2-3.png',
    ]
  },
  {
    id: '03',
    title: 'Web-Based Diet and Exercise Program Recommendation',
    techStack: 'Laravel',
    date: '2025',
    description: 'Platform rekomendasi program diet dan latihan fisik berbasis web yang disesuaikan dengan profil dan tujuan kesehatan pengguna.',
    images: [
      '/images/projects/3/image-project-3-1.png',
      '/images/projects/3/image-project-3-2.png',
      '/images/projects/3/image-project-3-3.png',
    ]
  },
];

export default function Exhibitions() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="exhibitions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16">
        {/* <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-16 text-center md:text-left">
          exhibitions . exhibitions
        </h2> */}

        <div className="space-y-8">
          {exhibitions.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-8 group hover:bg-white hover:px-4 transition-all duration-300 rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-start gap-8 w-full md:w-1/2">
                  <span className="text-sm font-mono text-gray-500 mt-2">{item.id}</span>
                  <h3 className="text-3xl md:text-4xl font-bold italic group-hover:not-italic transition-all">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mt-4 md:mt-0 w-full md:w-1/2 justify-end">
                  <div className="text-right">
                    <p className="text-sm font-bold">{item.techStack}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <button 
                    onClick={() => toggleExpand(item.id)}
                    className={`px-6 py-2 border border-black rounded-full text-sm font-medium transition-colors ${
                      expandedId === item.id 
                        ? 'bg-black text-white' 
                        : 'hover:bg-black hover:text-white'
                    }`}
                  >
                    {expandedId === item.id ? 'Tutup' : 'Lihat'}
                  </button>
                </div>
              </div>

              {/* Accordion Content */}
              <div 
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedId === item.id ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-gray-100 p-6 rounded-2xl">
                    <h4 className="text-lg font-bold mb-3">Deskripsi Project</h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <h4 className="text-lg font-bold mb-3">Dokumentasi</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {item.images.map((img, idx) => (
                        <div key={idx} className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                          <Image 
                            src={img} 
                            alt={`${item.title} screenshot ${idx + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
