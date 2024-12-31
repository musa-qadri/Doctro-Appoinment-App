
export const categorioes=[
  "Cardiologist",        
  "Dermatologist",       
  "Neurologist",         
  "Orthopedic Surgeon",  
  "Pediatrician",       
  "Psychiatrist",        
  "General Physician",   
  "Gynecologist",        
  "Oncologist",          
  "Radiologist",         
  "Endocrinologist",     
  "Nephrologist",        // Kidney health
  "Gastroenterologist",  // Digestive system
  "Pulmonologist",       // Lungs and respiratory system
  "Ophthalmologist",     // Eye health
  "ENT Specialist",      // Ear, nose, and throat
  "Urologist",           // Urinary system
  "Hematologist",        // Blood disorders
  "Allergist",           // Allergies and immune system
  "Rheumatologist",      // Joints and autoimmune diseases
  "Plastic Surgeon",     // Reconstruction and cosmetic surgery
  "Anesthesiologist",    // Pain management and sedation
  "Sports Medicine Specialist", // Sports injuries
  "Infectious Disease Specialist", // Infectious diseases
  "Pathologist",         // Laboratory diagnosis
  "Surgeon",             // General surgical procedures
  "Critical Care Specialist", // ICU and life-threatening conditions
  "Geriatrician",        // Elderly care
  "Neonatologist",       // Newborn care
  "Immunologist"         // Immune system diseases
];
export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    appointmentTime: "2024-12-18",
    fees: 500,
    categories: "Cardiology",
    hospital: "City Heart Hospital",
    gender: "Female",
  },
  {
    id: 2,
    name: "Dr. Ahmed Khan",
    appointmentTime: "2024-12-18",
    fees: 700,
    categories: "Orthopedics",
    hospital: "Prime Care Hospital",
    gender: "Male",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    appointmentTime: "2024-12-18",
    fees: 450,
    categories: "Pediatrics",
    hospital: "Green Valley Clinic",
    gender: "Female",
  },
  {
    id: 4,
    name: "Dr. Ravi Patel",
    appointmentTime: "2024-12-18",
    fees: 600,
    categories: "Dermatology",
    hospital: "Sunshine Hospital",
    gender: "Male",
  },
  {
    id: 5,
    name: "Dr. Ayesha Malik",
    appointmentTime: "2024-12-18",
    fees: 550,
    categories: "Gynecology",
    hospital: "Women’s Wellness Center",
    gender: "Female",
  },
  {
    id: 6,
    name: "Dr. Saira Shakeel",
    appointmentTime: "2024-12-18",
    fees: 500,
    categories: "Cardiology",
    hospital: "City Heart Hospital",
    gender: "Female",
  },
  {
    id: 7,
    name: "Dr. Michael Brown",
    appointmentTime: "2024-12-18",
    fees: 750,
    categories: "Neurology",
    hospital: "Neuro Care Hospital",
    gender: "Male",
  },
  {
    id: 8,
    name: "Dr. Olivia White",
    appointmentTime: "2024-12-18",
    fees: 550,
    categories: "Endocrinology",
    hospital: "Health Plus Clinic",
    gender: "Female",
  },
  {
    id: 9,
    name: "Dr. Noah Green",
    appointmentTime: "2024-12-18",
    fees: 650,
    categories: "Oncology",
    hospital: "Cancer Care Center",
    gender: "Male",
  },
  {
    id: 10,
    name: "Dr. Hannah Black",
    appointmentTime: "2024-12-18",
    fees: 500,
    categories: "Radiology",
    hospital: "Imaging & Diagnostic Center",
    gender: "Female",
  },
  {
    id: 11,
    name: "Dr. William Taylor",
    appointmentTime: "2024-12-18",
    fees: 720,
    categories: "Nephrology",
    hospital: "Kidney Care Clinic",
    gender: "Male",
  },
  {
    id: 12,
    name: "Dr. Mia Thompson",
    appointmentTime: "2024-12-18",
    fees: 580,
    categories: "Gastroenterology",
    hospital: "Digestive Health Center",
    gender: "Female",
  },
  {
    id: 13,
    name: "Dr. Isabella Adams",
    appointmentTime: "2024-12-18",
    fees: 400,
    categories: "Pulmonology",
    hospital: "Breath Easy Clinic",
    gender: "Female",
  },
  {
    id: 14,
    name: "Dr. Ethan Foster",
    appointmentTime: "2024-12-18",
    fees: 800,
    categories: "Urology",
    hospital: "Advanced Urology Center",
    gender: "Male",
  },
  {
    id: 15,
    name: "Dr. Grace Turner",
    appointmentTime: "2024-12-18",
    fees: 450,
    categories: "Family Medicine",
    hospital: "Community Health Clinic",
    gender: "Female",
  },
  {
    id: 16,
    name: "Dr. Henry Wilson",
    appointmentTime: "2024-12-18",
    fees: 700,
    categories: "Psychiatry",
    hospital: "Mind & Wellness Center",
    gender: "Male",
  },
  {
    id: 17,
    name: "Dr. Amelia Clark",
    appointmentTime: "2024-12-18",
    fees: 600,
    categories: "Ophthalmology",
    hospital: "Vision Care Hospital",
    gender: "Female",
  },
  {
    id: 18,
    name: "Dr. Jack Moore",
    appointmentTime: "2024-12-18",
    fees: 480,
    categories: "Dentistry",
    hospital: "Bright Smile Clinic",
    gender: "Male",
  },
  {
    id: 19,
    name: "Dr. Sophia Martinez",
    appointmentTime: "2024-12-18",
    fees: 520,
    categories: "Rheumatology",
    hospital: "Joint & Bone Wellness",
    gender: "Female",
  },
  {
    id: 20,
    name: "Dr. Liam Johnson",
    appointmentTime: "2024-12-18",
    fees: 770,
    categories: "Hematology",
    hospital: "Blood Health Institute",
    gender: "Male",
  },
  {
    id: 21,
    name: "Dr. Charlotte Brown",
    appointmentTime: "2024-12-18",
    fees: 640,
    categories: "Anesthesiology",
    hospital: "Pain Management Clinic",
    gender: "Female",
  },
  {
    id: 22,
    name: "Dr. Lucas Scott",
    appointmentTime: "2024-12-18",
    fees: 580,
    categories: "Sports Medicine",
    hospital: "Peak Performance Center",
    gender: "Male",
  },
];
export const currentUser = {
  name : 'bilal',
  role : 'doctor',
  email : 'bilal@gmail.com'

};

