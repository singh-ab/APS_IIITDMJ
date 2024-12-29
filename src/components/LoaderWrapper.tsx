"use client";

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loader from './loader'; // Adjust the path if needed

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true); // Start with loading true
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleComplete = () => setLoading(false);

    handleComplete(); // Call handleComplete after the initial render

    return () => {
      setLoading(true); // Set loading to true on unmount
    };
  }, [pathname, searchParams]);

  return (
    <Suspense fallback={<Loader />}>
      {loading && <Loader />}
      {!loading && children}
    </Suspense>
  );
};

export default LoaderWrapper;