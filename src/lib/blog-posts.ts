
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-react-hooks',
    title: 'A Deep Dive into React Hooks',
    description: 'Explore the power and flexibility of React Hooks and how they can simplify your components.',
    date: '2025-11-15',
    image: 'blog-post-1',
    content: `
React Hooks, introduced in React 16.8, revolutionized how we write components. They allow you to use state and other React features without writing a class. Let's explore some of the most common hooks.

### useState
The \`useState\` hook is the most fundamental hook. It allows you to add state to functional components.

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect
The \`useEffect\` hook lets you perform side effects in functional components. It's a close replacement for \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\`.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

By mastering these hooks, you can write cleaner, more concise, and more maintainable React applications.`,
  },
  {
    slug: 'optimizing-web-performance',
    title: 'Core Web Vitals: A Guide to Optimizing Performance',
    description: 'Learn about Google\'s Core Web Vitals and how to optimize your site for a better user experience.',
    date: '2025-08-22',
    image: 'blog-post-2',
    content: `
Core Web Vitals are a set of specific factors that Google considers important in a webpage’s overall user experience. They are made up of three specific page speed and user interaction measurements: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).

### Largest Contentful Paint (LCP)
LCP measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading. Optimizing images, deferring non-critical CSS, and improving server response times can help improve LCP.

### First Input Delay (FID)
FID measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less. Breaking up long tasks and using web workers can reduce FID.

### Cumulative Layout Shift (CLS)
CLS measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1. or less. Always including size attributes on your images and video elements, and never inserting content above existing content can help reduce CLS.

Focusing on these metrics will not only improve your site's ranking on Google but, more importantly, will create a better, less frustrating experience for your users.
    `,
  },
];
