import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import { useState } from 'react';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
// import JobPage, {jobLoader} from './pages/JobPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {

  const [jobs, setJobs] = useState([
    
    {
      "id": "1",
      "title": "Senior React Developer",
      "type": "Full-Time",
      "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
      "location": "Boston, MA",
      "salary": "$70K - $80K",
      "company": {
        "name": "NewTek Solutions",
        "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
        "contactEmail": "contact@teksolutions.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "2",
      "title": "Front-End Engineer (React & Redux)",
      "type": "Full-Time",
      "location": "Miami, FL",
      "description": "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
      "salary": "$70K - $80K",
      "company": {
        "name": "Veneer Solutions",
        "description": "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
        "contactEmail": "contact@loremipsum.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "3",
      "title": "React.js Dev",
      "type": "Full-Time",
      "location": "Brooklyn, NY",
      "description": "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
      "salary": "$70K - $80K",
      "company": {
        "name": "Dolor Cloud",
        "description": "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
        "contactEmail": "contact@dolorsitamet.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "4",
      "title": "React Front-End Developer",
      "type": "Part-Time",
      "description": "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
      "location": "Pheonix, AZ",
      "salary": "$60K - $70K",
      "company": {
        "name": "Alpha Elite",
        "description": "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
        "contactEmail": "contact@adipisicingelit.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "5",
      "title": "Full Stack React Developer",
      "type": "Full-Time",
      "description": "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
      "location": "Atlanta, GA",
      "salary": "$90K - $100K",
      "company": {
        "name": "Browning Technologies",
        "description": "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
        "contactEmail": "contact@consecteturadipisicing.com",
        "contactPhone": "555-555-5555"
      }
    },
    {
      "id": "6",
      "title": "React Native Developer",
      "type": "Full-Time",
      "description": "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
      "location": "Portland, OR",
      "salary": "$100K - $110K",
      "company": {
        "name": "Port Solutions INC",
        "description": "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
        "contactEmail": "contact@ipsumlorem.com",
        "contactPhone": "555-555-5555"
      }
    }
  
  ]);

  // Add New Job Old Code
  // const addJob = async (newJob) => {
  //   const res = await fetch('/api/jobs', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newJob),
  //   });
  //   return;
  // }

  // Add New Job
  const addJob = (newJob) => {

    const id = jobs.length + 1;

    const newjob = { id, ...newJob };
    setJobs([...jobs, newjob]);
    return;
  }

  // Delete Job Old Code
  // const deleteJob = async (id) => {
  //   const res = await fetch(`/api/jobs/${id}`, {
  //     method: 'DELETE'
  //   });
  //   return;
  // }

  // Delete Job
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
    return;
  }

  // Update Job Old Code
  // const updateJob = async (job) => {
  //   const res = await fetch(`/api/jobs/${job.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(job),
  //   });
  //   return;
  // }

  // Update Job
  const updateJob = (job) => {
    let allJobs = [...jobs];
    let id = job.id;

    id-=1;

    allJobs[id].title = job.title;
    allJobs[id].type = job.type;
    allJobs[id].location = job.location;
    allJobs[id].description = job.description;
    allJobs[id].salary = job.salary;
    allJobs[id].company.name = job.company.name;
    allJobs[id].company.description = job.company.description;
    allJobs[id].company.contactEmail = job.company.contactEmail;
    allJobs[id].company.contactPhone = job.company.contactPhone;

    setJobs([...allJobs]);
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage jobs={jobs} />} />
        <Route path='/jobs' element={<JobsPage jobs={jobs} />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        {/* <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/job/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} /> */}
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} jobs={jobs} />} />
        <Route path='/job/:id' element={<JobPage deleteJob={deleteJob} jobs={jobs} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App