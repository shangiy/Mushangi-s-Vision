"use client";

import React, { Suspense } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight, Loader } from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function SplineLoading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader className="animate-spin text-primary" size={48} />
    </div>
  );
}


export function SplineScene() {
  return (
    <div className="relative w-full h-full">
        <Suspense fallback={<SplineLoading />}>
            <Spline scene="https://prod.spline.design/LP6ZDmLRVw05aGl0/scene.splinecode" />
        </Suspense>
        <div className="absolute bottom-4 right-4">
            <Button asChild size="lg" className="rounded-full bg-sky-500 text-white hover:bg-sky-700">
                <Link href="/portfolio">
                    View More
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    </div>
  );
}
