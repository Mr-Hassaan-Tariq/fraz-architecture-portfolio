import React, { useState } from 'react';
import { useRouter } from 'next/router';
import projectsData from '@/constant/projectData.json'
import slugify from 'slugify';

export default function ProjectDetail() {

  const router = useRouter();
  const { project } = router.query;

  let projectName = null;
  let projectData = null;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (project) {
    projectName = project.charAt(0).toUpperCase() + project.slice(1); // Capitalize first letter

    // Generate slug
    const slug = slugify(projectName, { lower: true }); // Using slugify directly here

    // Find service data from JSON
    projectData = projectsData.projects.find(item => slugify(item.UrlName, { lower: true }) === slug);

  }



  return (
    <div className="servicesBg">
      <div className="container py-5 text-center">
        <div className="row p-lg-5">
          <div className="col-12 p-5">
            <h3 >{projectData.heading}</h3>
            <p className="px-lg-5">{projectData.description}</p>
            <div className="px-lg-5"> <img src={projectData.img} style={{ width: "100%" }} /></div>
          </div>

        </div>
      </div>
      <div className="container-fluid p-5" style={{ background: 'white' }}>
        <div className="container text-center">
          <h3>{projectData.name}</h3>
          <div className="row">
            {projectData.images.map((img, index) => (
              <div className="col-lg-4 col-md-12 p-4">
                <img src={img} style={{ width: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
