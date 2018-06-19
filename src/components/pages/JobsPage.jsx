import React from 'react';
import JobIntro from '../jobs/JobIntro';
import TopBar from '../topBar/TopBar.jsx';
import JobPosition from '../jobs/JobPosition';
import JobBenefit from '../jobs/JobBenefit';
import JobGallery from '../jobs/JobGallery';

const JobsPage = () => (
    <div>
        <TopBar />
        <JobIntro />
        <JobPosition />
        <JobBenefit />
        <JobGallery />
    </div>
);

export default JobsPage;