"use client";

import Spline from '@splinetool/react-spline';

export function SplineScene() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px]">
        <Spline scene="https://prod.spline.design/LP6ZDmLRVw05aGl0/scene.splinecode" />
    </div>
  );
}
