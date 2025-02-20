export interface ActivityFormData {
    // Activity Details
    activityName: string;
    activityCategory: string;
    activityDescription: string;
    activityType: 'Indoor' | 'Outdoor' | 'Virtual';
    
    // Location Details
    locationName: string;
    addressLine1: string;
    addressLine2?: string;
    zipCode: string;
    city: string;
    state: string;
    
    // Contact Details
    contactPerson: string;
    contactPhone: string;
    maxParticipants: string;
  }
  
  export type FormStep = 'activity-details' | 'location-details';
  
  export interface FormErrors {
    activityName?: string;
    activityCategory?: string;
    activityDescription?: string;
    activityType?: string;
    locationName?: string;
    addressLine1?: string;
    zipCode?: string;
    city?: string;
    state?: string;
    contactPerson?: string;
    contactPhone?: string;
    maxParticipants?: string;
  }