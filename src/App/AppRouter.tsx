import React, { lazy, useEffect } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

const AboutPageComponent = lazy(() => import('views/AboutPage'));
const ContactPageComponent = lazy(() => import('views/ContactPage'));
const LoginPageComponent = lazy(() => import('views/LoginPage'));
const NotFoundPageComponent = lazy(() => import('views/NotFoundPage'));
const RecipePageComponent = lazy(() => import('views/RecipePage'));
const RecipesListPageComponent = lazy(() => import('views/RecipesListPage'));
const ResumePageComponent = lazy(() => import('views/ResumePage'));
const StyleguidePageComponent = lazy(() => import('views/StyleguidePage'));
const RecipeEditPageComponent = lazy(() => import('views/RecipeEditPage'));

export const AppRouter = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<AboutPageComponent />} />
      <Route path="/login" element={<LoginPageComponent />} />
      <Route path="/styleguide" element={<StyleguidePageComponent />} />
      <Route path="/about" element={<AboutPageComponent />} />
      <Route path="/about/resume" element={<ResumePageComponent />} />
      <Route path="/contact" element={<ContactPageComponent />} />
      <Route path="/recipes" element={<RecipesListPageComponent />} />
      <Route path="/recipes/new" element={<RecipeEditPageComponent />} />
      <Route path="/recipes/:recipeId" element={<RecipePageComponent />} />
      <Route path="/recipes/:recipeId/edit" element={<RecipeEditPageComponent />} />
      <Route path="*" element={<NotFoundPageComponent />} />
    </Routes>
  );
};
