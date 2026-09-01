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
      title: 'Krome Fitness, Athanikkal',
      description: 'BMH conducted a hands-on LifeLinER training session at Krome Fitness, Athanikkal.',
      images: ['/gallery/krome/1.jpeg', '/gallery/krome/2.jpeg', '/gallery/krome/3.jpeg', '/gallery/krome/4.jpeg'],
      date: '28 Aug 2026'
    },
    {
      title: 'Wellphy Medical Hub, Eranjipalam, Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Wellphy Medical Hub, Eranjipalam, Kozhikode.',
      images: ['/gallery/wellphy/1.jpeg', '/gallery/wellphy/2.jpeg', '/gallery/wellphy/3.jpeg', '/gallery/wellphy/4.jpeg', '/gallery/wellphy/5.jpeg'],
      date: '28 Aug 2026'
    },
    {
      title: 'Karuna Residence Association, NIT Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Karuna Residence Association, NIT Kozhikode.',
      images: ['/gallery/nitc4/1.jpeg', '/gallery/nitc4/2.jpeg'],
      date: '25 Aug 2026'
    },
    {
      title: 'AKKR School, Chelannur',
      description: 'BMH conducted a LifeLinER training session at AKKR School, Chelannur.',
      images: ['/gallery/akkr2/1.jpeg', '/gallery/akkr2/2.jpeg', '/gallery/akkr2/3.jpeg', '/gallery/akkr2/4.jpeg'],
      date: '24 Aug 2026'
    },
    {
      title: 'SNDP Gurumandiram, Iritty',
      description: 'BMH conducted a LifeLinER BLS training program at SNDP Gurumandiram, Iritty.',
      images: ['/gallery/sndp/1.jpeg', '/gallery/sndp/2.jpeg'],
      date: '24 Aug 2026'
    },
    {
      title: 'St. Joseph Hospital, Moolamattom',
      description: 'BMH conducted a LifeLinER training program led by Dr. Deuma for 48 participants at St. Joseph Hospital, Moolamattom, coordinated by Sona.',
      images: ['/gallery/moolamattom/1.jpeg', '/gallery/moolamattom/2.jpeg', '/gallery/moolamattom/3.jpeg'],
      date: '22 Aug 2026',
      attendees: 48
    },
    {
      title: 'St. Mary\'s Church, Thavinjal, Wayanad',
      description: 'BMH conducted a LifeLinER training session for 35 participants at St. Mary\'s Church, Thavinjal, Wayanad.',
      images: ['/gallery/stmarys2/1.jpeg', '/gallery/stmarys2/2.jpeg', '/gallery/stmarys2/3.jpeg', '/gallery/stmarys2/4.jpeg', '/gallery/stmarys2/5.jpeg', '/gallery/stmarys2/6.jpeg', '/gallery/stmarys2/7.jpeg'],
      date: '16 Aug 2026',
      attendees: 35
    },
    {
      title: 'Memunda Higher Secondary School',
      description: 'BMH conducted a LifeLinER Basic Life Support (BLS) training program focusing on hands-on CPR, first aid, and essential life-saving techniques at Memunda Higher Secondary School.',
      images: ['/gallery/memunda/1.jpeg', '/gallery/memunda/2.jpeg', '/gallery/memunda/3.jpeg', '/gallery/memunda/4.jpeg', '/gallery/memunda/5.jpeg', '/gallery/memunda/6.jpeg', '/gallery/memunda/7.jpeg'],
      date: '16 Aug 2026'
    },
    {
      title: 'Thennala',
      description: 'BMH conducted a LifeLinER training session for PTH members at Thennala.',
      images: ['/gallery/thennala/1.jpeg', '/gallery/thennala/2.jpeg', '/gallery/thennala/3.jpeg', '/gallery/thennala/4.jpeg', '/gallery/thennala/5.jpeg', '/gallery/thennala/6.jpeg'],
      date: '16 Aug 2026'
    },
    {
      title: 'Nochad Higher Secondary School',
      description: 'BMH conducted a LifeLinER training session at Nochad Higher Secondary School.',
      images: ['/gallery/nochad/1.jpg', '/gallery/nochad/2.jpg', '/gallery/nochad/3.jpg', '/gallery/nochad/4.jpg'],
      date: '30 Jul 2026'
    },
    {
      title: 'Eastern Company Ltd, Adimaly',
      description: 'BMH conducted a LifeLinER training program led by Dr. Deuma for 25 participants at Eastern Company Ltd, Adimaly, coordinated by Sona.',
      images: ['/gallery/eastern/1.jpg', '/gallery/eastern/2.jpg', '/gallery/eastern/3.jpg', '/gallery/eastern/4.jpg', '/gallery/eastern/5.jpg', '/gallery/eastern/6.jpg', '/gallery/eastern/7.jpg', '/gallery/eastern/8.jpg'],
      date: '28 Jul 2026',
      attendees: 25
    },
    {
      title: 'SYS Kuthuparamba Unit',
      description: 'BMH conducted a LifeLinER BLS training session at the SYS Kuthuparamba Unit.',
      images: ['/gallery/sys/1.jpeg', '/gallery/sys/2.jpeg', '/gallery/sys/3.jpeg', '/gallery/sys/4.jpeg'],
      date: '27 Jul 2026'
    },
    {
      title: 'Pavanathma College, Murickassery',
      description: 'BMH conducted a LifeLinER training program led by Dr. Gogul for 76 participants at Pavanathma College, Murickassery, coordinated by Sona.',
      images: ['/gallery/pavanathma/1.jpeg', '/gallery/pavanathma/2.jpeg', '/gallery/pavanathma/3.jpeg', '/gallery/pavanathma/4.jpeg', '/gallery/pavanathma/5.jpeg', '/gallery/pavanathma/6.jpeg', '/gallery/pavanathma/7.jpeg'],
      date: '25 Jul 2026',
      attendees: 76
    },
    {
      title: 'Moonlight LP School, Mundakkutty, Wayanad',
      description: 'BMH conducted a PEARL (Paediatric Emergency Awareness and Response Learning) training session led by paediatrician Dr. Febina for 122 parents and children at Moonlight LP School, Mundakkutty, Wayanad.',
      images: ['/gallery/pearl5/1.jpeg', '/gallery/pearl5/2.jpeg', '/gallery/pearl5/3.jpeg', '/gallery/pearl5/4.jpeg', '/gallery/pearl5/6.jpeg'],
      date: '23 Jul 2026',
      attendees: 122
    },
    {
      title: 'H.I.M Oxford English School, Vaduvanchal, Wayanad',
      description: 'BMH conducted a PEARL training session for 35 staff members and parents at H.I.M Oxford English School, Vaduvanchal, Wayanad.',
      images: ['/gallery/pearl4/1.jpeg', '/gallery/pearl4/2.jpeg', '/gallery/pearl4/3.jpeg', '/gallery/pearl4/4.jpeg', '/gallery/pearl4/5.jpeg', '/gallery/pearl4/6.jpeg'],
      date: '23 Jul 2026',
      attendees: 35
    },
    {
      title: 'GHSS East Hill',
      description: 'BMH conducted a LifeLinER training session at GHSS East Hill.',
      images: ['/gallery/easthill/1.jpeg', '/gallery/easthill/2.jpeg', '/gallery/easthill/3.jpeg', '/gallery/easthill/4.jpeg', '/gallery/easthill/5.jpeg'],
      date: '22 Jul 2026'
    },
    {
      title: 'Community Health Centre, Korome, Wayanad',
      description: 'BMH conducted a LifeLinER training session for 30 CHC staff members at Korome, Wayanad.',
      images: ['/gallery/korome2/1.jpeg', '/gallery/korome2/2.jpeg', '/gallery/korome2/3.jpeg', '/gallery/korome2/4.jpeg'],
      date: '20 Jul 2026',
      attendees: 30
    },    
    {
      title: 'Community Health Centre, Korome, Wayanad',
      description: 'BMH conducted a LifeLinER training session for 45 CHC staff members and Asha workers at Korome, Wayanad.',
      images: ['/gallery/korome/1.jpeg', '/gallery/korome/2.jpeg', '/gallery/korome/3.jpeg', '/gallery/korome/4.jpeg', '/gallery/korome/5.jpeg'],
      date: '20 Jul 2026',
      attendees: 45
    },
    {
      title: 'Kozhikode Town Police Station',
      description: 'BMH conducted a LifeLinER training session for police personnel at Kozhikode Town Police Station following its inauguration by City Police Commissioner Mr. Jayadev IPS.',
      images: ['/gallery/policeclt2/1.jpeg', '/gallery/policeclt2/2.jpeg', '/gallery/policeclt2/3.jpeg', '/gallery/policeclt2/4.jpeg'],
      date: '17 Jul 2026'
    },
    {
      title: 'Taj Resort, Wayanad',
      description: 'BMH conducted a LifeLinER training session for 30 staff members at Taj Resort, Wayanad.',
      images: ['/gallery/taj2/1.jpeg', '/gallery/taj2/2.jpeg', '/gallery/taj2/3.jpeg', '/gallery/taj2/4.jpeg', '/gallery/taj2/5.jpeg'],
      date: '15 Jul 2026',
      attendees: 30
    },
    {
      title: 'Department of Chemical Engineering, NIT Calicut',
      description: 'BMH conducted a LifeLinER training session for the Department of Chemical Engineering at NIT Calicut.',
      images: ['/gallery/nitc/1.jpeg', '/gallery/nitc/2.jpeg', '/gallery/nitc/3.jpeg', '/gallery/nitc/4.jpeg', '/gallery/nitc/5.jpeg', '/gallery/nitc/6.jpeg'],
      date: '13 Jul 2026'
    },
    {
      title: 'BMH Auditorium, Calicut',
      description: 'BMH conducted a LifeLinER BLS training session for 164 participants at the BMH Auditorium, in association with Mastered Academy Calicut.',
      images: ['/gallery/mastered/1.jpeg', '/gallery/mastered/2.jpeg', '/gallery/mastered/3.jpeg', '/gallery/mastered/4.jpeg'],
      date: '13 Jul 2026',
      attendees: 164
    },
    {
      title: 'Puthiyapalam Big Screen Auditorium',
      description: 'BMH conducted an interactive LifeLinER training session at the Puthiyapalam big screen auditorium for 250+ attendees during the FIFA World Cup screening. In addition, medical support was provided for the Argentina vs Egypt match.',
      images: ['/gallery/puthiyapalam/1.jpeg', '/gallery/puthiyapalam/2.jpeg', '/gallery/puthiyapalam/3.jpeg', '/gallery/puthiyapalam/4.jpeg', '/gallery/puthiyapalam/5.jpeg'],
      date: '07 Jul 2026',
      attendees: 250
    },
    {
      title: 'St. George Church, Puthuppadi, Thamarassery',
      description: 'BMH conducted a LifeLinER training session for 40 members of the general public at St. George Church, Puthuppadi, Thamarassery, in association with the COD Foundation.',
      images: ['/gallery/stgeorge2/1.jpeg', '/gallery/stgeorge2/2.jpeg', '/gallery/stgeorge2/3.jpeg', '/gallery/stgeorge2/4.jpeg', '/gallery/stgeorge2/5.jpeg'],
      date: '04 Jul 2026',
      attendees: 40
    },    
    {
      title: 'KSEB Mananthavady (Afternoon Session)',
      description: 'BMH successfully conducted the afternoon session of the LifeLinER training program for 78 KSEB employees at the Mananthavady Section.',
      images: ['/gallery/kseb6/1.jpeg', '/gallery/kseb6/2.jpeg', '/gallery/kseb6/3.jpeg', '/gallery/kseb6/4.jpeg', '/gallery/kseb6/5.jpeg'],
      date: '04 Jul 2026',
      attendees: 78
    },
    {
      title: 'KSEB Mananthavady',
      description: 'BMH conducted an interactive LifeLinER training program for 80 KSEB employees at the Mananthavady Section.',
      images: ['/gallery/kseb5/1.jpeg', '/gallery/kseb5/2.jpeg', '/gallery/kseb5/3.jpeg', '/gallery/kseb5/4.jpeg', '/gallery/kseb5/5.jpeg'],
      date: '04 Jul 2026',
      attendees: 80
    },
    {
      title: 'KHEP, Kakkayam',
      description: 'BMH conducted a LifeLinER BLS awareness session, featuring specialized demonstrations on log roll and choking management, at KHEP, Kakkayam.',
      images: ['/gallery/khep/1.jpeg', '/gallery/khep/2.jpeg', '/gallery/khep/3.jpeg', '/gallery/khep/4.jpeg', '/gallery/khep/5.jpeg'],
      date: '02 Jul 2026',
      attendees: 80
    },
    {
      title: 'KSEB Office, Omassery',
      description: 'BMH conducted a LifeLinER training session at the KSEB office in Omassery.',
      images: ['/gallery/kseb4/1.jpeg', '/gallery/kseb4/2.jpeg', '/gallery/kseb4/3.jpeg', '/gallery/kseb4/4.jpeg'],
      date: '30 Jun 2026'
    },
    {
      title: 'KSEB Office, Kodenchery',
      description: 'BMH conducted a LifeLinER training session at the KSEB office in Kodenchery.',
      images: ['/gallery/kseb3/1.jpeg', '/gallery/kseb3/2.jpeg', '/gallery/kseb3/3.jpeg', '/gallery/kseb3/4.jpeg'],
      date: '29 Jun 2026'
    },
    {
      title: 'Cherpulassery, Palakkad',
      description: 'BMH conducted a LifeLinER training session for 38 participants at Cherpulassery, Palakkad, in association with the Kerala Emergency Team Palakkad zone.',
      images: ['/gallery/cherpulassery/1.jpeg', '/gallery/cherpulassery/2.jpeg', '/gallery/cherpulassery/3.jpeg', '/gallery/cherpulassery/4.jpeg'],
      date: '29 Jun 2026',
      attendees: 38
    },
    {
      title: 'Alphonsa Hospital, Murickassery',
      description: 'BMH conducted a LifeLinER training program led by Dr. Kevin for 50 staff members at Alphonsa Hospital, Murickassery, coordinated by George and Sona.',
      images: ['/gallery/alphonsa3/1.jpeg', '/gallery/alphonsa3/2.jpeg', '/gallery/alphonsa3/3.jpeg', '/gallery/alphonsa3/4.jpeg', '/gallery/alphonsa3/5.jpeg'],
      date: '27 Jun 2026',
      attendees: 50
    },
    {
      title: 'MCS Hospital, Muvattupuzha',
      description: 'BMH conducted a LifeLinER training session at MCS Hospital, Muvattupuzha.',
      images: ['/gallery/mcs/1.jpeg', '/gallery/mcs/2.jpeg', '/gallery/mcs/3.jpeg', '/gallery/mcs/4.jpeg', '/gallery/mcs/5.jpeg', '/gallery/mcs/6.jpeg', '/gallery/mcs/7.jpeg', '/gallery/mcs/8.jpeg'],
      date: '25 Jun 2026',
      attendees: 28
    },
    {
      title: 'Taj Gateway, Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Taj Gateway, Kozhikode.',
      images: ['/gallery/taj/1.jpeg', '/gallery/taj/2.jpeg', '/gallery/taj/3.jpeg', '/gallery/taj/4.jpeg'],
      date: '23 Jun 2026'
    },
    {
      title: 'Mullenkolly, Pulpally, Wayanad',
      description: 'BMH conducted a LifeLinER training session for the general public at Mullenkolly, Pulpally, Wayanad, in association with AIMSWAY Foundation.',
      images: ['/gallery/aimsway6/1.jpeg', '/gallery/aimsway6/2.jpeg', '/gallery/aimsway6/3.jpeg', '/gallery/aimsway6/4.jpeg', '/gallery/aimsway6/5.jpeg'],
      date: '22 Jun 2026',
      attendees: 30
    },
    {
      title: 'PHC Tanur',
      description: 'BMH conducted a LifeLinER training session at PHC Tanur.',
      images: ['/gallery/phc/1.jpeg', '/gallery/phc/2.jpeg', '/gallery/phc/3.jpeg', '/gallery/phc/4.jpeg'],
      date: '22 Jun 2026'
    },
    {
      title: 'Padichira, Pulpally, Wayanad',
      description: 'BMH conducted a LifeLinER training session for the general public at Padichira, Pulpally, Wayanad, in association with AIMSWAY Foundation.',
      images: ['/gallery/aimsway5/1.jpeg', '/gallery/aimsway5/2.jpeg', '/gallery/aimsway5/3.jpeg', '/gallery/aimsway5/4.jpeg'],
      date: '20 Jun 2026',
      attendees: 40
    },
    {
      title: 'Murikasery Gramapanchayath',
      description: 'BMH conducted a LifeLinER training session led by Dr. Kevin for the RRT Team at Murikasery Gramapanchayath, coordinated by Ans Skaria.',
      images: ['/gallery/rrt/1.jpeg', '/gallery/rrt/2.jpeg', '/gallery/rrt/3.jpeg', '/gallery/rrt/4.jpeg', '/gallery/rrt/5.jpeg', '/gallery/rrt/6.jpeg', '/gallery/rrt/7.jpeg'],
      date: '20 Jun 2026',
      attendees: 48
    },
    {
      title: 'Kenichira, Wayanad',
      description: 'BMH conducted a LifeLinER training session for SC/ST coordinators, panchayat staff, and the general public at Kenichira, Wayanad, in association with AIMSWAY Foundation.',
      images: ['/gallery/aimsway4/1.jpeg', '/gallery/aimsway4/2.jpeg', '/gallery/aimsway4/3.jpeg', '/gallery/aimsway4/4.jpeg'],
      date: '18 Jun 2026',
      attendees: 40
    },
    {
      title: 'Meppadi, Wayanad',
      description: 'BMH conducted a LifeLinER training session for the general public at Meppadi, Wayanad, in association with AIMSWAY Foundation.',
      images: ['/gallery/aimsway3/1.jpeg', '/gallery/aimsway3/2.jpeg', '/gallery/aimsway3/3.jpeg', '/gallery/aimsway3/4.jpeg', '/gallery/aimsway3/5.jpeg'],
      date: '17 Jun 2026',
      attendees: 30
    },
    {
      title: 'Koothattukulam Fire & Rescue',
      description: 'BMH conducted a LifeLinER training session led by Dr. Joel Rajen at Koothattukulam Fire & Rescue, coordinated by Ans Skaria.',
      images: ['/gallery/koothattukulam/1.jpeg', '/gallery/koothattukulam/2.jpeg', '/gallery/koothattukulam/3.jpeg', '/gallery/koothattukulam/4.jpeg'],
      date: '17 Jun 2026',
      attendees: 29
    },
     {
      title: 'AIMSWAY Foundation',
      description: 'BMH conducted a LifeLinER BLS training program session Associated with AIMSWAY Foundation at Puthussery, Mananthavady for CDS & Kudumbasree Members',
      images: ['/gallery/aimsway2/1.jpeg', '/gallery/aimsway2/2.jpeg', '/gallery/aimsway2/3.jpeg', '/gallery/aimsway2/4.jpeg', '/gallery/aimsway2/5.jpeg'],
      date: '13 Jun 2026',
      attendees: 35
    },
    {
      title: 'Matter Lab',
      description: 'BMH conducted a LifeLinER BLS training program at Matter Lab.',
      images: ['/gallery/matter/1.jpeg', '/gallery/matter/2.jpeg', '/gallery/matter/3.jpeg', '/gallery/matter/4.jpeg'],
      date: '09 Jun 2026'
    },
    {
      title: 'Sevabharathi Kottooli Unit',
      description: 'BMH conducted a LifeLinER training session at Sevabharathi Kottooli Unit.',
      images: ['/gallery/sevabharathi/1.jpeg', '/gallery/sevabharathi/2.jpeg', '/gallery/sevabharathi/3.jpeg', '/gallery/sevabharathi/4.jpeg'],
      date: '07 Jun 2026'
    },
    {
      title: 'Sneha Hospital, Kenichira, Wayanad',
      description: 'BMH conducted a medical camp at Sneha Hospital, Kenichira, Wayanad.',
      images: ['/gallery/sneha/1.jpeg', '/gallery/sneha/2.jpeg', '/gallery/sneha/3.jpeg', '/gallery/sneha/4.jpeg'],
      date: '07 Jun 2026'
    },  
    {
      title: 'St. Joseph Church, Vythiri',
      description: 'BMH conducted a LifeLinER training session for the general public at St. Joseph Church, Vythiri, in association with Jeevana (Calicut Diocese Social Service Society).',
      images: ['/gallery/jeevana/1.jpeg', '/gallery/jeevana/2.jpeg', '/gallery/jeevana/3.jpeg', '/gallery/jeevana/4.jpeg', '/gallery/jeevana/5.jpeg', '/gallery/jeevana/6.jpeg'],
      date: '04 Jun 2026',
      attendees: 40
    },
    {
      title: "St. Mary's Church, Kalluvayal",
      description: "BMH conducted a LifeLinER training session for catechism students at St. Mary's Church, Kalluvayal.",
      images: ['/gallery/stmarys/1.jpeg', '/gallery/stmarys/2.jpeg', '/gallery/stmarys/3.jpeg', '/gallery/stmarys/4.jpeg', '/gallery/stmarys/5.jpeg', '/gallery/stmarys/6.jpeg'],
      date: '31 May 2026',
      attendees: 70
    },
    {
      title: 'Inhouse Lifeliner',
      description: 'BMH conducted an in-house LifeLinER training session led by Dr. Kevin.',
      images: ['/gallery/inhouse2/1.jpeg', '/gallery/inhouse2/2.jpeg', '/gallery/inhouse2/3.jpeg', '/gallery/inhouse2/4.jpeg', '/gallery/inhouse2/5.jpeg', '/gallery/inhouse2/6.jpeg', '/gallery/inhouse2/7.jpeg'],
      date: '29 May 2026',
      attendees: 36
    },
    {
      title: 'Orkla India Ltd., Kothamangalam',
      description: 'BMH conducted a LifeLinER training session at Orkla India Ltd., Kothamangalam.',
      images: ['/gallery/orkla2/1.jpeg', '/gallery/orkla2/2.jpeg', '/gallery/orkla2/3.jpeg', '/gallery/orkla2/4.jpeg', '/gallery/orkla2/5.jpeg'],
      date: '27 May 2026',
      attendees: 33
    },
    {
      title: 'Kavitha Library and Arts, Thokkupara',
      description: 'BMH conducted a LifeLinER training session at Kavitha Library and Arts, Thokkupara.',
      images: ['/gallery/kavitha/1.jpeg', '/gallery/kavitha/2.jpeg', '/gallery/kavitha/3.jpeg', '/gallery/kavitha/4.jpeg', '/gallery/kavitha/5.jpeg', '/gallery/kavitha/6.jpeg', '/gallery/kavitha/7.jpeg'],
      date: '24 May 2026',
      attendees: 34
    },
    {
      title: "St. Joseph's Boys School, Pulloorampara",
      description: "BMH conducted a LifeLinER training session at St. Joseph's Boys School, Pulloorampara.",
      images: ['/gallery/stjoseph2/1.jpeg', '/gallery/stjoseph2/2.jpeg', '/gallery/stjoseph2/3.jpeg', '/gallery/stjoseph2/4.jpeg', '/gallery/stjoseph2/5.jpeg'],
      date: '23 May 2026'
    },
    {
      title: 'Aimsway Development Society, Meenangadi',
      description: 'Successfully completed the LifeLinER program in association with Aimsway Development Society at Meenangadi.',
      images: ['/gallery/aimsway/1.jpeg', '/gallery/aimsway/2.jpeg', '/gallery/aimsway/3.jpeg', '/gallery/aimsway/4.jpeg'],
      date: '20 May 2026',
      attendees: 30
    },
    {
      title: 'Mastered Academy, Calicut',
      description: 'BMH successfully conducted a LifeLinER training session for Mastered Academy students from Calicut at our Auditorium.',
      images: ['/gallery/masc/1.jpeg', '/gallery/masc/2.jpeg', '/gallery/masc/3.jpeg', '/gallery/masc/4.jpeg', '/gallery/masc/5.jpeg', '/gallery/masc/6.jpeg', '/gallery/masc/7.jpeg'],
      date: '19 May 2026',
      attendees: 83
    },
    {
      title: 'Arrown Academy, Calicut',
      description: 'BMH successfully conducted a LifeLinER training session at Arrown Academy, Calicut.',
      images: ['/gallery/arrown/1.jpeg', '/gallery/arrown/2.jpeg', '/gallery/arrown/3.jpeg', '/gallery/arrown/4.jpeg', '/gallery/arrown/5.jpeg'],
      date: '18 May 2026',
      attendees: 50
    },
    {
      title: 'Unity Residence Association, Nariyottumchal',
      description: 'BMH successfully conducted a LifeLinER training session at the Unity Residence Association, Nariyottumchal.',
      images: ['/gallery/unity/1.jpeg', '/gallery/unity/2.jpeg', '/gallery/unity/3.jpeg', '/gallery/unity/4.jpeg'],
      date: '1`5 May 2026'
    },
    {
      title: 'Koodaranji Program',
      description: 'LifeLinER training at Koodaranji Grama Panchayat',
      images: ['/gallery/koodaranji2/1.jpg', '/gallery/koodaranji2/2.jpg', '/gallery/koodaranji2/3.jpg', '/gallery/koodaranji2/4.jpg', '/gallery/koodaranji2/5.jpg'],
      date: '12 May 2026'
    },  
    {
      title: 'EMS Hospital, Mukkam',
      description: 'BMH conducted a LifeLinER training session for Nurses, Staff, and Doctors at EMS Hospital Mukkam, with 43 participants.',
      images: ['/gallery/ems/1.jpeg', '/gallery/ems/2.jpeg', '/gallery/ems/3.jpeg'],
      date: '07 May 2026',
      attendees: 43
    },
    {
      title: 'LENSFED Tower',
      description: 'BMH conducted a LifeLinER training session and a balanced diet awareness talk for the Licensed Engineers and Supervisors Federation (LENSFED), with around 60 construction workers participating.',
      images: ['/gallery/lensfed/1.jpeg', '/gallery/lensfed/2.jpeg', '/gallery/lensfed/3.jpeg', '/gallery/lensfed/4.jpeg', '/gallery/lensfed/5.jpeg'],
      date: '01 May 2026',
      attendees: 60
    },
    {
      title: 'DIET Campus, Sulthan Bathery',
      description: 'BMH successfully conducted a LifeLinER training session for TTC students at the DIET Campus, Sulthan Bathery, with 32 participants.',
      images: ['/gallery/ttc/1.jpeg', '/gallery/ttc/2.jpeg', '/gallery/ttc/3.jpeg', '/gallery/ttc/4.jpeg', '/gallery/ttc/5.jpeg', '/gallery/ttc/6.jpeg', '/gallery/ttc/7.jpeg', '/gallery/ttc/8.jpeg'],
      date: '29 Apr 2026',
      attendees: 32
    },
    {
      title: 'Devagiri Public School',
      description: 'BMH successfully conducted a LifeLinER training session for the teachers and officials of Devagiri Public School.',
      images: ['/gallery/devagiri/1.jpeg', '/gallery/devagiri/2.jpeg', '/gallery/devagiri/3.jpeg', '/gallery/devagiri/4.jpeg', '/gallery/devagiri/5.jpeg'],
      date: '28 Apr 2026',
      attendees: 125
    },
    {
      title: 'Disaster Management Team',
      description: 'BMH successfully conducted a specialized LifeLinER training session for the Disaster Management Team.',
      images: ['/gallery/disaster/1.jpeg', '/gallery/disaster/2.jpeg', '/gallery/disaster/3.jpeg', '/gallery/disaster/4.jpeg', '/gallery/disaster/5.jpeg'],
      date: '28 Apr 2026'
    },
    {
      title: 'KSEB Lower Periyar, Karimanal',
      description: 'BMH successfully conducted a LifeLinER training session at KSEB Lower Periyar, Karimanal, with 40 participants.',
      images: ['/gallery/kseb2/1.jpeg', '/gallery/kseb2/2.jpeg', '/gallery/kseb2/3.jpeg', '/gallery/kseb2/4.jpeg'],
      date: '07 Apr 2026',
      attendees: 40
    },
    {
      title: 'KSEB PETARC, Moolamattom',
      description: 'BMH successfully conducted a LifeLinER training session at KSEB PETARC, Moolamattom, with 65 participants.',
      images: ['/gallery/kseb/1.jpeg', '/gallery/kseb/2.jpeg', '/gallery/kseb/3.jpeg', '/gallery/kseb/4.jpeg'],
      date: '01 Apr 2026',
      attendees: 65
    },
    {
      title: 'Chaithanya Club, Illamoola, Mattannur',
      description: 'BMH conducted a LifeLinER BLS training programme in association with Chaithanya Club, Illamoola, Mattannur.',
      images: ['/gallery/chaithanya/1.jpeg', '/gallery/chaithanya/2.jpeg', '/gallery/chaithanya/3.jpeg', '/gallery/chaithanya/4.jpeg'],
      date: '30 Mar 2026'
    },
    {
      title: 'Idukki District Fire and Rescue Office',
      description: 'BMH successfully conducted a LifeLinER training session and Privilege Card distribution at the Idukki District Fire and Rescue Office, coordinated by Mr. Sarath with 26 participants.',
      images: ['/gallery/fire2/1.jpeg', '/gallery/fire2/2.jpeg', '/gallery/fire2/3.jpeg', '/gallery/fire2/4.jpeg'],
      date: '29 Mar 2026',
      attendees: 26
    },
    {
      title: 'KAIROS Institution, Thodupuzha',
      description: 'BMH successfully conducted a LifeLinER training session at KAIROS Institution, Thodupuzha. The session was coordinated by Mr. Arjun and saw active participation from 30 members.',
      images: ['/gallery/kairos/1.jpeg', '/gallery/kairos/2.jpeg', '/gallery/kairos/3.jpeg', '/gallery/kairos/4.jpeg'],
      date: '27 Mar 2026',
      attendees: 30
    },
    {
      title: 'Central Jail, Kannur - Staff BLS Training',
      description: 'BMH conducted a LifeLinER BLS training programme for the staff of Kannur Central Jail in association with Rotary Club, Kannur.',
      images: ['/gallery/jail5/1.jpeg', '/gallery/jail5/2.jpeg', '/gallery/jail5/3.jpeg', '/gallery/jail5/4.jpeg', '/gallery/jail5/5.jpeg', '/gallery/jail5/6.jpeg'],
      date: '26 Mar 2026'
    },
    {
      title: 'St. Alphonsa Public School',
      description: 'BMH successfully conducted a LifeLinER training session at St. Alphonsa Public School.',
      images: ['/gallery/alphonsa2/1.jpeg', '/gallery/alphonsa2/2.jpeg', '/gallery/alphonsa2/3.jpeg', '/gallery/alphonsa2/4.jpeg'],
      date: '25 Mar 2026',
      attendees: 124
    },
    {
      title: 'Care Land Hospital - Clinical Training',
      description: 'BMH conducted a LifeLinER training session at Care Land Hospital, focusing on clinical training for employees. The session, led by Ms. Navya (Emergency Medicine) and initiated by Mr. Praveen, emphasized emergency handling in polytrauma cases.',
      images: ['/gallery/care/1.jpeg', '/gallery/care/2.jpeg', '/gallery/care/3.jpeg', '/gallery/care/4.jpeg', '/gallery/care/5.jpeg'],
      date: '18 Mar 2026',
      attendees: 60
    },
    {
      title: 'MVD Office, Adimaly - Truck Drivers Training',
      description: 'BMH successfully conducted a LifeLinER training session for truck drivers at the MVD Office, Adimaly.',
      images: ['/gallery/adimaly2/1.jpeg', '/gallery/adimaly2/2.jpeg', '/gallery/adimaly2/4.jpeg', '/gallery/adimaly2/5.jpeg'],
      date: '07 Mar 2026',
      attendees: 40
    },
    {
      title: 'Eastern Orkla MTR Food Pvt Ltd, Adimaly',
      description: 'BMH successfully conducted a LifeLinER training session at Eastern Orkla MTR Food Private Ltd, Adimaly.',
      images: ['/gallery/orkla/1.jpeg', '/gallery/orkla/2.jpeg', '/gallery/orkla/3.jpeg', '/gallery/orkla/4.jpeg', '/gallery/orkla/5.jpeg', '/gallery/orkla/6.jpeg'],
      date: '07 Mar 2026',
      attendees: 36
    },
    {
      title: 'The Eye Foundation Hospital',
      description: 'BMH successfully conducted a LifeLinER training session at The Eye Foundation Hospital.',
      images: ['/gallery/eyef/1.jpeg', '/gallery/eyef/2.jpeg', '/gallery/eyef/3.jpeg'],
      date: '05 Mar 2026'
    },
    {
      title: 'Central Jail, Kannur - Staff BLS Training',
      description: 'BMH successfully conducted a LifeLinER BLS training programme for the staff of Kannur Central Jail in association with Rotary Club, Kannur.',
      images: ['/gallery/jail4/1.jpeg', '/gallery/jail4/2.jpeg', '/gallery/jail4/3.jpeg', '/gallery/jail4/4.jpeg'],
      date: '05 Mar 2026',
      attendees: 60
    },
    {
      title: 'Kannur RTO Office - Auto Drivers',
      description: 'BMH conducted a LifeLinER BLS training programme for auto drivers at the Kannur RTO office in association with Rotary Club, Kannur.',
      images: ['/gallery/rto/1.jpeg', '/gallery/rto/2.jpeg', '/gallery/rto/3.jpeg', '/gallery/rto/4.jpeg', '/gallery/rto/5.jpeg'],
      date: '04 Mar 2026',
      attendees: 45
    },
    {
      title: 'Kozhikode Collectorate',
      description: 'BMH conducted a LifeLinER & PEARL training session at the Kozhikode Collectorate. The program was inaugurated by Sree Snehil Kumar Singh (District Collector of Kozhikode) and led by Dr. Febna Rahman (Consultant Pediatrics) and Dr. Abid (Emergency Medicine).',
      images: ['/gallery/collectorate/1.jpeg', '/gallery/collectorate/2.jpeg', '/gallery/collectorate/3.jpeg', '/gallery/collectorate/4.jpeg'],
      date: '21 Feb 2026',
      attendees: 56
    },
    {
      title: 'Central Jail, Kannur',
      description: 'BMH conducted a LifeLinER BLS training programme for the staff of Kannur Central Jail in association with Rotary Club, Kannur.',
      images: ['/gallery/jail3/1.jpeg', '/gallery/jail3/2.jpeg', '/gallery/jail3/3.jpeg', '/gallery/jail3/4.jpeg'],
      date: '19 Feb 2026'
    },
    {
      title: 'Thillenkeri',
      description: 'BMH successfully conducted a LifeLinER BLS training programme combined with Ekatha Swayam Sahaya Sangham and Priyadarshini Arts and Sports Club, Thillenkeri.',
      images: ['/gallery/thillenkeri/1.jpeg'],
      date: '15 Feb 2026'
    },
    {
      title: 'Chest Club, Kannur - Oncology CME Talk',
      description: 'LifeLinER CME talk on Oncology conducted for the Chest Club by Dr. Vishnu Santhosh in Kannur.',
      images: ['/gallery/oncology/1.jpeg'],
      date: '13 Feb 2026'
    },
    {
      title: 'Priest Academy, Sulthan Bathery',
      description: 'BMH successfully conducted a LifeLinER training session at Priest Academy, Sulthan Bathery, for both students and faculty.',
      images: ['/gallery/priest/1.jpeg', '/gallery/priest/2.jpeg', '/gallery/priest/3.jpeg', '/gallery/priest/4.jpeg'],
      date: '13 Feb 2026',
      attendees: 35
    },
    {
      title: 'Thodupuzha yude OPPAM - Municipal Hall',
      description: 'BMH successfully conducted a LifeLinER training session at Thodupuzha Municipal Hall in association with the MVD and Auto Drivers as part of the “Thodupuzha yude OPPAM” initiative.',
      images: ['/gallery/mvd/1.jpeg', '/gallery/mvd/2.jpeg', '/gallery/mvd/3.jpeg', '/gallery/mvd/4.jpeg', '/gallery/mvd/5.jpeg', '/gallery/mvd/6.jpeg'],
      date: '13 Feb 2026',
      attendees: 102
    },
    {
      title: 'Yeldho Mar Baselios College, Kothamangalam',
      description: 'BMH successfully conducted a LifeLinER training session at Yeldho Mar Baselios College, Kothamangalam, as part of the community CPR literacy initiative.',
      images: ['/gallery/eldho/1.jpeg', '/gallery/eldho/2.jpeg', '/gallery/eldho/3.jpeg', '/gallery/eldho/4.jpeg', '/gallery/eldho/5.jpeg', '/gallery/eldho/6.jpeg'],
      date: '09 Feb 2026',
      attendees: 34
    },
    {
      title: 'Physiotherapists of Kannur District',
      description: 'BMH conducted a specialized LifeLinER BLS training session for Physiotherapists of Kannur District.',
      images: ['/gallery/physio/1.jpeg', '/gallery/physio/2.jpeg', '/gallery/physio/3.jpeg', '/gallery/physio/4.jpeg'],
      date: '08 Feb 2025'
    },
    {
      title: 'Kargil Residence Association, Mele Chovva',
      description: 'BMH conducted a LifeLinER BLS training session at Kargil Residence Association, Mele Chovva.',
      images: ['/gallery/kargil/1.jpeg', '/gallery/kargil/2.jpeg', '/gallery/kargil/3.jpeg', '/gallery/kargil/4.jpeg', '/gallery/kargil/5.jpeg'],
      date: '08 Feb 2025'
    },
    {
      title: 'Snehakkoottam Association',
      description: 'BMH successfully conducted a LifeLinER training session in association with Snehakkoottam.',
      images: ['/gallery/snehakoottam/1.jpeg', '/gallery/snehakoottam/2.jpeg', '/gallery/snehakoottam/3.jpeg', '/gallery/snehakoottam/4.jpeg'],
      date: '07 Feb 2025'
    },
    {
      title: 'Sreepuram School',
      description: 'BMH conducted a LifeLinER awareness talk at Sreepuram School.',
      images: ['/gallery/sreepuram/1.jpeg', '/gallery/sreepuram/2.jpeg', '/gallery/sreepuram/3.jpeg', '/gallery/sreepuram/4.jpeg'],
      date: '07 Feb 2025'
    },
    {
      title: 'Oruma Resident Association, Chala',
      description: 'BMH successfully conducted a LifeLinER medical camp in association with Oruma Resident Association in Chala.',
      images: ['/gallery/oruma/1.jpeg', '/gallery/oruma/2.jpeg'],
      date: '01 Feb 2025'
    },
    {
      title: 'Govt ITI Cheruvathur',
      description: 'LifeLinER BLS training programme and BMH Payyanur community connect at Govt ITI Cheruvathur.',
      images: ['/gallery/cheruvathur/1.jpeg', '/gallery/cheruvathur/2.jpeg', '/gallery/cheruvathur/3.jpeg', '/gallery/cheruvathur/4.jpeg'],
      date: '28 Jan 2025'
    },
    {
      title: 'Wellness One Clinic',
      description: 'BMH successfully conducted LifeLinER and PEARL training sessions at Wellness One Clinic.',
      images: ['/gallery/pearl3/1.jpeg', '/gallery/pearl3/2.jpeg', '/gallery/pearl3/3.jpeg', '/gallery/pearl3/4.jpeg'],
      date: '28 Jan 2025',
      attendees: 45
    },
    {
      title: 'Kerala Academy of Engineering',
      description: 'BMH conducted a LifeLinER training session at Kerala Academy of Engineering, Sulthan Bathery for students and management.',
      images: ['/gallery/kae/1.jpeg', '/gallery/kae/2.jpeg', '/gallery/kae/3.jpeg', '/gallery/kae/4.jpeg', '/gallery/kae/5.jpeg', '/gallery/kae/6.jpeg'],
      date: '28 Jan 2025',
      attendees: 100
    },
    {
      title: 'ALP School Mandamkavu',
      description: 'BMH successfully conducted a LifeLinER training session at ALP School Mandamkavu',
      images: ['/gallery/alp/1.jpeg', '/gallery/alp/2.jpeg', '/gallery/alp/3.jpeg', '/gallery/alp/4.jpeg'],
      date: '21 Jan 2025',
      attendees: 45
    },
    {
      title: 'Rahmaniya Public School, Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Rahmaniya Public School, Kozhikode',
      images: ['/gallery/rahmaniya2/1.jpeg', '/gallery/rahmaniya2/2.jpeg', '/gallery/rahmaniya2/3.jpeg', '/gallery/rahmaniya2/4.jpeg'],
      date: '19 Jan 2025',
      attendees: 65
    },
    {
      title: 'Indian Institute of Management (IIM)',
      description: 'BMH successfully conducted a LifeLinER training session at the Indian Institute of Management (IIM) as part of the Backwaters Annual Business Summit. As the official Health Partner for the summit',
      images: ['/gallery/iim/1.jpeg', '/gallery/iim/2.jpeg', '/gallery/iim/3.jpeg'],
      date: '16 Jan 2025',
      attendees: 100
    },
    {
      title: 'Fire & Rescue Department, Thodupuzha',
      description: 'BMH successfully conducted a LifeLinER training session at Fire & Rescue Department, Thodupuzha',
      images: ['/gallery/fire/1.jpeg', '/gallery/fire/2.jpeg'],
      date: '15 Jan 2025',
      attendees: 15
    },
    {
      title: 'Central Jail, Kannur',
      description: 'LifeLinER training session for central jail employees in association with rotary club Kannur',
      images: ['/gallery/jail2/1.jpeg', '/gallery/jail2/2.jpeg', '/gallery/jail2/3.jpeg'],
      date: '14 Jan 2025',
      attendees: 60
    },
    {
      title: 'Govt polytechnic College, Mattannur',
      description: 'LifeLinER BLS training programme and BMH community connect in association with Govt polytechnic college, Mattannur',
      images: ['/gallery/mattannur2/1.jpeg', '/gallery/mattannur2/2.jpeg', '/gallery/mattannur2/3.jpeg', '/gallery/mattannur2/4.jpeg', '/gallery/mattannur2/5.jpeg', '/gallery/mattannur2/6.jpeg'],
      date: '13 Jan 2025',
      attendees: 65
    },
    {
      title: 'Zoology teachers association, Calicut',
      description: 'LifeLinER training session for Calicut Zoology teachers association held at BMH',
      images: ['/gallery/zoology/1.jpeg', '/gallery/zoology/2.jpeg', '/gallery/zoology/3.jpeg', '/gallery/zoology/4.jpeg'],
      date: '13 Jan 2025',
      attendees: 39
    },
    {
      title: 'Athirukalkkappuram',
      description: 'Inauguration of market space for Special schools by CEO and first sales by Dr Jyothiprasanth as part of “Athirukalkkappuram”(അതിരുകൾക്കപ്പുറം) campaign',
      images: ['/gallery/jaycee/1.jpeg', '/gallery/jaycee/2.jpeg', '/gallery/jaycee/3.jpeg'],
      date: '13 Jan 2025'
    },
    {
      title: 'Kayani Gramaseva Samithi',
      description: 'LifelinER BLS training programme combined with Kayani Gramaseva Samithi',
      images: ['/gallery/gramaseva/1.jpeg', '/gallery/gramaseva/2.jpeg', '/gallery/gramaseva/3.jpeg', '/gallery/gramaseva/4.jpeg', '/gallery/gramaseva/5.jpeg'],
      date: '12 Jan 2025'
    },
    {
      title: 'Wings Aviation, Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Wings Aviation, Kozhikode',
      images: ['/gallery/wings/1.jpeg'],
      date: '12 Jan 2025',
      attendees: 40
    },
    {
      title: 'CH Center, Vavoor',
      description: 'BMH conducted a LifeLinER training session at CH Center Vavoor',
      images: ['/gallery/chcenter/1.jpeg', '/gallery/chcenter/2.jpeg', '/gallery/chcenter/3.jpeg', '/gallery/chcenter/4.jpeg', '/gallery/chcenter/5.jpeg'],
      date: '12 Jan 2025',
      attendees: 54
    },
    {
      title: 'Venduttayi',
      description: 'LifelinER medical camp combined with yuvarashmi arts and sport\'s club Venduttayi',
      images: ['/gallery/venduttayi/1.jpeg', '/gallery/venduttayi/2.jpeg', '/gallery/venduttayi/3.jpeg', '/gallery/venduttayi/4.jpeg'],
      date: '11 Jan 2025'
    },
    {
      title: 'Lions Club, Kannur',
      description: 'LifeLinER medical partner in association with lions club of kannur fort city for paralympic sports',
      images: ['/gallery/lionsclub/1.jpeg', '/gallery/lionsclub/2.jpeg', '/gallery/lionsclub/3.jpeg'],
      date: '10 Jan 2025'
    },
    {
      title: 'Kannur Diocese ENT Camp',
      description: 'ENT camp for Kairose (Kannur diocese)',
      images: ['/gallery/kannur5/1.jpeg', '/gallery/kannur5/2.jpeg'],
      date: '02 Jan 2025'
    },
    {
      title: 'Karate academy at Muzhapilangad',
      description: 'BMH conducted a LifeLinER training session for Karate academy at Muzhapilangad',
      images: ['/gallery/karate/1.jpeg', '/gallery/karate/2.jpeg'],
      date: '02 Jan 2025',
      attendees: 45
    },
    {
      title: 'Sunrise College, Kuttoor',
      description: 'BMH conducted a LifeLinER training session for  NSS Students of Sunrise College, Kuttoor',
      images: ['/gallery/kuttoor/1.jpeg', '/gallery/kuttoor/2.jpeg', '/gallery/kuttoor/3.jpeg', '/gallery/kuttoor/4.jpeg'],
      date: '02 Jan 2025'
    },
    {
      title: 'Vimalagiri HSS Vazhathoppu',
      description: 'BMH conducted a LifeLinER training session at Vimalagiri HSS Vazhathoppu',
      images: ['/gallery/vimalagiri/1.jpeg', '/gallery/vimalagiri/2.jpeg', '/gallery/vimalagiri/3.jpeg', '/gallery/vimalagiri/4.jpeg', '/gallery/vimalagiri/5.jpeg'],
      date: '31 Dec 2025',
      attendees: 43
    },
    {
      title: 'Karannur LP School',
      description: 'BMH conducted a LifeLinER training session for NSS volunteers of IHRD Thiruthiyad as part of a 7-day camp program held at Karannur LP School',
      images: ['/gallery/karannur/1.jpeg', '/gallery/karannur/2.jpeg', '/gallery/karannur/3.jpeg'],
      date: '30 Dec 2025',
      attendees: 51
    },
    {
      title: 'Cherupuzha',
      description: 'Medical Camp at Cherupuzha',
      images: ['/gallery/cherupuzha/1.jpeg', '/gallery/cherupuzha/2.jpeg', '/gallery/cherupuzha/3.jpeg'],
      date: '30 Dec 2025'
    },
    {
      title: 'Central Jail, Kannur',
      description: 'BMH conducted a LifeLinER training session for Central Jail inmates and community connect Privilege card distrubtion for the jail employees',
      images: ['/gallery/jail/1.jpeg', '/gallery/jail/2.jpeg'],
      date: '30 Dec 2025',
      attendees: 75
    },
    {
      title: 'GVHSS Nadakkavu',
      description: 'BMH conducted a LifeLinER training session for NSS Volunteers at GVHSS Nadakkavu',
      images: ['/gallery/gvhss2/1.jpeg', '/gallery/gvhss2/2.jpeg', '/gallery/gvhss2/3.jpeg', '/gallery/gvhss2/4.jpeg'],
      date: '29 Dec 2025',
      attendees: 49
    },
     {
      title: 'St. John Baptist Church, Chettiamparambu',
      description: 'A Health Awareness Talk and Medical Camp was conducted at St. John Baptist Church, Chettiamparambu, Kelakam, in association with the Nirmalagiri NSS Unit',
      images: ['/gallery/kelakam/1.jpeg', '/gallery/kelakam/2.jpeg', '/gallery/kelakam/3.jpeg', '/gallery/kelakam/4.jpeg', '/gallery/kelakam/5.jpeg'],
      date: '28 Dec 2025',
      attendees: 63
    },
    {
      title: 'GVHSS Meenchanda',
      description: 'BMH conducted a LifeLinER training session at GVHSS Meenchanda',
      images: ['/gallery/gvhss/1.jpeg', '/gallery/gvhss/2.jpeg', '/gallery/gvhss/3.jpeg', '/gallery/gvhss/4.jpeg'],
      date: '27 Dec 2025',
      attendees: 58
    },
    {
      title: 'AKKR Girls HSS Chelannur',
      description: 'BMH conducted a LifeLinER training session at AKKR Girls HSS Chelannur',
      images: ['/gallery/akkr/1.jpeg', '/gallery/akkr/2.jpeg', '/gallery/akkr/3.jpeg', '/gallery/akkr/4.jpeg'],
      date: '24 Dec 2025',
      attendees: 86
    },
    {
      title: 'Thalassery',
      description: 'KOM and Insurance agents meet up at Thalassery',
      images: ['/gallery/thalassery3/1.jpeg', '/gallery/thalassery3/2.jpeg'],
      date: '18 Dec 2025',
      attendees: 42
    },
    {
      title: 'Rajakkad Medical Center',
      description: 'BMH conducted a LifeLinER training session at Rajakkad Medical Center',
      images: ['/gallery/rajakkad2/1.jpeg', '/gallery/rajakkad2/2.jpeg', '/gallery/rajakkad2/3.jpeg', '/gallery/rajakkad2/4.jpeg', '/gallery/rajakkad2/5.jpeg', '/gallery/rajakkad2/6.jpeg', '/gallery/rajakkad2/7.jpeg'],
      date: '18 Dec 2025', 
      attendees: 70
    },
    {
      title: 'IHRD College, Pinarayi',
      description: 'BMH conducted a LifeLinER training session at IHRD College, Pinarayi',
      images: ['/gallery/ihrd2/1.jpeg'],
      date: '18 Dec 2025',
      attendees: 60
    },
    {
      title: 'ULCyber park, Thondayad',
      description: 'BMH conducted a LifelinER program and provided medical support for the cultural event at ULCyber park at Thondayad',
      images: ['/gallery/cyber/1.jpeg', '/gallery/cyber/2.jpeg', '/gallery/cyber/3.jpeg', '/gallery/cyber/4.jpeg', '/gallery/cyber/5.jpeg'],
      date: '18 Dec 2025',
      attendees: 67
    },
    {
      title: 'IMA Payyanur',
      description: 'Talk by Dr.Santhosh P.S (Neuro) at Payyanur IMA CME',
      images: ['/gallery/ima4/1.jpeg'],
      date: '18 Dec 2025',
      attendees: 44
    },
    {
      title: 'Ambulance Drivers meet up, Thalassery',
      description: 'Dr Hirash\'s talk at Ambulance Drivers meet up Thalassery',
      images: ['/gallery/thalassery2/1.jpeg', '/gallery/thalassery2/2.jpeg', '/gallery/thalassery2/3.jpeg'],
      date: '17 Dec 2025',
      attendees: 24
    },
    {
      title: 'Navajyothi Kala Samskarika Kendra, Irikoor',
      description: 'A LifelinER Cancer Awareness Talk and Medical Camp conducted at Navajyothi Kala Samskarika Kendra, Irikoor',
      images: ['/gallery/irikoor/1.jpeg', '/gallery/irikoor/2.jpeg', '/gallery/irikoor/3.jpeg', '/gallery/irikoor/4.jpeg', '/gallery/irikoor/5.jpeg'],
      date: '14 Dec 2025',
      attendees: 45
    },
    {
      title: 'Spring Wood Primary School',
      description: 'BMH conducted PEARL training sessions at Spring Wood primary school Kozhikode',
      images: ['/gallery/spring/1.jpeg', '/gallery/spring/2.jpeg'],
      date: '13 Dec 2025',
      attendees: 50
    },
    {
      title: 'Navaratna(CA) conference Kannur',
      description: 'LifeLinER (Medical Support) Navaratna(CA) conference 6th edition at Kannur',
      images: ['/gallery/Navaratna/1.jpeg'],
      date: '13 Dec 2025',
      attendees: 55
    },
    {
      title: 'SUM Bed college, Mamba',
      description: 'BMH conducted a LifeLinER training session at SUM Bed college, Mamba',
      images: ['/gallery/sum/1.jpeg', '/gallery/sum/2.jpeg', '/gallery/sum/3.jpeg'],
      date: '12 Dec 2025',
      attendees: 106
    },
    {
      title: 'IMA Kannur',
      description: 'Lifeliner cme talk by dr Deepak Raju in ima Kannur attended by more than 40 doctors',
      images: ['/gallery/ima3/1.jpeg', '/gallery/ima3/2.jpeg', '/gallery/ima3/3.jpeg'],
      date: '11 Dec 2025',
      attendees: 40
    },
    {
      title: 'SN College, Veerpad',
      description: 'BMH conducted a LifeLinER training session at SN College, Veerpad',
      images: ['/gallery/veerpad/1.jpeg', '/gallery/veerpad/2.jpeg', '/gallery/veerpad/3.jpeg'],
      date: '8 Dec 2025',
      attendees: 50
    },
    {
      title: 'Cannanore Cycling club',
      description: 'LifelinER medical support for cycling by Cannanore Cycling club',
      images: ['/gallery/cycling/1.jpeg', '/gallery/cycling/2.jpeg', '/gallery/cycling/3.jpeg'],
      date: '7 Dec 2025'
    },
    {
      title: 'International Day of Persons with Disabilities',
      description: 'International Day of Persons with Disabilities celebrated and PEARL LifeLinER initiated to 3 Special school Students, Teachers and Parents. Various programs of inclusions under the initiative “Beyond borders“ has been announced by CEO.',
      images: ['/gallery/pearl2/1.jpeg', '/gallery/pearl2/2.jpeg', '/gallery/pearl2/3.jpeg', '/gallery/pearl2/4.jpeg', '/gallery/pearl2/5.jpeg'],
      date: '5 Dec 2025',
      attendees: 65
    },
    {
      title: 'IQRA Thanal, Malapparamba',
      description: 'As part of the World Disability Day celebrations, BMH conducted a PEARL awareness training session at Iqra Thanal Early Intervention Center, Malapparamba. Session led by Dr. Febna Rahman, followed by a magic show and various entertainment programs showcasing the talents of differently-abled children',
      images: ['/gallery/thanal/1.jpeg', '/gallery/thanal/2.jpeg', '/gallery/thanal/3.jpeg', '/gallery/thanal/4.jpeg', '/gallery/thanal/5.jpeg'],
      date: '3 Dec 2025',
      attendees: 35
    },
    {
      title: 'IHRD Vallithodu',
      description: 'BMH conducted a LifeLinER training session at IHRD Vallithodu',
      images: ['/gallery/ihrd1/1.jpeg', '/gallery/ihrd1/2.jpeg', '/gallery/ihrd1/3.jpeg'],
      date: '3 Dec 2025',
      attendees: 60
    },
    {
      title: 'BMH Payyanur',
      description: 'BMH conducted a LifeLinER training and Traffic Awarness Class at BMH Payyanur',
      images: ['/gallery/payyannur/1.jpeg', '/gallery/payyannur/2.jpeg', '/gallery/payyannur/3.jpeg', '/gallery/payyannur/4.jpeg', '/gallery/payyannur/5.jpeg', '/gallery/payyannur/6.jpeg'],
      date: '3 Dec 2025',
      attendees: 80
    },
    {
      title: 'CALIPH LIFE SCHOOL Thamarassery',
      description: 'BMH conducted a LifeLinER training session at CALIPH LIFE SCHOOL Thamarassery',
      images: ['/gallery/caliph/1.jpeg', '/gallery/caliph/2.jpeg', '/gallery/caliph/3.jpeg', '/gallery/caliph/4.jpeg'],
      date: '29 Nov 2025',
      attendees: 60
    },
    {
      title: 'MIHSS Ponnani',
      description: 'BMH conducted a LifeLinER training session for NSS volunteers at MIHSS Ponnani',
      images: ['/gallery/mihss/1.jpeg', '/gallery/mihss/2.jpeg'],
      date: '29 Nov 2025',
      attendees: 102
    },
    {
      title: 'Aswani Diagnostic Centre Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Aswani Diagnostic Centre Kozhikode',
      images: ['/gallery/Aswani/1.jpeg', '/gallery/Aswani/2.jpeg', '/gallery/Aswani/3.jpeg', '/gallery/Aswani/4.jpeg'],
      date: '28 Nov 2025',
      attendees: 26
    },
    {
      title: 'GAGHSS Chalappuram, Kozhikode',
      description: 'BMH conducted a LifeLinER training session at GAGHSS Chalappuram, Kozhikode',
      images: ['/gallery/gaghss/2.jpeg', '/gallery/gaghss/3.jpeg'],
      date: '27 Nov 2025',
      attendees: 80
    },
    {
      title: 'Aralam HSS',
      description: 'BMH conducted a LifeLinER training session at Aralam HSS',
      images: ['/gallery/aralam/1.jpeg', '/gallery/aralam/2.jpeg', '/gallery/aralam/3.jpeg'],
      date: '27 Nov 2025',
      attendees: 46
    },
    {
      title: 'Community Health Centre, Narikkuni',
      description: 'BMH conducted a LifeLinER training session at the Community Health Centre, Narikkuni, as part of the Government initiative Hridayathalam project',
      images: ['/gallery/Narikkuni/1.jpeg', '/gallery/Narikkuni/2.jpeg', '/gallery/Narikkuni/3.jpeg', '/gallery/Narikkuni/4.jpeg'],
      date: '26 Nov 2025',
      attendees: 51
    },
    {
      title: 'Marygiri HSS, Podikalam',
      description: 'BMH conducted a LifeLinER training session at Marygiri HSS, Podikalam',
      images: ['/gallery/Marygiri/1.jpeg', '/gallery/Marygiri/2.jpeg'],
      date: '26 Nov 2025',
      attendees: 52
    },
    {
      title: 'Govt. College of Teacher Education, Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Govt. College of Teacher education, Kozhikode',
      images: ['/gallery/teacher/1.jpeg', '/gallery/teacher/2.jpeg', '/gallery/teacher/3.jpeg'],
      date: '26 Nov 2025',
      attendees: 54
    },
    {
      title: 'NIT Kozhikode',
      description: 'BMH conducted a LifeLinER training session for the security officers of NIT Kozhikode',
      images: ['/gallery/nitc2/1.jpeg', '/gallery/nitc2/2.jpeg', '/gallery/nitc2/3.jpeg'],
      date: '25 Nov 2025',
      attendees: 73
    },
    {
      title: 'Mathruboomi',
      description: 'LifelinER BLS class by Dr.Nithin in association with Mathruboomi for their employees',
      images: ['/gallery/Mathruboomi/1.jpeg'],
      date: '24 Nov 2025',
      attendees: 40
    },
    {
      title: 'KINFRA Industrial Park, Kozhikode',
      description: 'BMH conducted a LifeLinER training session for the employees  of ESCLA PVT LTD, at KINFRA Industrial Park, Kozhikode',
      images: ['/gallery/escla/1.jpeg', '/gallery/escla/2.jpeg', '/gallery/escla/3.jpeg', '/gallery/escla/4.jpeg'],
      date: '24 Nov 2025',
      attendees: 30
    },
    {
      title: 'Hilite White School',
      description: 'BMH conducted a LifeLinER PEARL training session for parents at Hilite White School, focusing on Pediatric Emergency Response and First-Aid awareness. The session was led by Dr. Febna Rahman',
      images: ['/gallery/pearl1/1.jpeg', '/gallery/pearl1/2.jpeg', '/gallery/pearl1/3.jpeg', '/gallery/pearl1/4.jpeg'],
      date: '22 Nov 2025',
      attendees: 54
    },
    {
      title: 'Enbridge International Training Campus',
      description: 'LifelinER training for Enbridge International Training Campus',
      images: ['/gallery/Enbridge/1.jpeg', '/gallery/Enbridge/2.jpeg', '/gallery/Enbridge/3.jpeg', '/gallery/Enbridge/4.jpeg', '/gallery/Enbridge/5.jpeg', '/gallery/Enbridge/6.jpeg'],
      date: '20 Nov 2025',
      attendees: 35
    },
    {
      title: 'IMA Iritty',
      description: 'LifelinER awareness talk by Dr.Krishnakumar and Dr.Midhun Ramesh in association with IMA Iritty',
      images: ['/gallery/ima2/2.jpeg', '/gallery/ima2/3.jpeg'],
      date: '20 Nov 2025',
      attendees: 40
    },
    {
      title: 'IMA Kannur',
      description: 'LifelinER awareness talk about Stroke management and guidelines  by Dr.Jisa merin joy in association with IMA Kannur',
      images: ['/gallery/ima/1.jpeg'],
      date: '20 Nov 2025',
      attendees: 32
    },
    {
      title: 'LBS Acadamy, Nilambur',
      description: 'BMH conducted a LifeLinER training session at LBS Acadamy, Nilambur',
      images: ['/gallery/lbs/1.jpeg', '/gallery/lbs/2.jpeg'],
      date: '20 Nov 2025',
      attendees: 40
    },
    {
      title: 'BMH Kannur',
      description: 'Inhouse LifeLinER (BLS) for Ambulance Drivers and ICU Ambulance staff started at BMH Kannur',
      images: ['/gallery/kannur4/1.jpeg', '/gallery/kannur4/2.jpeg', '/gallery/kannur4/3.jpeg'],
      date: '20 Nov 2025',
      attendees: 65
    },
    {
      title: 'Rims School',
      description: 'LifelinER awareness talk about diabetics by dr keertha in rims school for parents',
      images: ['/gallery/rims/1.jpeg', '/gallery/rims/2.jpeg'],
      date: '19 Nov 2025',
      attendees: 125
    },
    {
      title: 'St. Marys college ground, Sulthan Bathery',
      description: 'LifelinER training for wayanad tennis ball cricket association players and owners at st. Marys college ground, sulthan bathery',
      images: ['/gallery/bathery/1.jpeg', '/gallery/bathery/2.jpeg', '/gallery/bathery/3.jpeg'],
      date: '18 Nov 2025',
      attendees: 70
    },
    {
      title: 'Sarvodhaya HSS, Echome',
      description: 'LifelinER training for  JRC, little kites, scout and guides cadets at Sarvodhaya Higher Secondary school, Echome',
      images: ['/gallery/Echome2/1.jpeg', '/gallery/Echome2/2.jpeg', '/gallery/Echome2/3.jpeg', '/gallery/Echome2/4.jpeg'],
      date: '18 Nov 2025',
      attendees: 102
    },
    {
      title: 'Sarvodhaya HSS, Echome',
      description: 'LifelinER training for SPC, NCC, Haritha Sena cadets at Sarvodhaya Higher Secondary school, Echome',
      images: ['/gallery/Echome/1.jpeg', '/gallery/Echome/2.jpeg'],
      date: '18 Nov 2025',
      attendees: 96
    },
    {
      title: 'Zamorins HSS, Kozhikode',
      description: 'BMH conducted a LifeLinER training session for the JRC students of Zamorins HSS, Kozhikode',
      images: ['/gallery/zamorins/1.jpeg', '/gallery/zamorins/2.jpeg', '/gallery/zamorins/3.jpeg'],
      date: '18 Nov 2025',
      attendees: 54
    },
    {
      title: 'Clan Fitness Center, Calicut',
      description: 'Conducted LifelinER at Clan Fitness Center Calicut. Gave a session on detailed BLS training and Basic First Aid as well',
      images: ['/gallery/clan/1.jpeg', '/gallery/clan/2.jpeg', '/gallery/clan/3.jpeg'],
      date: '18 Nov 2025',
      attendees: 36
    },
    {
      title: 'SH Hospital Manimooly, Nilambur',
      description: 'BMH conducted LifelinER training session in association with SH Hospital Manimooly, Nilambur',
      images: ['/gallery/manimooly2/1.jpeg', '/gallery/manimooly2/2.jpeg', '/gallery/manimooly2/3.jpeg'],
      date: '18 Nov 2025',
      attendees: 60
    },
    {
      title: 'PEARL, BMH Payyannur',
      description: 'LifeLinER Children\'s day Celebration at BMH Payyannur',
      images: ['/gallery/pearl/1.jpeg', '/gallery/pearl/2.jpeg', '/gallery/pearl/3.jpeg', '/gallery/pearl/4.jpeg', '/gallery/pearl/5.jpeg'],
      date: '15 Nov 2025'
    },
    {
      title: 'EK Nayanar, Vengad',
      description: 'LifeLinER medical support for school fest in EK Nayanar Vengad',
      images: ['/gallery/vengad/1.jpeg', '/gallery/vengad/2.jpeg', '/gallery/vengad/3.jpeg', '/gallery/vengad/4.jpeg', '/gallery/vengad/5.jpeg', '/gallery/vengad/6.jpeg', '/gallery/vengad/7jpeg', '/gallery/vengad/8.jpeg'],
      date: '13 Nov 2025'
    },
    {
      title: 'Gov. Polytechnic, Thottada',
      description: 'BMH conducted a LifeLinER training session at Gov. Polytechnic, Thottada',
      images: ['/gallery/thottada/1.jpeg', '/gallery/thottada/2.jpeg', '/gallery/thottada/3.jpeg'],
      date: '12 Nov 2025',
      attendees: 53
    },
    {
      title: 'Gudallur Vidyodaya/Adivasi Primary School',
      description: 'CPR Literacy India Expedition Update: First CPR Session For Teaching & Non-Teaching Staff @ Gudallur Vidyodaya/Adivasi Primary School',
      images: ['/gallery/Gudallur/1.jpeg'],
      date: '10 Nov 2025',
      attendees: 60
    },
    {
      title: 'Skill Apex Acadamy, Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Skill Apex Acadamy, Kozhikode',
      images: ['/gallery/Apex/1.jpeg', '/gallery/Apex/2.jpeg', '/gallery/Apex/3.jpeg'],
      date: '10 Nov 2025',
      attendees: 23
    },
    {
      title: 'Kottiyur',
      description: 'BMH conducted a LifeLinER training sessiont at Kottiyur',
      images: ['/gallery/Kottiyur/1.jpeg', '/gallery/Kottiyur/2.jpeg'],
      date: '10 Nov 2025',
      attendees: 60
    },
    {
      title: 'Thrikkannapuram',
      description: 'LifeLinER Cancer Awareness Talk and BLS Training session were successfully conducted at Thrikkannapuram',
      images: ['/gallery/Thrikkannapuram/1.jpeg', '/gallery/Thrikkannapuram/2.jpeg'],
      date: '9 Nov 2025',
      attendees: 40
    },
    {
      title: 'Sree Narayanaguru College, Thottada',
      description: 'BMH conducted a LifeLinER training sessiont at Sree Narayanaguru College, Thottada',
      images: ['/gallery/sn/1.jpeg'],
      date: '7 Nov 2025',
      attendees: 63
    },
    {
      title: 'Vimal Jyothi college',
      description: 'BMH conducted a LifeLinER training sessiont at Vimal Jyothi college',
      images: ['/gallery/vimal2/1.jpeg', '/gallery/vimal2/2.jpeg'],
      date: '6 Nov 2025',
      attendees: 53
    },
    {
      title: 'Rahmaniya Public School',
      description: 'BMH conducted a LifeLinER training sessiont at Rahmaniya Public School',
      images: ['/gallery/rahmaniya/1.jpeg', '/gallery/rahmaniya/2.jpeg'],
      date: '6 Nov 2025',
      attendees: 150
    },
    {
      title: 'NTTF, Thalaserry',
      description: 'BMH conducted a LifeLinER training sessiont at NTTF, Thalaserry',
      images: ['/gallery/nttf/1.jpeg'],
      date: '5 Nov 2025',
      attendees: 50
    },
    {
      title: 'District Police Headquarters, Calicut',
      description: 'BMH conducted a LifeLinER training sessiont at District Police Headquarters, Calicut',
      images: ['/gallery/policeclt/1.jpeg', '/gallery/policeclt/2.jpeg', '/gallery/policeclt/3.jpeg', '/gallery/policeclt/4.jpeg'],
      date: '5 Nov 2025',
      attendees: 35
    },
    {
      title: 'Public Health Centre, Peruvayal Grampanchayat',
      description: 'BMH conducted a LifeLinER training session at the Public Health Centre, Peruvayal Grampanchayat',
      images: ['/gallery/peruvayal/1.jpeg', '/gallery/peruvayal/2.jpeg', '/gallery/peruvayal/3.jpeg'],
      date: '5 Nov 2025',
      attendees: 66
    },
    {
      title: 'Holy family college meethalepeedika, Dharmadom',
      description: 'LifelinER BLS training programme combined with Holy family college meethalepeedika, Dharmadom',
      images: ['/gallery/dharmadom/1.jpeg'],
      date: '4 Nov 2025',
      attendees: 58
    },
    {
      title: 'Hilite Mall, Calicut',
      description: 'BMH conducted a LifeLinER event at Hilite Mall, Calicut as part of World Stroke Day 2025',
      images: ['/gallery/hilite2/1.jpeg', '/gallery/hilite2/2.jpeg', '/gallery/hilite2/3.jpeg', '/gallery/hilite2/4.jpeg', '/gallery/hilite2/5.jpeg', '/gallery/hilite2/6.jpeg'],
      date: '2 Nov 2025'
    },
    {
      title: 'MAM UP School, Arakkal',
      description: 'BMH conducted a LifeLinER training session at MAM UP School Arakkal',
      images: ['/gallery/arakkal/1.jpeg', '/gallery/arakkal/2.jpeg', '/gallery/arakkal/3.jpeg'],
      date: '1 Nov 2025',
      attendees: 54
    },
    {
      title: 'Edakkad',
      description: 'LifeLinER medical support for marathon in association with edakkad police station and spc cadets to create awareness against drugs',
      images: ['/gallery/edakkad/1.jpeg'],
      date: '31 Oct 2025'
    },
    {
      title: 'Public Health Centre, Karassery',
      description: 'BMH conducted a LifeLinER training session at Karassery Public Health Centre.The participants included Asha workers Pre-primary teachers and PHC staff',
      images: ['/gallery/Karassery/1.jpeg', '/gallery/Karassery/2.jpeg', '/gallery/Karassery/3.jpeg'],
      date: '28 Oct 2025',
      attendees: 54
    },
    {
      title: 'Public Health Centre, Perumanna',
      description: 'BMH conducted a LifeLinER training session at Public Health Centre Perumanna',
      images: ['/gallery/Perumanna/1.jpeg', '/gallery/Perumanna/2.jpeg'],
      date: '28 Oct 2025',
      attendees: 68
    },
    {
      title: 'Perumbadavu',
      description: 'BMH conducted a LifeLinER training session at Perumbadavu',
      images: ['/gallery/Perumbadavu/1.jpeg', '/gallery/Perumbadavu/2.jpeg', '/gallery/Perumbadavu/3.jpeg', '/gallery/Perumbadavu/4.jpeg', '/gallery/Perumbadavu/5.jpeg'],
      date: '28 Oct 2025',
      attendees: 62
    },
    {
      title: 'Awareness Talk by Dr Sruthi M Kumar',
      description: 'Awareness Talk by Dr Sruthi M Kumar',
      images: ['/gallery/sruthi/1.jpeg'],
      date: '27 Oct 2025',
      attendees: 56
    },
    {
      title: 'Kerala youth seva samathi, Kannur',
      description: 'Medical support for Kerala youth seva samathi (football and cricket tournament) in Kannur',
      images: ['/gallery/sevasamathi/1.jpeg', '/gallery/sevasamathi/2.jpeg'],
      date: '26 Oct 2025'
    },
    {
      title: 'Sevabarathi, Mattannur',
      description: 'LifelinER BLS training programme accompained with Sevabarathi Mattannur',
      images: ['/gallery/mattannur/1.jpeg', '/gallery/mattannur/2.jpeg'],
      date: '26 Oct 2025',
      attendees: 25
    },
    {
      title: 'Pratheeksha Pain and Palliative Center Munniyoor',
      description: 'BMH conducted a LifeLinER training session at Pratheeksha Pain and Palliative Center Munniyoor',
      images: ['/gallery/Munniyoor/1.jpeg', '/gallery/Munniyoor/2.jpeg', '/gallery/Munniyoor/3.jpeg', '/gallery/Munniyoor/4.jpeg'],
      date: '25 Oct 2025',
      attendees: 86
    },
    {
      title: 'Kattangal Grama panchayat',
      description: 'BMH conducted a LifeLinER training session at Kattangal Grama panchayat',
      images: ['/gallery/kattangal/1.jpeg', '/gallery/kattangal/2.jpeg', '/gallery/kattangal/3.jpeg'],
      date: '24 Oct 2025',
      attendees: 84
    },
    {
      title: 'Kuruvattoor Grampanchayat',
      description: 'BMH conducted a LifeLinER training session at Kuruvattoor Grampanchayat',
      images: ['/gallery/Kuruvattoor/1.jpeg', '/gallery/Kuruvattoor/2.jpeg', '/gallery/Kuruvattoor/3.jpeg', '/gallery/Kuruvattoor/4.jpeg', '/gallery/Kuruvattoor/5.jpeg'],
      date: '24 Oct 2025',
      attendees: 78
    },
    {
      title: 'BMH Kannur',
      description: 'Infection prevention and control week closing ceremony at BMH Kannur',
      images: ['/gallery/kannur3/1.jpeg', '/gallery/kannur3/2.jpeg'],
      date: '24 Oct 2025'
    },
    {
      title: 'PKM College of Education, Madambam',
      description: 'BMH conducted a LifeLinER training session at PKM College of Education, Madambam',
      images: ['/gallery/madambam/1.jpeg'],
      date: '23 Oct 2025',
      attendees: 65
    },
    {
      title: 'Farook College, Kozhikode',
      description: 'BMH conducted a LifeLinER training session at Farook College Kozhikode',
      images: ['/gallery/farook/1.jpeg', '/gallery/farook/2.jpeg', '/gallery/farook/3.jpeg'],
      date: '22 Oct 2025',
      attendees: 54
    },
    {
      title: 'GHSS Paleri',
      description: 'BMH conducted a LifeLinER training session for Students Police Cadets at GHSS Paleri',
      images: ['/gallery/paleri/1.jpeg', '/gallery/paleri/2.jpeg', '/gallery/paleri/3.jpeg'],
      date: '22 Oct 2025',
      attendees: 88
    },
    {
      title: 'Akashavani Kozhikode',
      description: 'LifeLinER training session at Akashavani Kozhikode',
      images: ['/gallery/akashavani/1.jpeg', '/gallery/akashavani/2.jpeg', '/gallery/akashavani/3.jpeg'],
      date: '21 Oct 2025',
      attendees: 37
    },
    {
      title: 'Pushparam ITI, Iritty',
      description: 'Conducted LifeLinER BLS at Pushparam ITI, Iritty',
      images: ['/gallery/pushparam/1.jpeg'],
      date: '21 Oct 2025',
      attendees: 36
    },
    {
      title: 'Chelora HSS',
      description: 'LifeLinER awareness  class about menstrual cup hygiene compained with Chelora HSS - Nss unit',
      images: ['/gallery/chelora/1.jpeg'],
      date: '21 Oct 2025',
      attendees: 55
    },
    {
      title: 'Grihalakshmi Vanitha Vedi Members',
      description: 'In house LifeLinER awareness talk by Dr Krishnakumar to Grihalakshmi Vanitha Vedi members',
      images: ['/gallery/vanitha/1.jpeg', '/gallery/vanitha/2.jpeg'],
      date: '19 Oct 2025',
      attendees: 35
    },
    {
      title: 'Narikode, Kuppam',
      description: 'LifeLinER BLS programme conducted at Narikode, Kuppam in association with Vanitha League',
      images: ['/gallery/kuppam/1.jpeg', '/gallery/kuppam/2.jpeg', '/gallery/kuppam/3.jpeg', '/gallery/kuppam/4.jpeg'],
      date: '18 Oct 2025',
      attendees: 60
    },
    {
      title: 'BMH Kannur',
      description: 'Emergency awareness class for BMH Kannur staffs and nurses',
      images: ['/gallery/kannur2/1.jpeg', '/gallery/kannur2/2.jpeg'],
      date: '18 Oct 2025',
      attendees: 48
    },
    {
      title: 'Govt. Tribal HSS, Kattappana',
      description: 'LifeLinER and Awareness class for NSS students',  
      images: ['/gallery/Kattappana/1.jpeg', '/gallery/Kattappana/2.jpeg', '/gallery/Kattappana/3.jpeg', '/gallery/Kattappana/4.jpeg', '/gallery/Kattappana/5.jpeg', '/gallery/Kattappana/6.jpeg'],
      date: '17 Oct 2025',
      attendees: 105
    },
    {
      title: 'Kunnamangalam block panchayat',
      description: 'BMH conducted a LifeLinER training session at kunnamangalam block panchayat as part of World CPR day in association with Kerala Government initiative  Jeevathalam Project - "Spandanam"',
      images: ['/gallery/spandanam/1.jpeg', '/gallery/spandanam/2.jpeg'],
      date: '16 Oct 2025',
      attendees: 108
    },
    {
      title: 'SH Hospital, Manimooly',
      description: 'LifelinER in association with SH Hospital Manimooly for nursing and paramedical staffs',
      images: ['/gallery/manimooly/1.jpeg', '/gallery/manimooly/2.jpeg', '/gallery/manimooly/3.jpeg', '/gallery/manimooly/4.jpeg'],
      date: '15 Oct 2025',
      attendees: 120
    },
    {
      title: 'CDS Kannur district conference',
      description: 'LifeLinER breast cancer awareness talk by Dr.Vishnu Santhosh Menon at CDS Kannur district conference',
      images: ['/gallery/cds/1.jpeg'],
      date: '15 Oct 2025',
      attendees: 26
    },
    {
      title: 'Don Bosco Arts and sciences College, Angadikkadavu',
      description: 'LifelinER training session at Don Bosco Arts and sciences College, Angadikkadavu',
      images: ['/gallery/bosco/1.jpeg', '/gallery/bosco/2.jpeg', '/gallery/bosco/3.jpeg'],
      date: '14 Oct 2025',
      attendees: 84
    },
    {
      title: 'Silver Hills Public School, Kozhikode',
      description: ' LifeLinER training session at Silver Hills Public School, Kozhikode',
      images: ['/gallery/silver/1.jpeg', '/gallery/silver/2.jpeg', '/gallery/silver/4.jpeg', '/gallery/silver/3.jpeg'],
      date: '13 Oct 2025',
      attendees: 400
    },
    {
      title: 'Mukkilangadi Fest, Koduvally',
      description: 'LifelinER provided to Mukkilangadi Panchayath residents on the occassion of Mukkilangadi Fest 2025 at Koduvally',
      images: ['/gallery/mukkilangadi/1.jpeg', '/gallery/mukkilangadi/2.jpeg', '/gallery/mukkilangadi/3.jpeg'],
      date: '13 Oct 2025',
      attendees: 60
    },
    {
      title: 'Kannur Dist Dairy development expo, Payynur',
      description: 'LifeLinER (Medical Support) at Kannur Dist Diary development expo and conference at Payynur',
      images: ['/gallery/dairy/1.jpeg', '/gallery/dairy/2.jpeg'],
      date: '12 Oct 2025'
    },
    {
      title: 'Assumption Convent, Kozhikode',
      description: 'LifeLinER training session at Assumption Convent, Kozhikode',
      images: ['/gallery/assumption/1.jpeg', '/gallery/assumption/2.jpeg', '/gallery/assumption/3.jpeg'],
      date: '11 Oct 2025'
    },
    {
      title: 'St.George HS, Muthalakodam',
      description: ' Medical Support and LifelinER for Students at St.George HS, Muthalakodam',
      images: ['/gallery/muthalakodam2/1.jpeg'],
      date: '10 Oct 2025',
      attendees: 48
    },
    {
      title: 'Alphonsa College, Thiruvambadi',
      description: 'LifeLinER training session at Alphonsa College, Thiruvambadi',
      images: ['/gallery/alphonsa/1.jpeg', '/gallery/alphonsa/2.jpeg', '/gallery/alphonsa/3.jpeg', '/gallery/alphonsa/4.jpeg'],
      date: '10 Oct 2025',
      attendees: 52
    },
    {
      title: 'Nirmalagiri College, Kuthuparamba',
      description: 'LifeLinER training session at Nirmalagiri College, Kuthuparamba',
      images: ['/gallery/kuthuparamba/1.jpeg'],
      date: '9 Oct 2025',
      attendees: 47
    },
    {
      title: 'National College, Taliparamb',
      description: 'LifeLinER training session at National College, Taliparamb',
      images: ['/gallery/taliparamb/1.jpeg'],
      date: '8 Oct 2025',
      attendees: 30
    },
    {
      title: 'Community Health Centre, Cheruvady',
      description: 'LifeLinER training session at Community Health Centre, Cheruvady',
      images: ['/gallery/cheruvady/1.jpeg', '/gallery/cheruvady/2.jpeg'],
      date: '7 Oct 2025',
      attendees: 78
    },
    {
      title: 'St.George HSS, Parathodu',
      description: 'LifelinER training at St.George HSS, Parathodu',
      images: ['/gallery/parathodu/1.jpeg', '/gallery/parathodu/2.jpeg', '/gallery/parathodu/3.jpeg', '/gallery/parathodu/4.jpeg', '/gallery/parathodu/5.jpeg', '/gallery/parathodu/6.jpeg', '/gallery/parathodu/7.jpeg'],
      date: '7 Oct 2025',
      attendees: 300
    },
    {
      title: 'St.George HS, Muthalakodam',
      description: 'Medical Support and LifelinER for Teachers / Parents at St.George HS, Muthalakodam',
      images: ['/gallery/muthalakodam/1.jpeg', '/gallery/muthalakodam/2.jpeg', '/gallery/muthalakodam/3.jpeg', '/gallery/muthalakodam/4.jpeg'],
      date: '7 Oct 2025',
      attendees: 23
    },
    {
      title: 'CH center Marakkara',
      description: 'LifelinER training at CH center Marakkara',
      images: ['/gallery/marakkara/1.jpeg', '/gallery/marakkara/2.jpeg', '/gallery/marakkara/3.jpeg', '/gallery/marakkara/4.jpeg', '/gallery/marakkara/5.jpeg'],
      date: '6 Oct 2025',
      attendees: 58
    },
    {
      title: 'Sreekanth Eye Hospital',
      description: 'LifelinER training in association with Sreekanth Eye Hospital for their staffs',
      images: ['/gallery/sreekanth/1.jpeg', '/gallery/sreekanth/2.jpeg', '/gallery/sreekanth/3.jpeg', '/gallery/sreekanth/4.jpeg', '/gallery/sreekanth/5.jpeg'],
      date: '5 Oct 2025',
      attendees: 60
    },
    {
      title: 'Oruma resident association, Chala',
      description: 'LifeLinER and community connect with Oruma resident association, Chala',
      images: ['/gallery/chala2/1.jpeg', '/gallery/chala2/2.jpeg'],
      date: '5 Oct 2025',
      attendees: 22
    },
    {
      title: 'Chelannur Gramapanchayat',
      description: 'LifeLinER training session for Chelannur Gramapanchayat',
      images: ['/gallery/chelannur/1.jpeg', '/gallery/chelannur/2.jpeg', '/gallery/chelannur/3.jpeg'],
      date: '4 Oct 2025',
      attendees: 28
    },
    {
      title: 'Mary Matha Hospital, Vazhithala',
      description: 'Awareness class and LifeLinER for staffs at Mary Matha Hospital, Vazhithala',
      images: ['/gallery/mary/1.jpeg', '/gallery/mary/2.jpeg'],
      date: '1 Oct 2025',
      attendees: 22
    },
    {
      title: 'NIT Calicut',
      description: 'LifelinER training session at Calicut NIT for students, faculty and staff',
      images: ['/gallery/nitc/1.jpeg', '/gallery/nitc/2.jpeg', '/gallery/nitc/3.jpeg', '/gallery/nitc/4.jpeg', '/gallery/nitc/5.jpeg'],
      date: '30 Sep 2025',
      attendees: 80
    },
    {
      title: 'Muzhappilangad grama panchayatht',
      description: 'LifelinER programme at muzhappilangad grama panchayath family health centre',
      images: ['/gallery/muzhappilangad/1.jpeg', '/gallery/muzhappilangad/2.jpeg'],
      date: '29 Sep 2025',
      attendees: 65
    },
    {
      title: 'Kappad live charitable trust',
      description: 'Participating in charitable activities of kappad live charitable trust under LifeLinER',
      images: ['/gallery/kappad/1.jpeg'],
      date: '28 Sep 2025',
      attendees: 35
    },
    {
      title: 'Hridyamee Hridayam - Secura Mall',
      description: 'Hridyamee Hridayam as part of World Heart day at Secura Mall',
      images: ['/gallery/heartday8/1.jpeg'],
      date: '28 Sep 2025'
    },
    {
      title: 'Hridyamee Hridayam - Muzhuppilangadu Beach',
      description: 'Hridyamee Hridayam as part of World Heart day at Muzhuppilangadu Beach',
      images: ['/gallery/heartday7/1.jpeg', '/gallery/heartday7/2.jpeg', '/gallery/heartday7/3.jpeg'],
      date: '28 Sep 2025'
    },
    {
      title: 'Hridyamee Hridayam - Thalassery new Bus stand',
      description: 'Hridyamee Hridayam as part of World Heart day at Thalassery new Bus stand',
      images: ['/gallery/heartday6/1.jpeg', '/gallery/heartday6/2.jpeg'],
      date: '28 Sep 2025'
    },
    {
      title: 'Hridyamee Hridayam - Quiz Competition',
      description: 'World Heart Day Quiz Competition as a part of Hridyamee Hridayam on World Heart day',
      images: ['/gallery/heartday5/1.jpeg'],
      date: '28 Sep 2025'
    },
    {
      title: 'Hridyamee Hridayam - Free ECG check ups',
      description: 'Free ECG check ups on the Go as a part of Hridyamee Hridayam on World Heart day',
      images: ['/gallery/heartday4/1.jpeg', '/gallery/heartday4/2.jpeg'],
      date: '28 Sep 2025'
    },
    {
      title: 'Hridyamee Hridayam - swanthanam old age home',
      description: 'Hridyamee Hridayam as part of World Heart day at swanthanam old age home',
      images: ['/gallery/heartday3/1.jpeg', '/gallery/heartday3/2.jpeg', '/gallery/heartday3/3.jpeg', '/gallery/heartday3/4.jpeg'],
      date: '28 Sep 2025'
    },
    {
      title: 'Hridyamee Hridayam - Kannur KSRTC stand',
      description: 'Hridyamee Hridayam as part of World Heart day at Kannur KSRTC stand',
      images: ['/gallery/heartday2/1.jpeg', '/gallery/heartday2/2.jpeg', '/gallery/heartday2/3.jpeg', '/gallery/heartday2/4.jpeg'],
      date: '28 Sep 2025'
    },
    {
      title: 'Hridyamee Hridayam - Inauguration',
      description: 'Inauguration of World heart day celebrations',
      images: ['/gallery/heartday1/1.jpeg', '/gallery/heartday1/2.jpeg', '/gallery/heartday1/3.jpeg', '/gallery/heartday1/4.jpeg', '/gallery/heartday1/5.jpeg'],
      date: '28 Sep 2025'
    },
    {
      title: 'Uruvachal medical camp inaguration',
      description: 'Uruvachal medical camp inaguration',
      images: ['/gallery/Uruvachal/1.jpeg'],
      date: '28 Sep 2025',
      attendees: 12
    },
    {
      title: 'Sanjose welfare society, Kelakam',
      description: 'Conducted LifelinER BLS training in association with Sanjose welfare society Kelakam And distributed Privilege card to members',
      images: ['/gallery/sanjose/1.jpeg', '/gallery/sanjose/2.jpeg', '/gallery/sanjose/3.jpeg', '/gallery/sanjose/4.jpeg'],
      date: '27 Sep 2025',
      attendees: 80
    },
    {
      title: 'Sree Narayana HSS, Vadakara',
      description: 'Conducted LifelinER training for students at Sree Narayana HSS, Vadakara',
      images: ['/gallery/snhss/1.jpeg', '/gallery/snhss/2.jpeg', '/gallery/snhss/3.jpeg', '/gallery/snhss/4.jpeg', '/gallery/snhss/5.jpeg'],
      date: '25 Sep 2025',
      attendees: 51
    },
    {
      title: 'Arown Academy Event',
      description: 'LifelinER in association with Arown academy for 30+ companies across Calicut City ( Lulu Mall staffs, Hilite Mall staffs, MyG , Eham Digital, TVS , Nandilath, etc ) at IMA Hall Calicut',
      images: ['/gallery/arown/1.jpeg', '/gallery/arown/2.jpeg', '/gallery/arown/3.jpeg'],
      date: '25 Sep 2025',
      attendees: 180
    },
    {
      title: 'Colours of Care Prize distribution',
      description: 'Colours of Care Prize distribution',
      images: ['/gallery/coc4/1.jpeg', '/gallery/coc4/2.jpeg', '/gallery/coc4/3.jpeg', '/gallery/coc4/4.jpeg'],
      date: '25 Sep 2025'
    },
    {
      title: 'Mar Athanatious college, Kothamangalam',
      description: 'LifeLinER training for NSS students at Mar Athanatious college, Kothamangalam',
      images: ['/gallery/marath/1.jpeg', '/gallery/marath/2.jpeg', '/gallery/marath/3.jpeg', '/gallery/marath/4.jpeg', '/gallery/marath/5.jpeg'],
      date: '25 Sep 2025',
      attendees: 183
    },
    {
      title: 'SES College, Sreekandapuram',
      description: 'LifeLinER training in SES College, Sreekandapuram',
      images: ['/gallery/ses/1.jpeg', '/gallery/ses/2.jpeg', '/gallery/ses/3.jpeg'],
      date: '25 Sep 2025',
      attendees: 80
    },
     {
      title: 'Sevabarathi - Kothuparamba',
      description: 'LifeLinER program in Assosiation with Sevabarathi in Kothuparamba',
      images: ['/gallery/seva/1.jpeg'],
      date: '21 Sep 2025',
      attendees: 30
    },
    {
      title: 'Rotary Midtown, Payyanur',
      description: 'Medical camp and LifeLinER awareness talk by Dr.Vishnu Santhosh in association with Rotary midtown, Payyanur',
      images: ['/gallery/rotary/1.jpeg', '/gallery/rotary/2.jpeg'],
      date: '21 Sep 2025',
      attendees: 80
    },
    {
      title: 'Vimaljyothi College, Chemperi',
      description: 'LifeLinER training at Vimaljyothi College, Chemperi',
      images: ['/gallery/vimal/1.jpeg', '/gallery/vimal/2.jpeg', '/gallery/vimal/3.jpeg', '/gallery/vimal/4.jpeg'],
      date: '18 Sep 2025',
      attendees: 80
    },
    {
      title: 'Mathruboomi - Family Connect',
      description: 'Lifeliner program and community connect for Mathruboomi staff and family members',
      images: ['/gallery/Mathruboomi/1.jpeg'],
      date: '16 Sep 2025'
    },
    {
      title: 'MG College, Iritty',
      description: 'LifeLinER Awareness Talk by Dr Soya Gopakumar in MG College, Iritty',
      images: ['/gallery/iritty/1.jpeg', '/gallery/iritty/2.jpeg', '/gallery/iritty/3.jpeg'],
      date: '15 Sep 2025',
      attendees: 80
    },
    {
      title: 'Anti-Terrorism Squad, Calicut Hub',
      description: 'LifeLinER training for Anti-Terrorism Squad, Calicut Hub',
      images: ['/gallery/terror/1.jpeg', '/gallery/terror/2.jpeg'],
      date: '15 Sep 2025',
      attendees: 20
    },
    {
      title: 'Sand Sculpture - Calicut Beach',
      description: 'LifeLinER Sand sculpture at Calicut Beach',
      images: ['/gallery/sand/1.jpeg'],
      date: '14 Sep 2025'
    },
    {
      title: 'Perinthalmanna',
      description: 'LifeLinER Program with Perinthalmanna MLA, Shri. Najeeb Kanthapuram',
      images: ['/gallery/perinth/1.jpeg', '/gallery/perinth/2.jpeg', '/gallery/perinth/3.jpeg', '/gallery/perinth/4.jpeg', '/gallery/perinth/5.jpeg', '/gallery/perinth/6.jpeg', '/gallery/perinth/7.jpeg', '/gallery/perinth/8.jpeg'],
      date: '13 Sep 2025',
      attendees: 80
    },
    {
      title: 'WHO and KCDC - Vadakara',
      description: 'LifeLinER event at Vadakara with WHO and KCDC',
      images: ['/gallery/who/1.jpeg'],
      date: '14 Sep 2025',
      attendees: 80
    },
    {
      title: 'Colours of Care - Hite Mall, Calicut',
      description: 'LifeLinER Colours of care painting competition at Hite Mall, Calicut on World First Aid Day',
      images: ['/gallery/hilite/1.jpeg', '/gallery/hilite/2.jpeg', '/gallery/hilite/3.jpeg'],
      date: '13 Sep 2025',
      attendees: 331
    },
    {
      title: 'Thodupuzha Soccer School',
      description: 'Awarness class and lifeliner at Soccer school, Thodupuzha (for football players) ',
      images: ['/gallery/soccer/1.jpeg', '/gallery/soccer/2.jpeg', '/gallery/soccer/3.jpeg', '/gallery/soccer/4.jpeg', '/gallery/soccer/5.jpeg', '/gallery/soccer/6.jpeg'],
      date: '13 Sep 2025',
      attendees: 32
    },
    {
      title: 'Colours of Care - Thodupuzha',
      description: 'Painting competition and BLS training program for children and parents at held at Municipal Park at Thodupuzha',
      images: ['/gallery/coc3/1.jpeg', '/gallery/coc3/2.jpeg', '/gallery/coc3/3.jpeg', '/gallery/coc3/4.jpeg'],
      date: '13 Sep 2025',
      attendees: 192
    },
    {
      title: 'Colours of Care - BMH Payyannur',
      description: 'LifeLinER Colours of care painting competition',
      images: ['/gallery/coc2/1.jpeg', '/gallery/coc2/2.jpeg', '/gallery/coc2/3.jpeg', '/gallery/coc2/4.jpeg'],
      date: '13 Sep 2025',
      attendees: 75
    },
    {
      title: 'Sadgramam - Perinthalmanna',
      description: 'As part of the Sadgramam initiative, the LifelinER program was conducted at Perinthalmanna exclusively for the residents of the ward. The program was inaugurated by MLA Mr. Najeeb Kanthapuram',
      images: ['/gallery/sadgramam/1.jpeg', '/gallery/sadgramam/2.jpeg', '/gallery/sadgramam/3.jpeg'],
      date: '13 Sep 2025',
      attendees: 80
    },
    {
      title: 'Colours of Care painting competition',
      description: 'LifeLinER Colours of care painting competition',
      images: ['/gallery/coc1/1.jpg', '/gallery/coc1/2.jpg', '/gallery/coc1/3.jpg', '/gallery/coc1/4.jpg', '/gallery/coc1/5.jpg'],
      date: '13 Sep 2025',
      attendees: 80
    },
    {
      title: 'BMH Calicut',
      description: 'As part of World First aid Day celebrations, BMH Calicut conducted a LifeLinER Program',
      images: ['/gallery/aidcalicut/1.jpg', '/gallery/aidcalicut/2.jpg'],
      date: '13 Sep 2025',
      attendees: 30
    },
    {
      title: 'Koduvally Grampanchayat',
      description: 'As part of World First aid Day celebrations, BMH conducted a LifeLinER training for PTH Members at Koduvally Grampanchayat',
      images: ['/gallery/pth/1.jpg', '/gallery/pth/2.jpg'],
      date: '13 Sep 2025',
      attendees: 80
    },
    {
      title: 'AKASGVHS School, Payyanur',
      description: 'LifelinER training at AKASGVHS School, Payyanur',
      images: ['/gallery/akasgvhs/1.jpg', '/gallery/akasgvhs/2.jpg', '/gallery/akasgvhs/3.jpg', '/gallery/akasgvhs/4.jpg'],
      date: '12 Sep 2025',
      attendees: 80
    },
    {
      title: 'Govt Arts & Science College, Kondotty',
      description: 'LifelinER training for NSS Students at Govt Arts & Science College, Kondotty',
      images: ['/gallery/nssarts/1.jpg', '/gallery/nssarts/2.jpg'],
      date: '12 Sep 2025',
      attendees: 80
    },
    {
      title: 'Chinmaya Women\'s College Chala, Kannur',
      description: 'LifelinER program in association with Nss unit - Chinmaya Women\'s College Chala, Kannur',
      images: ['/gallery/chinmaya-1/1.jpg'],
      date: '12 Sep 2025',
      attendees: 80
    },
    {
      title: 'MG College, Iritty',
      description: 'LifelinER program at MG College, Iritty',
      images: ['/gallery/mg/1.jpg', '/gallery/mg/2.jpg', '/gallery/mg/3.jpg', '/gallery/mg/4.jpg'],
      date: '11 Sep 2025',
      attendees: 80
    },
    {
      title: 'JCI Cherupuzha',
      description: 'LifelinER program in association with JCI Cherupuzha',
      images: ['/gallery/jci/1.jpg', '/gallery/jci/2.jpg', '/gallery/jci/3.jpg'],
      date: '11 Sep 2025',
      attendees: 80
    },
    {
      title: 'LifeLinER healthy Onam in association with Mathrubhumi',
      description: 'LifeLinER healthy Onam in association with Mathrubhumi at 10 venues',
      images: ['/gallery/onam/1.jpg', '/gallery/onam/2.jpg', '/gallery/onam/3.jpg', '/gallery/onam/4.jpg', '/gallery/onam/5.jpg', '/gallery/onam/6.jpg', '/gallery/onam/7.jpg', '/gallery/onam/8.jpg', '/gallery/onam/9.jpg', '/gallery/onam/10.jpg', '/gallery/onam/11.jpg', '/gallery/onam/12.jpg', '/gallery/onam/13.jpg', '/gallery/onam/14.jpg'],
      date: '30 Aug 2025 - 1 Sep 2025',
    },
    {
      title: 'St Joseph\'s College, Moolamattom',
      description: 'LifelinER training at St Joseph\'s College, Moolamattom',
      images: ['/gallery/stjoseph/1.jpg', '/gallery/stjoseph/3.jpg', '/gallery/stjoseph/4.jpg', '/gallery/stjoseph/5.jpg', '/gallery/stjoseph/6.jpg', '/gallery/stjoseph/7.jpg'],
      date: '29 Aug 2025',
      attendees: 60
    },
    {
      title: 'Medical College Campus School',
      description: 'LifelinER training for Scouts and Guides of Medical College Campus School',
      images: ['/gallery/medschool/1.jpg', '/gallery/medschool/2.jpg', '/gallery/medschool/3.jpg', '/gallery/medschool/4.jpg'],
      date: '28 Aug 2025'
    },
    {
      title: 'Chala Higher Secondary School',
      description: 'LifeLinER Training programme at Chala Higher Secondary School',
      images: ['/gallery/chala/1.jpg'],
      date: '28 Aug 2025'
    },
    {
      title: 'LifeLinER - Inhouse',
      description: 'LifeLinER Training Inhouse for BMH Staffs and Nurses',
      images: ['/gallery/inhouse/1.jpg', '/gallery/inhouse/2.jpg', '/gallery/inhouse/3.jpg', '/gallery/inhouse/4.jpg'],
      date: '27 Aug 2025'
    },
    {
      title: 'Care and Cure Clinic, Parakkadav',
      description: 'LifeLinER Training at Care and Cure Clinic, Parakkadav',
      images: ['/gallery/parakkadav/1.jpg'],
      date: '25 Aug 2025'
    },
    {
      title: 'Redemption Poly Clinic, Kambalakkad',
      description: 'LifeLinER Training for nurses and staffs in Redemption Poly Clinic, Kambalakkad',
      images: ['/gallery/kambalakkad/1.jpg', '/gallery/kambalakkad/2.jpg', '/gallery/kambalakkad/3.jpg'],
      date: '21 Aug 2025'
    },
    {
      title: 'CM College, Nadavayal',
      description: 'LifeLinER Training at CM College Nadavayal, conducted for their NSS volunteers',
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
      description: 'LifeLinER Training and privilage card distribution at Kaniv Rubber Tappers Association, Moolamattom',
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
      description: 'LifeLinER Training and privilage card distribution at Perukoni Residence Association, Olamattom',
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
