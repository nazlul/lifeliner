'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ImageSet {
  title: string
  description?: string
  images: string[]
  date?: string
  attendees?: number
}

export default function GalleryPage() {
  const [openSet, setOpenSet] = useState<ImageSet | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const sets: ImageSet[] = [
    {
      title: 'Redemption Poly Clinic, Kambalakkad',
      description: ' LifeLinER Training for nurses and staffs in Redemption Poly Clinic, Kambalakkad',
      images: ['/gallery/kambalakkad/1.jpg', '/gallery/kambalakkad/2.jpg', '/gallery/kambalakkad/3.jpg'],
      date: '21 Aug 2025'
    },
    {
      title: 'CM College, Nadavayal',
      description: ' LifeLinER Training at CM College Nadavayal, conducted for their NSS volunteers',
      images: ['/gallery/nadavayal/1.jpg', '/gallery/nadavayal/2.jpg', '/gallery/nadavayal/3.jpg', '/gallery/nadavayal/4.jpg', '/gallery/nadavayal/5.jpg'],
      date: '21 Aug 2025'
    },
    {
      title: 'Naher College, Kanjirode',
      description: 'LifeLinER Training at Naher college, Kanjirode',
      images: ['/gallery/naher/1.jpg', '/gallery/naher/2.jpg', '/gallery/naher/3.jpg'],
      date: '21 Aug 2025'
    },
    {
      title: 'Kaniv Rubber Tappers Association',
      description: ' LifeLinER Training and privilage card distribution at Kaniv Rubber Tappers Association, Moolamattom',
      images: ['/gallery/kaniv/1.jpg', '/gallery/kaniv/2.jpg', '/gallery/kaniv/3.jpg', '/gallery/kaniv/4.jpg', '/gallery/kaniv/5.jpg', '/gallery/kaniv/6.jpg'],
      date: '20 Aug 2025',
      attendees: 158
    },
    {
      title: 'Nalanda Institute, Echoor',
      description: 'LifeLinER Training at Nalanda Institute, Echoor',
      images: ['/gallery/echoor/1.jpg'],
      date: '19 Aug 2025',
      attendees: 42
    },
    {
      title: 'Perukoni Residence Association',
      description: ' LifeLinER Training and privilage card distribution at Perukoni Residence Association, Olamattom',
      images: ['/gallery/perukoni/1.jpg', '/gallery/perukoni/2.jpg', '/gallery/perukoni/3.jpg', '/gallery/perukoni/4.jpg', '/gallery/perukoni/5.jpg', '/gallery/perukoni/6.jpg', '/gallery/perukoni/7.jpg', '/gallery/perukoni/8.jpg'],
      date: '17 Aug 2025',
      attendees: 69
    },
    {
      title: 'Govt. High school, Kallarukutty',
      description: 'LifeLinER Training at Govt. High school, Kallarukutty',
      images: ['/gallery/kallarkutty/1.jpg', '/gallery/kallarkutty/2.jpg', '/gallery/kallarkutty/3.jpg', '/gallery/kallarkutty/4.jpg', '/gallery/kallarkutty/5.jpg', '/gallery/kallarkutty/6.jpg', '/gallery/kallarkutty/7.jpg'],
      date: '14 Aug 2025',
      attendees: 66
    },
    {
      title: 'Govt. Higher Secondary School, Rajakkad',
      description: 'Awarness class and LifeLinER Training at Govt. Higher Secondary School, Rajakkad',
      images: ['/gallery/rajakkad/1.jpg', '/gallery/rajakkad/2.jpg', '/gallery/rajakkad/3.jpg', '/gallery/rajakkad/4.jpg', '/gallery/rajakkad/5.jpg', '/gallery/rajakkad/6.jpg', '/gallery/rajakkad/7.jpg', '/gallery/rajakkad/8.jpg'],
      date: '14 Aug 2025',
      attendees: 147
    },
    {
      title: 'Chinmaya Women\'s College',
      description: 'LifeLinER (Organ Donation Awareness Talk By Dr. Shabeen kumar Consultant Nephrologist) In association with Chinmaya Women\'s College Chala, Kannur',
      images: ['/gallery/chinmaya/1.jpg', '/gallery/chinmaya/2.jpg', '/gallery/chinmaya/3.jpg', '/gallery/chinmaya/4.jpg'],
      date: '14 Aug 2025',
      attendees: 100
    },
    {
      title: 'Firstcry Intellitots Preschool',
      description: 'LifeLinER training for staffs and teachers of Firstcry Intellitots Preschool',
      images: ['/gallery/firstcry/1.jpg', '/gallery/firstcry/2.jpg'],
      date: '13 Aug 2025',
      attendees: 46
    },
    {
      title: 'CH Center Perinthalmanna',
      description: 'LifeLinER training for female volunteers at CH Center Perinthalmanna',
      images: ['/gallery/chcentre/1.jpg', '/gallery/chcentre/2.jpg', '/gallery/chcentre/3.jpg', '/gallery/chcentre/4.jpg'],
      date: '12 Aug 2025',
      attendees: 51
    },
    {
      title: 'BEM UP School',
      description: 'LifeLinER training at BEM UP School, Koyilandy',
      images: ['/gallery/bem/1.jpg', '/gallery/bem/2.jpg', '/gallery/bem/3.jpg', '/gallery/bem/4.jpg'],
      date: '12 Aug 2025'
    },
    {
      title: 'Talk By Dr. Mithun Ramesh',
      description: 'LifeLinER (Organ Donation Awareness Talk By Dr. Mithun Ramesh, Senior Consultant - Nephrology) In association with Kannur College of Commerce',
      images: ['/gallery/drmithun/1.jpg'],
      date: '11 Aug 2025'
    },
    {
      title: 'BMH Kannur',
      description: 'LifeLinER training for New joinees at BMH Kannur',
      images: ['/gallery/kannur1/1.jpg', '/gallery/kannur1/2.jpg'],
      date: '6 Aug 2025',
      attendees: 40
    },
    {
      title: 'CMHS Mannur School',
      description: 'LifeLinER training for Scouts and Guides students and their parents at CMHS Mannur School, Kadalundi',
      images: ['/gallery/mannur/1.jpg', '/gallery/mannur/2.jpg', '/gallery/mannur/3.jpg'],
      date: '3 Aug 2025',
      attendees: 88
    },
    {
      title: 'Young Seniors Club',
      description: 'LifeLinER training for Young Seniors Club',
      images: ['/gallery/ys/1.jpg', '/gallery/ys/2.jpg', '/gallery/ys/3.jpg'],
      date: '2 Aug 2025',
      attendees: 40
    },
    {
      title: 'GHSS Tharuvana',
      description: 'LifeLinER training for SPC cadets at GHSS Tharuvana',
      images: ['/gallery/tharuvana/1.jpg', '/gallery/tharuvana/2.jpg', '/gallery/tharuvana/3.jpg', '/gallery/tharuvana/4.jpg'],
      date: '2 Aug 2025'
    },
    {
      title: 'Ambulance Drivers Pattambi',
      description: 'LifeLinER training program for Ambulance drivers at Pattambi',
      images: ['/gallery/pattambi/1.jpg', '/gallery/pattambi/2.jpg'],
      date: '26 Jul 2025',
      attendees: 52
    },
    {
      title: 'Kannur Doctors talk',
      description: 'LifeLinER Doctors Talk on Stroke Management by Jisa Mary Joy, in association with Friends of Kannur Trust. Introduced the BMH Family Connect Card',
      images: ['/gallery/kannurtrust/1.jpg'],
      date: '26 Jul 2025'
    },
    {
      title: 'Thalassery Sacred Heart School',
      description: 'LifeLinER training programme at Sacred Heart Girls\' Higher Secondary School, Thalassery',
      images: ['/gallery/thalassery/1.jpg', '/gallery/thalassery/2.jpg'],
      date: '26 Jul 2025',
      attendees: 100
    },
    {
      title: 'Kanhangad',
      description: 'LifeLinER training programme at Kanhangad',
      images: ['/gallery/kanhangad/1.jpg', '/gallery/kanhangad/2.jpg'],
      date: '23 Jul 2025',
      attendees: 50
    },
    {
      title: 'Abate College',
      description: 'LifeLinER training at Abate College, Kozhikode',
      images: ['/gallery/abate/1.jpg', '/gallery/abate/2.jpg', '/gallery/abate/3.jpg', '/gallery/abate/4.jpg', '/gallery/abate/5.jpg'],
      date: '23 Jul 2025',
      attendees: 146
    },
    {
      title: 'IHRD College',
      description: 'LifeLinER training program at IHRD College for NSS Students',
      images: ['/gallery/ihrd/1.jpg', '/gallery/ihrd/2.jpg'],
      date: '23 Jul 2025',
      attendees: 60
    },
    {
      title: 'GHSS Panthalayani',
      description: 'LifeLinER training at GHSS Panthalayani, Kozhikode',
      images: ['/gallery/panthalayani/1.jpg', '/gallery/panthalayani/2.jpg', '/gallery/panthalayani/3.jpg', '/gallery/panthalayani/4.jpg'],
      date: '21 Jul 2025'
    },
    {
      title: 'Swiggy Delivery Executives',
      description: 'LifeLinER training for Swiggy delivery executives. Session led by Dr. Rinoop',
      images: ['/gallery/swiggy/1.jpg', '/gallery/swiggy/2.jpg', '/gallery/swiggy/3.jpg'],
      date: '21 Jul 2025',
      attendees: 32
    },
    {
      title: 'DE Earth Architect Pvt.Ltd, Kozhikode',
      description: 'LifeLinER training at DE Earth Architect Pvt.Ltd, Kozhikode',
      images: ['/gallery/dearch/1.jpg', '/gallery/dearch/2.jpg', '/gallery/dearch/3.jpg', '/gallery/dearch/4.jpg'],
      date: '18 Jul 2025',
      attendees: 30
    },
    {
      title: 'Lazaro Academy, Payyanur',
      description: 'LifeLinER training at Lazaro Academy, Payyanur',
      images: ['/gallery/lazaro/1.jpg', '/gallery/lazaro/2.jpg', '/gallery/lazaro/3.jpg', '/gallery/lazaro/4.jpg'],
      date: '18 Jul 2025',
      attendees: 50
    },
    {
      title: 'GHSS, Thariode',
      description: 'LifeLinER training for SPC, Social science service club Membes at Govt. Higher secondary school, Thariode',
      images: ['/gallery/thariode/1.jpg', '/gallery/thariode/2.jpg', '/gallery/thariode/3.jpg'],
      date: '16 Jul 2025'
    },
    {
      title: 'GUPS Chennalod',
      description: 'LifeLinER training or JRC Cadets at GUPS Chennalod',
      images: ['/gallery/gups/1.jpg', '/gallery/gups/2.jpg', '/gallery/gups/3.jpg', '/gallery/gups/4.jpg'],
      date: '16 Jul 2025'
    },
    {
      title: 'St.George church, Periyambra',
      description: 'LifeLinER training and Privilege card Distribution at St.George church, Periyambra',
      images: ['/gallery/stgeorge/1.jpg', '/gallery/stgeorge/2.jpg', '/gallery/stgeorge/3.jpg', '/gallery/stgeorge/4.jpg', '/gallery/stgeorge/5.jpg', '/gallery/stgeorge/6.jpg'],
      date: '13 Jul 2025',
      attendees: 150
    },
    {
      title: 'Autobahn trucking corporation',
      description: 'LifeLinER training at Autobahn trucking corporation',
      images: ['/gallery/autobahn/1.jpg', '/gallery/autobahn/2.jpg', '/gallery/autobahn/3.jpg'],
      date: '11 Jul 2025',
      attendees: 70
    },
    {
      title: 'Oriental School of Hotel Management',
      description: 'LifeLinER training at Oriental School of Hotel Management, Lakkidi',
      images: ['/gallery/oriental/1.jpg', '/gallery/oriental/2.jpg', '/gallery/oriental/3.jpg'],
      date: '11 Jul 2025',
      attendees: 70
    },
    {
      title: 'RCHS School',
      description: 'LifeLinER training for NCC& JRC Cadets at RCHS School, Chundale',
      images: ['/gallery/rchs/1.jpg', '/gallery/rchs/2.jpg'],
      date: '11 Jul 2025',
      attendees: 65
    },
    {
      title: 'Training program at ISKRA',
      description: 'LifeLinER training at ISKRA Charitable Society, Nellikode',
      images: ['/gallery/iskra/1.jpg', '/gallery/iskra/2.jpg', '/gallery/iskra/3.jpg'],
      date: '11 Jul 2025',
      attendees: 68
    },
    {
      title: 'Janamythri Police Station, Adimaly',
      description: 'LifeLinER and Privilege card Distribution at Janamythri Police Station, Adimaly',
      images: ['/gallery/adimaly/1.jpg', '/gallery/adimaly/2.jpg', '/gallery/adimaly/3.jpg', '/gallery/adimaly/4.jpg', '/gallery/adimaly/5.jpg', '/gallery/adimaly/6.jpg'],
      date: '11 Jul 2025',
      attendees: 26
    },
    {
      title: 'Training program for AOCTA ',
      description: 'LifeLinER program for AOCTA ( Ambulance Owners Captians and Technicians ) and their families of Calicut region',
      images: ['/gallery/aocta/1.jpg', '/gallery/aocta/2.jpg', '/gallery/aocta/3.jpg'],
      date: '8 Jul 2025',
      attendees: 60
    },
    {
      title: 'Benhill English Medium School',
      description: 'LifeLinER training program at Benhill English Medium School, Iritty',
      images: ['/gallery/benhill/1.jpg', '/gallery/benhill/2.jpg', '/gallery/benhill/3.jpg', '/gallery/benhill/4.jpg'],
      date: '5 Jul 2025'
    },
    {
      title: 'Shanthigiri College',
      description: 'LifeLinER training at Shanthigiri College, Vazhithala',
      images: ['/gallery/vazhithala/1.jpg', '/gallery/vazhithala/2.jpg', '/gallery/vazhithala/3.jpg', '/gallery/vazhithala/4.jpg', '/gallery/vazhithala/5.jpg', '/gallery/vazhithala/6.jpg', '/gallery/vazhithala/7.jpg'],
      date: '4 Jul 2025',
      attendees: 200
    },
    {
      title: 'Nahla Poly Clinic',
      description: 'LifeLinER training program in association with Nahla Poly Clinic vellamunda',
      images: ['/gallery/nahla/1.jpg', '/gallery/nahla/2.jpg', '/gallery/nahla/3.jpg'],
      date: '3 Jul 2025',
      attendees: 42
    },
    {
      title: 'St. Vincent HSS',
      description: 'LifeLinER training for students at St. Vincent Higher Secondary School',
      images: ['/gallery/vincent/1.jpg', '/gallery/vincent/2.jpg', '/gallery/vincent/3.jpg'],
      date: '3 Jul 2025',
      attendees: 214
    },
    {
      title: 'Calicut Medical College',
      description: 'LifeLinER program for Ambulance drivers and their families of Calicut Medical College region.Session led by Dr. Rinoob',
      images: ['/gallery/calicutmedical/1.jpg', '/gallery/calicutmedical/2.jpg', '/gallery/calicutmedical/3.jpg', '/gallery/calicutmedical/4.jpg'],
      date: '29 Jun 2025',
      attendees: 80
    },
    {
      title: 'BMH Kannur Program',
      description: 'LifeLinER training at BMH Kannur.( Ambulance driver\'s family get-together). Dr.Hirash giving Awareness talk followed by BLS',
      images: ['/gallery/kannur/1.jpg', '/gallery/kannur/2.jpg', '/gallery/kannur/3.jpg'],
      date: '29 Jun 2025',
      attendees: 64
    },
    {
      title: 'Nanminda GHSS Training Program',
      description: 'LifeLinER training For Junior Red Cross and Scouts and guides at Nanminda Govt Higher Secondary School',
      images: ['/gallery/nanminda/1.jpg', '/gallery/nanminda/2.jpg', '/gallery/nanminda/3.jpg'],
      date: '28 Jun 2025',
      attendees: 145
    },
    {
      title: 'Alif International School',
      description: 'LifeLinER training For Students at  Alif International School, Knowledge City, Kaithapoyil',
      images: ['/gallery/alif/1.jpg', '/gallery/alif/2.jpg', '/gallery/alif/3.jpg', '/gallery/alif/4.jpg', '/gallery/alif/5.jpg'],
      date: '28 Jun 2025',
      attendees: 70
    },
    {
      title: 'Kuttikatoor Training',
      description: 'LifeLinER training For Health Club Students at Kuttikatoor Govt Higher Secondary School',
      images: ['/gallery/kuttikatoor/1.jpg', '/gallery/kuttikatoor/2.jpg', '/gallery/kuttikatoor/3.jpg', '/gallery/kuttikatoor/4.jpg'],
      date: '28 Jun 2025',
      attendees: 74
    },
    {
      title: 'Kondotty Event',
      description: 'LifeLinER program for Ambulance drivers and their families of  Kondotty region',
      images: ['/gallery/kondotty/1.jpg', '/gallery/kondotty/2.jpg'],
      date: '22 Jun 2025',
      attendees: 130
    },
    {
      title: 'Vythiri Training Program',
      description: 'LifeLinER training for Staff in Vythiri Resort, Wayanad',
      images: ['/gallery/vythiri/1.jpg', '/gallery/vythiri/2.jpg', '/gallery/vythiri/3.jpg', '/gallery/vythiri/4.jpg'],
      date: '21 Jun 2025',
      attendees: 40
    },
    {
      title: 'Koodaranji Program',
      description: 'LifeLinER training at Koodaranji Grama Panchayat',
      images: ['/gallery/koodaranji/1.jpg', '/gallery/koodaranji/2.jpg', '/gallery/koodaranji/3.jpg'],
      date: '20 Jun 2025',
      attendees: 132
    },
    {
      title: 'JDT Event',
      description: 'LifeLinER training at JDT Islam Arts & Science College',
      images: ['/gallery/jdt/1.jpg', '/gallery/jdt/2.jpg', '/gallery/jdt/3.jpg', '/gallery/jdt/4.jpg'],
      date: '17 Jun 2025',
      attendees: 100
    },
    {
      title: 'Nadakkavu Girls School',
      description: 'LifeLinER training for students of Nadakkavu Girls School',
      images: ['/gallery/nadakav/1.jpg', '/gallery/nadakav/2.jpg', '/gallery/nadakav/3.jpg', '/gallery/nadakav/4.jpg', '/gallery/nadakav/5.jpg', '/gallery/nadakav/6.jpg'],
      date: '12 Jun 2025',
      attendees: 91
    },
    {
      title: 'Mahe Dental College',
      description: 'LifeLinER program at Mahe Dental college',
      images: ['/gallery/mahe/1.jpg', '/gallery/mahe/2.jpg', '/gallery/mahe/3.jpg'],
      date: '3 Jun 2025',
      attendees: 40
    },
    {
      title: 'Launch Event',
      description: 'Launch event conducted at Hilite Mall, Kozhikode on 25th May 2025',
      images: ['/gallery/launch/1.jpg', '/gallery/launch/2.jpg', '/gallery/launch/3.jpg'],
      date: '25 May 2025'
    }
]


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpenSet(null)
      }
    }
    if (openSet) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openSet])

  useEffect(() => {
    const handleImageClickOutside = (e: MouseEvent) => {
      if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      document.addEventListener('mousedown', handleImageClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleImageClickOutside)
    }
  }, [selectedImage])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const scrollAmount = 248 * 4 + 40
      if (direction === 'right') {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      } else {
        if (container.scrollLeft === 0) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <section className="p-8 bg-gray-100">
      <h1 className="text-[#005AAC] text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-center mb-12">
        LifeLinER <span className="text-[#EE5A22]">In Action</span>
      </h1>

      <div className="relative px-4 md:px-12">
        <button
          onClick={() => scroll('left')}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 rotate-180 cursor-pointer"
        >
          <Image src="/arrow.svg" alt="Left" width={24} height={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth pb-5 scrollbar-hide py-2 px-2"
        >
          {sets.map((set, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 rounded-xl p-3 shadow hover:shadow-lg transition cursor-pointer bg-[#E0F5FE] hover:bg-[#D1EAFB] hover:scale-102 hover:translate-y-[-2px] duration-300 ease-in-out"
              onClick={() => setOpenSet(set)}
            >
            {set.date && (
              <div className="text-center text-sm text-[#EE5A22] font-medium mb-1">
                {set.date}
              </div>
            )}
              <h2 className="text-lg font-semibold mb-2 text-[#005AAC]">{set.title}</h2>
              <div className="grid grid-cols-2 gap-2">
                {set.images.slice(0, 4).map((src, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded">
                    <Image
                      src={src}
                      alt={`Preview ${idx}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <Image src="/arrow.svg" alt="Right" width={24} height={24} />
        </button>
      </div>

      {openSet && (
        <div className="fixed z-[9999] inset-0 bg-black/40 backdrop-blur-xl flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 relative custom-scrollbar"
          >
            <button
              onClick={() => setOpenSet(null)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>

            <div className="flex justify-between text-sm md:text-base font-semibold mb-1 text-[#EE5A22] px-6">
              <div>{openSet.date}</div>
              {openSet.attendees !== undefined && (
                <div>LifeLinERs Trained: {openSet.attendees}</div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-center text-[#005AAC]">{openSet.title}</h2>
            {openSet.description && (
              <p className="text-[#005AAC] text-center mt-1 mb-4 text-base font-medium">
                {openSet.description}
              </p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {openSet.images.map((src, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded">
                  <Image
                    src={src}
                    alt={`Image ${idx}`}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full z-510"
                    onClick={() => setSelectedImage(src)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