export const appointments = [
  {
    user: {
      name: "John Doe",
      email: "johndoe@example.com",
    },
    appointmentTime: "10:00 AM",
    status: "Confirmed",
    appointmentDate: "2024-12-22",
    doctor: {
      name: "Dr. Sarah Johnson",
      hospital: "City Heart Hospital",
    },
  },
  {
    user: {
      name: "Jane Smith",
      email: "janesmith@example.com",
    },
    appointmentTime: "12:00 PM",
    status: "Pending",
    appointmentDate: "2024-12-23",
    doctor: {
      name: "Dr. Ahmed Khan",
      hospital: "Prime Care Hospital",
    },
  },
  {
    user: {
      name: "David Brown",
      email: "davidbrown@example.com",
    },
    appointmentTime: "02:30 PM",
    status: "Cancelled",
    appointmentDate: "2024-12-24",
    doctor: {
      name: "Dr. Emily Davis",
      hospital: "Green Valley Clinic",
    },
  },
  {
    user: {
      name: "Sophia Lee",
      email: "sophialee@example.com",
    },
    appointmentTime: "09:00 AM",
    status: "Confirmed",
    appointmentDate: "2024-12-25",
    doctor: {
      name: "Dr. Ravi Patel",
      hospital: "Sunshine Hospital",
    },
  },
  {
    user: {
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
    },
    appointmentTime: "03:00 PM",
    status: "Pending",
    appointmentDate: "2024-12-26",
    doctor: {
      name: "Dr. Ayesha Malik",
      hospital: "Women’s Wellness Center",
    },
  },
  {
    user: {
      name: "Emma Wilson",
      email: "emmawilson@example.com",
    },
    appointmentTime: "11:00 AM",
    status: "Confirmed",
    appointmentDate: "2024-12-27",
    doctor: {
      name: "Dr. Saira Shakeel",
      hospital: "City Heart Hospital",
    },
  },
  {
    user: {
      name: "Liam Taylor",
      email: "liamtaylor@example.com",
    },
    appointmentTime: "01:00 PM",
    status: "Cancelled",
    appointmentDate: "2024-12-28",
    doctor: {
      name: "Dr. Michael Brown",
      hospital: "Neuro Care Hospital",
    },
  },
  {
    user: {
      name: "Olivia Davis",
      email: "oliviadavis@example.com",
    },
    appointmentTime: "04:00 PM",
    status: "Pending",
    appointmentDate: "2024-12-29",
    doctor: {
      name: "Dr. Sarah Johnson",
      hospital: "City Heart Hospital",
    },
  },
  {
    user: {
      name: "Noah Martinez",
      email: "noahmartinez@example.com",
    },
    appointmentTime: "05:30 PM",
    status: "Confirmed",
    appointmentDate: "2024-12-30",
    doctor: {
      name: "Dr. Emily Davis",
      hospital: "Green Valley Clinic",
    },
  },
  {
    user: {
      name: "Ava Moore",
      email: "avamoore@example.com",
    },
    appointmentTime: "08:00 AM",
    status: "Confirmed",
    appointmentDate: "2024-12-31",
    doctor: {
      name: "Dr. Ahmed Khan",
      hospital: "Prime Care Hospital",
    },
  },
];

