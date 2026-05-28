import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  showAllExpertise = false;
  showAllServices = false;

  expertiseList = [
    { icon: 'fas fa-user-friends', title: 'Divorce', desc: 'Top divorce law services in Delhi/NCR — expert support for contested and mutual divorce cases.' },
    { icon: 'fas fa-shield-alt', title: 'Domestic Violence', desc: 'Experienced domestic violence lawyer providing dedicated legal help to protect your rights.' },
    { icon: 'fas fa-heart', title: 'Matrimonial', desc: 'Trusted matrimonial lawyer specializing in divorce, alimony, and family disputes.' },
    { icon: 'fas fa-users-cog', title: 'Family Disputes', desc: 'Best family dispute lawyer dedicated to protecting your rights and achieving fair resolutions.' },
    { icon: 'fas fa-unlock-alt', title: 'Bail Matters', desc: 'Trusted bail lawyer in Delhi helping clients secure timely release with expert representation.' },
    { icon: 'fas fa-money-check', title: 'Cheque Bounce', desc: 'Expert cheque bounce lawyer providing swift legal action and effective solutions for Section 138 cases.' },
    { icon: 'fas fa-balance-scale-left', title: 'Civil Law', desc: 'Experienced civil lawyer providing expert legal solutions for property and contract cases.' },
    { icon: 'fas fa-gavel', title: 'Criminal Defense', desc: 'Top criminal lawyer specializing in defense for serious offenses, ensuring your rights are protected.' },
    { icon: 'fas fa-landmark', title: 'Supreme Court', desc: 'Experienced Supreme Court lawyer offering expert representation in high-stakes constitutional cases.' },
    { icon: 'fas fa-briefcase', title: 'Corporate Law', desc: 'Expert corporate lawyer providing strategic legal solutions for businesses and compliance.' }
  ];

  servicesList = [
    { icon: 'fas fa-child', title: 'Child Custody', desc: 'Expert legal guidance in child custody, guardianship, and visitation rights.' },
    { icon: 'fas fa-file-signature', title: 'Legal Documentation', desc: 'Comprehensive drafting of wills, sale deeds, and agreements with legal precision.' },
    { icon: 'fas fa-hand-holding-usd', title: 'Debt Recovery (DRT)', desc: 'Expert Debt Recovery Tribunal Lawyers providing support for financial claims efficiently.' },
    { icon: 'fas fa-home', title: 'Property Law', desc: 'Specialized services for property verification, title deeds, and resolution of disputes.' },
    { icon: 'fas fa-university', title: 'Delhi High Court', desc: 'Experienced representation in the High Court for writ petitions and appeals.' },
    { icon: 'fas fa-id-card-alt', title: 'C.A.T Services', desc: 'Expert CAT lawyers handling government service disputes and administrative appeals.' },
    { icon: 'fas fa-city', title: 'RERA', desc: 'Protecting homebuyer interests and providing legal solutions under the Real Estate Regulatory Authority.' },
    { icon: 'fas fa-shopping-cart', title: 'Consumer Disputes', desc: 'Representation in consumer forums for deficiency in service and compensation.' },
    { icon: 'fas fa-laptop-code', title: 'Cyber Law', desc: 'Addressing cyber crimes, data protection, and IT-related legal issues.' },
    { icon: 'fas fa-rings-wedding', title: 'Court Marriage', desc: 'Legal assistance for hassle-free court marriage registration and certificates.' }
  ];

  toggleExpertise() {
    this.showAllExpertise = !this.showAllExpertise;
  }

  toggleServices() {
    this.showAllServices = !this.showAllServices;
  }
}
