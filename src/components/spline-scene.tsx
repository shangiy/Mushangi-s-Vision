"use client";

import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SplineScene() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
        <Spline scene="https://prod.spline.design/LP6ZDmLRVw05aGl0/scene.splinecode" />
        <div className="absolute bottom-4 right-4">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-secondary">
                <Link href="#about">
                    View More
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    </div>
  );
}
