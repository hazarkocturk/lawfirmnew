'use client';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <Button variant='outline' 
        onClick={() => scrollToTop()}
        className='flex justify-center items-center fixed bottom-16 lg:bottom-8 right-8 p-4 bg-primary-hover rounded-sm cursor-pointer z-10'
      >
        <ChevronUp />
      </Button>
    )
  );
};

export default BackToTop;
