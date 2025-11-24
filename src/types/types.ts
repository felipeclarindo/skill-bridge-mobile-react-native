export type User = {
  id: string;
  name: string;
  email: string;
  role: "candidate" | "employer" | "admin";
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  postedBy: string; // user id
};

export type Application = {
  id: string;
  userId: string;
  jobId: string;
  status: "applied" | "viewed" | "interview" | "rejected" | "hired";
  message?: string;
};
