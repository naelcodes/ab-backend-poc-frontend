import { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import CodeVerification from './pages/code-verification/CodeVerification';
import SetPassword from './pages/set-password/SetPassword';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/not-found/NotFound';


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="sign-in" element={<SignIn />} index />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="verification" element={<CodeVerification />} />
      <Route path="new-password" element={<SetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App () {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
