"use client";

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loader from './loader'; // Adjust the path if needed

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const handleComplete = () => setLoading(false);

    handleComplete(); // Call handleComplete after the initial render

    return () => {
      handleComplete();
    };
  }, [pathname, searchParams]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};

export default LoaderWrapper;