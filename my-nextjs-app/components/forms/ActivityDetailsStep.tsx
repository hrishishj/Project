import React from 'react';
import { useFormContext } from '../../contexts/FormContext';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import RadioGroup from '../ui/RadioGroup';
import Button from '../ui/Button';

const activityCategories = [
  { value: '', label: 'Select the best category to describe your activity' },
  { value: 'Adventure & Games', label: 'Adventure & Games' },
  { value: 'Outdoor Exploration', label: 'Outdoor Exploration' },
  { value: 'Food & Cooking', label: 'Food & Cooking' },
  { value: 'Learning & Development', label: 'Learning & Development' },
  { value: 'Sports and Fitness', label: 'Sports and Fitness' },
  { value: 'Volunteering', label: 'Volunteering' },
  { value: 'Other', label: 'Other' }
];

const activityTypes = [
  { value: 'Indoor', label: 'Indoor' },
  { value: 'Outdoor', label: 'Outdoor' },
  { value: 'Virtual', label: 'Virtual' }
];

const ActivityDetailsStep: React.FC = () => {
  const { formData, updateFormData, errors, validateStep, setCurrentStep } = useFormContext();

  const handleContinue = () => {
    if (validateStep('activity-details')) {
      setCurrentStep('location-details');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-6">Activity Details</h2>
      
      <Input
        label="Activity Name"
        placeholder="e.g. Cooking class at Antonio's"
        value={formData.activityName}
        onChange={(e) => updateFormData({ activityName: e.target.value })}
        error={errors.activityName}
      />
      
      <Select
        label="Select the best category to describe your activity"
        options={activityCategories}
        value={formData.activityCategory}
        onChange={(value) => updateFormData({ activityCategory: value })}
        error={errors.activityCategory}
      />
      
      <Textarea
        label="About the Activity"
        placeholder="Activity Description"
        value={formData.activityDescription}
        onChange={(e) => updateFormData({ activityDescription: e.target.value })}
        error={errors.activityDescription}
      />
      
      <div className="mt-8 mb-4">
        <p className="text-sm font-medium mb-2">Please select the activity type</p>
        <RadioGroup
          name="activityType"
          options={activityTypes}
          value={formData.activityType}
          onChange={(value) => updateFormData({ activityType: value as 'Indoor' | 'Outdoor' | 'Virtual' })}
          error={errors.activityType}
        />
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button onClick={handleContinue}>
          Save and Continue
        </Button>
      </div>
    </div>
  );
};

export default ActivityDetailsStep;