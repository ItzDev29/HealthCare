export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dev Mehta (Cardiologist)",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Ayush Malviya (Dermatologist)",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Gaurav Kalwani (Dentist)",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Amit Kumar (Psychiatrist)",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Neha Patel (Diabetologist)",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Shivam Sharma (Radiologist)",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Ravi Patel (Ophthalmologist)",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz (Gynecologist)",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma (Oncologist)",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
