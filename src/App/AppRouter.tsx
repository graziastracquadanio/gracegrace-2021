import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const AboutPageComponent = lazy(() => import('views/AboutPage'));
const ResumePageComponent = lazy(() => import('views/ResumePage'));

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<AboutPageComponent />} />
    <Route path="/about" element={<AboutPageComponent />} />
    <Route path="/about/resume" element={<ResumePageComponent />} />
  </Routes>
);
