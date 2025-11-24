let jobs = [
  { id: "1", title: "Desenvolvedor React Jr.", company: "TechBridge" },
  { id: "2", title: "Analista de Dados", company: "DataCorp" },
];

export async function listJobs() {
  return new Promise((resolve) => setTimeout(() => resolve(jobs), 500));
}

export async function createJob(job: any) {
  return new Promise((resolve) =>
    setTimeout(() => {
      const newJob = { id: String(Date.now()), ...job };
      jobs.push(newJob);
      resolve(newJob);
    }, 500)
  );
}

export async function updateJob(id: string, job: any) {
  return new Promise((resolve) =>
    setTimeout(() => {
      jobs = jobs.map((j) => (j.id === id ? { ...j, ...job } : j));
      resolve(job);
    }, 500)
  );
}

export async function deleteJob(id: string) {
  return new Promise((resolve) =>
    setTimeout(() => {
      jobs = jobs.filter((j) => j.id !== id);
      resolve(true);
    }, 500)
  );
}
