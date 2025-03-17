import { Component, ViewEncapsulation } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {

isShow  = true;

  title = 'web-app';
  logopath: string = 'assets/images/iLink-logo.webp';

  headerpath: string = 'assets/images/casual.webp';


  /* job application */  selectedLocation: string | null = null;
  isModalOpen = false;
  selectedJob: any = null; // Store selected job details

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

  selectLocation(location: string) {
    this.selectedLocation = location;
    this.isModalOpen = true; // Open modal for selected location
  }

  openModal(job: any) {
    this.selectedJob = job; // Set selected job details
    console.log('Selected Job:', this.selectedJob); // Debug: Log selected job
  }

  closeForm() {
    this.selectedJob = null; // Clear selected job
    this.isModalOpen = false; // Close modal
  }

  sendEmail() {
    if (this.selectedJob) {
      const email = "harinirj.sr@gmail.com"; // Replace with your HR email
      const subject = `Job Application for ${this.selectedJob.title} - ${this.selectedJob.location}`;
      const body = `Dear HR,\n\nI am interested in applying for the ${this.selectedJob.title} position located in ${this.selectedJob.location}. Please find my resume attached.\n\nBest regards,`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      console.log('Mailto link:', mailtoLink); // Debug: Log mailto link
      window.location.href = mailtoLink; // Opens email client
    }
  }
  isShows = false;

  isOpen() {
    this.isShows = true;
  }

  closeModal() {
    this.isShows = false;
  }

  microsoft: string = "assets/images/microsoft.jpg";
  aws: string = "assets/images/aws.jpg";
  databricks: string = "assets/images/databricks.jpg";
  ptc: string = "assets/images/ptc.jpg";
  salesforce: string = "assets/images/salesforce.jpg";
  uipath: string = "assets/images/uipath.jpg";

/* service */
service:string = "assets/images/digital-ai.jpg";

testimonials = [
  { name: "Abishek", rating: 5, comment: "Excellent service!", image: "assets/images/2.jpg" },
  { name: "Monica", rating: 4, comment: "Very professional!", image: "assets/images/3.jpg" },
  { name: "Swetha", rating: 5, comment: "Highly recommended!", image: "assets/images/4.jpg" },
  { name: "Karthik", rating: 4, comment: "Amazing experience!", image: "assets/images/1.jpg" }
];


ngAfterViewInit() {
  if (typeof window !== 'undefined') {
    console.log('Initializing AOS...');
    AOS.init({
      duration: 1000,
      delay: 200
    });
  }
}

  }
