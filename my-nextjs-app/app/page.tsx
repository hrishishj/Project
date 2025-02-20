import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ActivityFormWrapper } from '../components/forms/ActivityForm';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">New activity/details</h1>
        <ActivityFormWrapper />
      </div>
      <Footer />
    </main>
  );
}