import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'web-app';
  logopath: string = 'assets/images/iLink-logo.webp';

  headerpath: string = 'assets/images/casual.webp';


  /* job application */
 selectedLocation: string | null = null;
  

  jobsByLocation: any = {
    Chennai: [
      { title: 'Software Engineer', location: 'Chennai' },
      { title: 'Backend Developer', location: 'Chennai' }
    ],
    Pune: [
      { title: 'Frontend Developer', location: 'Pune' },
      { title: 'UI/UX Designer', location: 'Pune' }
    ],
    USA: [
      { title: 'Cloud Engineer', location: 'USA' },
      { title: 'AI Specialist', location: 'USA' }
    ],
    Trichy: [
      { title: 'Full Stack Developer', location: 'Trichy' },
      { title: 'Mobile App Developer', location: 'Trichy' }
    ]
  };

/*

    selectedJob: any = null; 

  openModal(location: string) {
    this.selectedJob = { title: `Job at ${location}` }; 
  }

  closeForm() {
    this.selectedJob = null; 
  }
 */
  selectedJob: any = null; // Store selected job details
  isModalOpen = false;
  jobs = [
    { title: 'Software Developer', location: 'Chennai' },
    { title: 'Frontend Engineer', location: 'Pune' },
    { title: 'Backend Engineer', location: 'USA' },
    { title: 'Full Stack Developer', location: 'Trichy' }
  ];

  openModal(job: any) {
    this.selectedJob = job; // Set selected job details
    this.isModalOpen = true; 
  }

  closeForm() {
    this.selectedJob = null; // Close modal
  }

  sendEmail() {
    if (this.selectedJob) {
      const email = "hr@example.com"; // Replace with your HR email
      const subject = `Job Application for ${this.selectedJob.title} - ${this.selectedJob.location}`;
      const body = `Dear HR,\n\nI am interested in applying for the ${this.selectedJob.title} position located in ${this.selectedJob.location}. Please find my resume attached.\n\nBest regards,`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink; // Opens email client
    }
  }
}
