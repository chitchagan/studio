import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

export function PrivacyPolicy() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-muted-foreground text-xs">
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            This Privacy Policy explains our practices for the entire content of the Website.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-6">
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Introduction</h3>
              <p>
                The website www.stanskill.com (“Website”) is owned and operated by Stanskill Private Limited, having its registered office at C/O Sisinty Hari Prasad, Prem Nagar, 7th Line, Last House, Berhampur, Odisha, 760001 (“Company”, “we”, “us”, “our”).
              </p>
              <p className="mt-2">
                The Company provides high-impact, cohort-based programs focused on personal and professional growth (the “Services”).
              </p>
              <p className="mt-2">
                This document is published pursuant to the Information Technology Act, 2000, the Reasonable Security Practices and Procedures and Sensitive Personal Data or Information Rules, 2011, and the Digital Personal Data Protection Act, 2023.
              </p>
              <p className="mt-2">
                Please read this Privacy Policy and our Terms of Use available at www.stanskill.com before accessing or using the Website.
              </p>
              <p className="mt-2">
                For this Privacy Policy, “you”, “your”, or “user” means any person who accesses, uses, and/or participates on the Website in any manner. Anyone under 18 years of age is considered a Child and requires parental/guardian consent to use the Website. The parent/legal guardian is referred to as “You” or “Your” where relevant.
              </p>
              <p className="mt-2">
                Protecting your personal information is a top priority. We adopt reasonable security measures to safeguard your information and its transmission over the internet.
              </p>
              <p className="mt-2">
                By using our Services and/or the Website or by providing information to us, you consent to this Privacy Policy and our use and disclosure of your Personal Information as described here. If you do not agree, please do not use the Website/Services or provide us with your information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">1) Collection of Information</h3>
              <p>
                To the extent permitted by law, we are the sole owners of information collected via the Website. Where ownership is restricted by law, you grant us a perpetual, royalty-free, irrevocable license to use the information in line with this Policy.
              </p>
              <p className="mt-2">We may collect and process “Personal Information”, including (without limitation):</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Details provided during registration (e.g., name, address, phone number).</li>
                <li>Information submitted while using the Services (e.g., login/logout timestamps).</li>
                <li>Automatically collected technical data such as IP address and device/domain identifiers.</li>
              </ul>
              <p className="mt-2 font-semibold">Children’s Use:</p>
              <p>
                If a Child will use the Website, we require the parent/guardian’s consent. Without such consent, we cannot collect/process the Child’s information, and the Services cannot be provided. The parent/guardian:
              </p>
               <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>is the primary account holder responsible for orders and payments;</li>
                    <li>decides whether to share the Child’s content with us/third parties;</li>
                    <li>actively monitors the Child’s content and ensures no personally identifiable information is posted without consent. We will assume any such posting was made with the parent/guardian’s express consent.</li>
                </ul>
              <p className="mt-2">
                You explicitly consent to our collection and processing (including recordings/metrics related to courses) to: (a) improve Services, (b) support quality and internal training, (c) fulfill the purposes stated in this Policy, and (d) other purposes notified to you from time to time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2) Use of Information</h3>
              <p>We use Personal Information to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>provide, operate, and improve the Services;</li>
                <li>analyze Website usage and diagnose issues;</li>
                <li>remember basic preferences for efficient access;</li>
                <li>verify identity and eligibility;</li>
                <li>notify you about Website changes;</li>
                <li>comply with legal/regulatory duties;</li>
                <li>send administrative notices, service alerts, and related communications;</li>
                <li>conduct market research, troubleshooting, fraud prevention, and planning;</li>
                <li>enforce our Terms of Use;</li>
                <li>enable social plugins/buttons (cookies set only upon voluntary interaction; governed by the respective networks’ privacy policies).</li>
              </ul>
              <p className='mt-2'><span className="font-semibold">Corporate Transactions:</span> Your information may be transferred in connection with a merger, acquisition, sale of assets, or bankruptcy.</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">3) Cookies</h3>
                <p>Cookies are small text files stored on your device. They help record aspects of your visit and enable uninterrupted service delivery. (See our Cookie practices for details.)</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">4) Sharing of Information</h3>
                <p><span className="font-semibold">Partners/Affiliates:</span> We may share information with partners/affiliates (e.g., Google Ads, Meta, LinkedIn, Mixpanel, Posthog). We are not responsible for partners’ cookie practices or events beyond our reasonable control (e.g., data corruption, force majeure, third-party acts).</p>
                <p className="mt-2"><span className="font-semibold">Consultants/Service Providers:</span> We may engage third parties to provide specific Services. When you sign up, we may share only the information necessary for them to perform those Services, and we require contractual safeguards restricting their use to the stated purpose.</p>
                <p className="mt-2"><span className="font-semibold">Regulatory Disclosures:</span> We may disclose Personal Information to comply with applicable laws, regulations, lawful requests, tax requirements, court orders, or other legal processes (“Required Disclosures”). Disclosures may occur without notice. We may also share information with affiliates/assignees or where we transfer our rights and obligations.</p>
                <p className="mt-2"><span className="font-semibold">Other Service Recipients:</span> You authorize disclosure to disputants, dispute resolution professionals, witnesses, and legal counsel where required to: (a) provide Services; (b) meet the rules of any dispute process; or (c) comply with law.</p>
                <p className="mt-2"><span className="font-semibold">Non-Disclosure Commitment:</span> We do not sell or rent your Personal Information. We may disclose it only for Required Disclosures; to provide Services/enforce Terms/protect rights; to assignees under contract; or to affiliates/related entities.</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">5) Security</h3>
                <p>We implement reasonable technical and organizational measures to protect Personal Information against loss, theft, unauthorized access, disclosure, alteration, and misuse, and we process Personal Information only for compatible purposes.</p>
                <p className="mt-2">Personal Information may be transferred, stored, and processed within or outside India. By submitting information, you consent to such transfers subject to this Policy.</p>
                <p className="mt-2">Internet transmission involves inherent risks; use of the Website is at your own risk. We are not liable for disclosure resulting from transmission errors, unauthorized third-party access, or events beyond our reasonable control. If we become aware of a breach affecting your Personal Information, we will notify you and take appropriate remedial actions.</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">6) Exclusions</h3>
                <p>This Policy applies only to information collected by Stanskill through the Website (as described under Collection). It does not cover unsolicited information you provide (e.g., posts to public areas). Such information is deemed non-confidential, and we may use/disclose it without limitation.</p>
                <p className="mt-2">We also protect Personal Information offline. Access is limited to personnel and partners who reasonably need it to provide Services. However, we are not responsible for confidentiality/security practices of partners outside our agreements.</p>
            </div>
             <div>
                <h3 className="font-semibold text-foreground mb-2">7) Data Retention</h3>
                <p>We retain Personal Information only as long as necessary for the purposes collected and as permitted by law. To cancel your account or request that we stop using your data to provide Services, contact hi@stanskill.com. Even after termination, we may retain data as required to meet legal obligations, resolve disputes, prevent fraud, enforce agreements, and for legitimate business purposes.</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">8) Your Rights</h3>
                <p><span className="font-semibold">Withdraw Consent:</span> You may withdraw consent in writing at any time (except where documents/pleadings in an ongoing dispute must be retained). Upon withdrawal, we will stop processing the relevant data unless another legal basis applies.</p>
                <p className="mt-2"><span className="font-semibold">Correction:</span> Keep your information accurate and up-to-date. To correct or update your data, write to hi@stanskill.com.</p>
                <p className="mt-2"><span className="font-semibold">Data Transfer:</span> We may transfer your Personal Information across borders to affiliates/third parties with appropriate safeguards to ensure protection consistent with this Policy.</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">9) Changes to this Policy</h3>
                <p>We may update this Policy periodically. Changes are effective upon posting. For material changes, we will provide advance notice via email or on the Services. Please review this page regularly.</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">10) Opt-Out</h3>
                <p>You may opt out of non-essential communications (including newsletters) at any time by contacting hi@stanskill.com. If you use email forwarding or similar services, include the correct target address(es).</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">11) Grievance Officer</h3>
                <p>In accordance with applicable IT laws, our Grievance Officer is:</p>
                <p className="mt-2">
                    Name: S. Chaitanya<br />
                    Email: grievance@stanskill.com<br />
                    Phone: +91-6360754645
                </p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">12) Address for Privacy Questions</h3>
                <p>For questions about this Privacy Policy or our data practices, contact hi@stanskill.com. We will make reasonable efforts to respond promptly. (We may not respond to topics unrelated to this Policy or our privacy practices except as required by law.)</p>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-2">13) CCPA-Specific Provisions (if applicable)</h3>
                <p>Where the California Consumer Privacy Act (“CCPA”) applies, we support the following rights: to know what personal information is collected; to know whether it is sold/disclosed and to opt out of sale; to access and delete personal information; and freedom from discrimination for exercising CCPA rights.</p>
                <p className="mt-2">We also comply with the CAN-SPAM Act, 2003.</p>
                <p className="mt-2">You acknowledge that you have read and agree to this Privacy Policy.</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
