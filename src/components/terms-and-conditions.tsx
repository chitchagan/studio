import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

export function TermsAndConditions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-muted-foreground text-xs">
          Terms and Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-6">
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Introduction</h3>
              <p>
                This website, operated under the name “Stanskill” and available at stanskill.com, is owned and managed by Stanskill Private Limited, with its registered office at C/O Sisinty Hari Prasad, Prem Nagar, 7th Line, Last House, Berhampur, Odisha, 760001. The term “Company”, “we”, “our”, or “us” refers to Stanskill and its affiliates, associates, assignees, or successors-in-interest. The term “You”, “Your”, or “User” refers to any person accessing, viewing, or using the Website.
              </p>
              <p className="mt-2">
                Please carefully read these Terms and Conditions (“Terms”) along with our Privacy Policy and other rules or policies published on the Website. These documents together govern Your use of the Website and the Services (defined below).
              </p>
              <p className="mt-2">
                By accessing or using the Website, You confirm that You are at least 18 years old. If You represent an institution or entity, You confirm that You are authorized to act on its behalf. Users below 18 (“Children”) are permitted only with parental/legal guardian consent or through an Instructor (defined below).
              </p>
              <p className="mt-2">
                Our privacy practices regarding the collection, storage, and processing of Your personal and sensitive information are governed by our Privacy Policy.
              </p>
              <p className="mt-2">
                By continuing to use this Website, You agree to be bound by these Terms and the Privacy Policy.
              </p>
              <p className="mt-2">
                This document is published in accordance with the Information Technology Act, 2000 and Rule 3(1)(b) of the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Acceptance of Terms</h3>
              <p>
                By registering, subscribing, or using the Services, You represent that You have the right, authority, and capacity to do so. If You do not agree to these Terms or our Privacy Policy, please discontinue use of the Website.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Overview of Services</h3>
              <p>
                Stanskill provides a digital learning platform that connects Instructors with Students. Through our Website, Instructors can deliver educational services including tutorials, lectures, webinars, and mentoring. Students can access these Services, along with company-provided content such as videos, documents, and other learning materials (“Company Material”).
              </p>
              <p className="mt-2">
                We grant You a limited, revocable, non-transferable license to use the Website, Services, and Company Materials for personal, non-commercial purposes only.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Registration and Eligibility</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>You must provide accurate registration details (name, email, contact information, payment information, etc.).</li>
                <li>You are responsible for maintaining the confidentiality of Your login credentials.</li>
                <li>Any unauthorized use or sharing of Your login credentials may result in suspension or termination of access.</li>
                <li>Subscription to Services is strictly non-transferable.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Instructors</h3>
              <p>
                Instructors are responsible for all content they publish, including lectures, assessments, resources, and announcements (“Instructor Content”). Stanskill does not monitor or edit Instructor Content and assumes no liability for its quality or compliance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Payment</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Services are offered on a subscription basis, with fees (“Fees”) displayed on the Website in INR or USD.</li>
                <li>All payments must be made through the Company’s designated payment gateways.</li>
                <li>Fees are non-refundable unless otherwise specified in the Refund Policy.</li>
                <li>Stanskill reserves the right to revise subscription pricing or payment terms at any time.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Refunds and Cancellations</h3>
              <p>
                Refunds, if applicable, will be processed strictly in line with our Refund Policy published on the Website.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Intellectual Property</h3>
              <p>
                All Website content, trademarks, materials, and Services are the intellectual property of Stanskill or its licensors. Users may not reproduce, distribute, or modify Company Materials without prior written consent.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Rules of Conduct</h3>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Upload unlawful, abusive, offensive, or infringing content.</li>
                <li>Impersonate another person or entity.</li>
                <li>Share malware, spam, or unauthorized advertising.</li>
                <li>Violate copyright, privacy, or intellectual property rights.</li>
                <li>Engage in fraudulent, deceptive, or illegal activity on the platform.</li>
              </ul>
              <p className="mt-2">Violation of these rules may result in suspension, termination, or legal action.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">User Content</h3>
              <p>
                Users may post feedback, reviews, or other contributions (“User Content”). Stanskill reserves the right to moderate or remove User Content that violates applicable laws or these Terms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Indemnity</h3>
              <p>
                You agree to indemnify and hold harmless Stanskill, its directors, officers, employees, and affiliates from any claims, damages, or liabilities arising out of Your use of the Services, breach of Terms, or violation of law.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Termination</h3>
              <p>We may suspend or terminate Your access to the Website if:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>You breach these Terms or Privacy Policy,</li>
                <li>Your actions pose security risks, or</li>
                <li>We deem it necessary for other legitimate reasons.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Disclaimer and Limitation of Liability</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Services and materials are provided on an “as is” basis without warranties of accuracy, quality, or fitness.</li>
                <li>Stanskill is not liable for Instructor Content, Student behavior, or third-party dependencies.</li>
                <li>Our liability, if proven, shall not exceed the Fees paid by You in the preceding one month.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Governing Law and Dispute Resolution</h3>
              <p>
                These Terms shall be governed by the laws of India. Disputes shall be resolved through arbitration in Bengaluru, Karnataka, in accordance with the Arbitration and Conciliation Act, 1996. The language of arbitration will be English.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Severability</h3>
              <p>
                If any provision of these Terms is found unenforceable, the remaining provisions shall continue in effect.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Modification of Terms</h3>
              <p>
                Stanskill reserves the right to amend these Terms, policies, or Services at its discretion. Continued use of the Website after changes implies acceptance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Third-Party Links and Ads</h3>
              <p>
                The Website may contain third-party advertisements or links. Stanskill is not responsible for the terms, policies, or practices of such third parties.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Contact and Grievance Officer</h3>
              <p>For queries or grievances, please contact:</p>
              <p className="mt-2">
                Grievance Officer: Jegankumar<br />
                Email: admin@stanskill.com<br />
                Phone: +91-9488991863
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
