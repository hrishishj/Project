"use client";
import React, { createContext, useContext, useState } from 'react';
import { ActivityFormData, FormErrors, FormStep } from '../types/form';

interface FormContextType {
  formData: ActivityFormData;
  updateFormData: (data: Partial<ActivityFormData>) => void;
  errors: FormErrors;
  validateStep: (step: FormStep) => boolean;
  currentStep: FormStep;
  setCurrentStep: (step: FormStep) => void;
  resetForm: () => void;
}

const initialFormData: ActivityFormData = {
  activityName: '',
  activityCategory: '',
  activityDescription: '',
  activityType: 'Indoor',
  locationName: '',
  addressLine1: '',
  addressLine2: '',
  zipCode: '',
  city: '',
  state: '',
  contactPerson: '',
  contactPhone: '',
  maxParticipants: '',
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<ActivityFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [currentStep, setCurrentStep] = useState<FormStep>('activity-details');

  const updateFormData = (data: Partial<ActivityFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const validateActivityDetails = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.activityName.trim()) {
      newErrors.activityName = 'Activity name is required';
      isValid = false;
    }

    if (!formData.activityCategory) {
      newErrors.activityCategory = 'Please select a category';
      isValid = false;
    }

    if (!formData.activityDescription.trim()) {
      newErrors.activityDescription = 'Activity description is required';
      isValid = false;
    }

    if (!formData.activityType) {
      newErrors.activityType = 'Please select an activity type';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateLocationDetails = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.locationName.trim()) {
      newErrors.locationName = 'Location name is required';
      isValid = false;
    }

    if (!formData.addressLine1.trim()) {
      newErrors.addressLine1 = 'Address is required';
      isValid = false;
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.state) {
      newErrors.state = 'State is required';
      isValid = false;
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required';
      isValid = false;
    }

    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = 'Contact phone is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep = (step: FormStep): boolean => {
    switch (step) {
      case 'activity-details':
        return validateActivityDetails();
      case 'location-details':
        return validateLocationDetails();
      default:
        return false;
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setCurrentStep('activity-details');
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        errors,
        validateStep,
        currentStep,
        setCurrentStep,
        resetForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};