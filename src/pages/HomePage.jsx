import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = ({jobs}) => {
  console.log(jobs);
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} allJobs={jobs} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage