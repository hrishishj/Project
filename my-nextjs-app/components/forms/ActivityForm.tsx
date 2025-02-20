"use client";

import React, { useEffect, useState } from 'react';
import { FormProvider, useFormContext } from '../../contexts/FormContext';
import Tabs from '../ui/Tabs';
import ActivityDetailsStep from './ActivityDetailsStep';
import LocationDetailsStep from './LocationDetailsStep';
import SuccessModal from './SuccessModal';
// import Image from 'next/image';
// import logo from "../../assests/mammothzy-img.svg";

export const ActivityFormWrapper: React.FC = () => {
  return (
    <FormProvider>
      <ActivityForm />
    </FormProvider>
  );
};

const ActivityForm: React.FC = () => {
  const { currentStep, setCurrentStep } = useFormContext();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const tabs = [
    {
      id: 'activity-details',
      label: 'Activity Details',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'location-details',
      label: 'Location Details',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const handleTabChange = (tabId: string) => {
    if (tabId === 'location-details' && currentStep === 'activity-details') {
      return;
    }
    
    setCurrentStep(tabId as 'activity-details' | 'location-details');
  };

  useEffect(() => {
    const handleFormSubmitted = () => {
      setShowSuccessModal(true);
    };

    window.addEventListener('formSubmitted', handleFormSubmitted);
    
    return () => {
      window.removeEventListener('formSubmitted', handleFormSubmitted);
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg my-8">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold">Create new Activity</h1>
        <button className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <Tabs 
        tabs={tabs} 
        activeTab={currentStep} 
        onTabChange={handleTabChange} 
      />

      <div className="mt-4">
        {currentStep === 'activity-details' && <ActivityDetailsStep />}
        {currentStep === 'location-details' && <LocationDetailsStep />}
        </div>
      
      <div className="border-t mt-6 py-6 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          {/* <Image 
            src={logo} 
            alt="Mammothzy Logo" 
            width={100} 
            height={50}
          /> */}

          {/* <span className="text-lg font-semibold">mammothzy</span> */}
        </div>
      </div>
      
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </div>
  );
};

export default ActivityFormWrapper;   