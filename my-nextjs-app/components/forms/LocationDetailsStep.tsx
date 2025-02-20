import React from 'react';
import { useFormContext } from '../../contexts/FormContext';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

const states = [
  { value: '', label: 'Select State' },
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  // Add all states here
  { value: 'WY', label: 'Wyoming' }
];

const LocationDetailsStep: React.FC = () => {
  const { formData, updateFormData, errors, validateStep, setCurrentStep, resetForm } = useFormContext();

  const handlePrevious = () => {
    setCurrentStep('activity-details');
  };

  const handleSubmit = () => {
    if (validateStep('location-details')) {
      console.log('Form submitted with data:', formData);
      setTimeout(() => {
        const event = new CustomEvent('formSubmitted');
        window.dispatchEvent(event);
        resetForm();
      }, 500);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-6">Location Details</h2>
      <p className="text-sm text-gray-500 mb-6">Please provide the location for where this activity takes place.</p>
      
      <Input
        label="Venue/Location"
        placeholder="Please enter a venue/location name"
        value={formData.locationName}
        onChange={(e) => updateFormData({ locationName: e.target.value })}
        error={errors.locationName}
      />
      
      <Input
        label="Address Line 1"
        placeholder="Street address, e.g. building name/number, etc."
        value={formData.addressLine1}
        onChange={(e) => updateFormData({ addressLine1: e.target.value })}
        error={errors.addressLine1}
      />
      
      <Input
        label="Address Line 2"
        placeholder="Apartment, suite, unit, building, floor, etc."
        value={formData.addressLine2 || ''}
        onChange={(e) => updateFormData({ addressLine2: e.target.value })}
      />
      
      <Input
        label="ZIP Code"
        placeholder="e.g. 123 456"
        value={formData.zipCode}
        onChange={(e) => updateFormData({ zipCode: e.target.value })}
        error={errors.zipCode}
      />
      
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="City"
          placeholder="New York"
          value={formData.city}
          onChange={(e) => updateFormData({ city: e.target.value })}
          error={errors.city}
        />
        
        <Select
          label="State"
          options={states}
          value={formData.state}
          onChange={(value) => updateFormData({ state: value })}
          error={errors.state}
        />
      </div>
      
      <h3 className="text-lg font-medium mt-8 mb-4">Contact details</h3>
      <p className="text-sm text-gray-500 mb-4">Please provide contact information for this activity.</p>
      
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Contact Person"
          value={formData.contactPerson}
          onChange={(e) => updateFormData({ contactPerson: e.target.value })}
          error={errors.contactPerson}
        />
        
        <Input
          label="Contact Phone"
          value={formData.contactPhone}
          onChange={(e) => updateFormData({ contactPhone: e.target.value })}
          error={errors.contactPhone}
        />
      </div>
      
      <Input
        label="How many members can take part in the activity?"
        placeholder="Maximum number"
        type="number"
        value={formData.maxParticipants}
        onChange={(e) => updateFormData({ maxParticipants: e.target.value })}
        error={errors.maxParticipants}
      />
      
      <div className="mt-8 flex justify-between">
        <Button variant="secondary" onClick={handlePrevious}>
          Previous
        </Button>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LocationDetailsStep;