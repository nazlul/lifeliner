'use client';

import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface Testimonial {
  id: number;
  videoSrc: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    videoSrc: '/testimonial/1.mp4'
  },
  {
    id: 2,
    videoSrc: '/testimonial/2.mp4'
  },
  {
    id: 3,
    videoSrc: '/testimonial/3.mp4'
  },
  {
    id: 4,
    videoSrc: '/testimonial/4.mp4'
  },
  {
    id: 5,
    videoSrc: '/testimonial/5.mp4'
  }
];

function getIndices(center: number, length: number) {
  const prev = (center - 1 + length) % length;
  const next = (center + 1) % length;
  return [prev, center, next];
}

export default function TestimonialsPage() {
  const [active, setActive] = useState(2);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleNext = () => {
    pauseAllVideos();
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    pauseAllVideos();
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const pauseAllVideos = () => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    const centerVideo = videoRefs.current[testimonials[active].id];
    if (centerVideo) {
      if (isPlaying) {
        centerVideo.pause();
        setIsPlaying(false);
      } else {
        centerVideo.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const delta = e.touches[0].clientX - dragStartX;
    if (delta > 50) {
      handlePrev();
      setDragStartX(null);
    } else if (delta < -50) {
      handleNext();
      setDragStartX(null);
    }
  };
  const handleTouchEnd = () => {
    setDragStartX(null);
  };

  const [prevIdx, centerIdx, nextIdx] = getIndices(active, testimonials.length);
  const visible = [prevIdx, centerIdx, nextIdx];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <div className="w-full text-center pt-4 pb-2 md:pt-8 md:pb-4 z-10">
        <h1 className="text-3xl md:text-6xl font-nyght font-bold text-[#EE5A22]">Testimonials</h1>
      </div>
      <div className="relative w-full flex items-center justify-center mt-8 md:mt-16 select-none">
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-8 z-20 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <img src="/arrow.svg" alt="Previous" className="w-6 h-6 md:w-8 md:h-8 rotate-180 group-hover/button:scale-110 transition-transform duration-300" />
        </button>
        <div
          className="flex items-center justify-center w-full overflow-x-hidden touch-pan-x"
          style={{ maxWidth: 1200, minHeight: '60vh' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visible.map((idx) => {
            const testimonial = testimonials[idx];
            let offset = 0;
            if (idx === centerIdx) offset = 0;
            else if (idx === prevIdx) offset = -1;
            else if (idx === nextIdx) offset = 1;
            let style = {};
            let zIndex = 10;
            let opacity = 1;
            if (offset === 0) {
              style = {
                transform: 'perspective(1000px) rotateY(0deg) scale(1)',
                transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)',
              };
              zIndex = 30;
              opacity = 1;
            } else if (offset === -1) {
              style = {
                transform: 'perspective(1000px) rotateY(-30deg) scale(0.9) translateX(-10%)',
                transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)',
              };
              zIndex = 20;
              opacity = 1;
            } else if (offset === 1) {
              style = {
                transform: 'perspective(1000px) rotateY(30deg) scale(0.9) translateX(10%)',
                transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)',
              };
              zIndex = 20;
              opacity = 1;
            }
            return (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 flex items-center justify-center relative"
                style={{ width: '70vw', maxWidth: 400, height: '80vw', maxHeight: '80vh', zIndex, opacity, pointerEvents: offset === 0 ? 'auto' : 'none', ...style }}
                animate={style}
                transition={{ duration: 0.5, ease: [0.4, 2, 0.6, 1] }}
              >
                <video
                  ref={(el) => { videoRefs.current[testimonial.id] = el; }}
                  className="w-full h-full object-cover object-center rounded-3xl shadow-xl bg-black"
                  tabIndex={offset === 0 ? 0 : -1}
                  poster=""
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={offset === 0 ? handlePlayClick : undefined}
                >
                  <source src={testimonial.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {offset === 0 && (
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-3xl transition-opacity duration-200 hover:bg-black/30"
                    style={{ opacity: isPlaying ? 0 : 1, pointerEvents: isPlaying ? 'none' : 'auto' }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[16px] md:border-l-[20px] border-l-black border-t-[12px] md:border-t-[15px] border-t-transparent border-b-[12px] md:border-b-[15px] border-b-transparent ml-1"></div>
                    </div>
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-8 z-20 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <img src="/arrow.svg" alt="Next" className="w-6 h-6 md:w-8 md:h-8 group-hover/button:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}