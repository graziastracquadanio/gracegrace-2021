import React, { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

const AboutPageComponent = lazy(() => import('views/AboutPage'));
const LoginPageComponent = lazy(() => import('views/LoginPage'));
const ResumePageComponent = lazy(() => import('views/ResumePage'));
const StyleguidePageComponent = lazy(() => import('views/StyleguidePage'));

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<AboutPageComponent />} />
    <Route path="/login" element={<LoginPageComponent />} />
    <Route path="/styleguide" element={<StyleguidePageComponent />} />
    <Route path="/about" element={<AboutPageComponent />} />
    <Route path="/about/resume" element={<ResumePageComponent />} />
  </Routes>
);
