import { notFound } from "next/navigation";

import { Content } from "@/components/policies";
import { Footer, Header } from "@/components/shared";
import { Divider, Scroll } from "@/components/ui";

// This would typically come from a CMS or API
const policy = {
  title: "Privacy Policy",
  content: `
### UNICHAIN PRIVACY POLICY 
_Last Revised: October 10, 2024_

This Privacy Policy (“Privacy Policy”) explains how Universal Navigation Inc. (“we,” “our,” or “us”) collects, uses and discloses information that we obtain about visitors (“you” and “your”) who visit the https://unichain.org and https://docs.unichain.org websites (the “Websites”), which are maintained by us, and such other products and services related to the Websites that may be offered by us from time to time (collectively, the “Services”).

By visiting the Websites or using any other Services, you acknowledge and agree to this Privacy Policy and that your data (including Personal Information, as defined below) will be handled by us in accordance with this Privacy Policy. The Services may contain feeds or links to third-party websites, applications or services, such as user interfaces for decentralized exchanges, bridges or any other types of websites, applications or services. If you visit third-party websites, applications or services, any information collected is governed by the terms and conditions and privacy policies of such third parties. This Privacy Policy does not apply to information collected through third-party websites, applications or services that you may access through the Services. We are not responsible for the content of third-party websites, and your use of such third-party websites is at your own risk.

This Privacy Policy applies globally. If you are a resident of the European Economic Area (“EEA”) or the United Kingdom (“UK”), please review the “Notice to Residents of the EEA and the UK” section below for important information about how we collect and use your Personal Information and your rights under the General Data Protection Regulation (“GDPR”) and the UK General Data Protection Regulation (“UK GDPR”).

Please review this Privacy Policy carefully. If you have any questions, please reach out via the “Contact Us” information provided below.

### Personal Information That We Collect

We, and third parties working on our behalf, collect and process the Personal Information that you directly provide to us through the Services. We may also collect and process Personal Information that is provided to us from other sources. “Personal Information” includes any information that, alone or in combination with other information, can be used to identify you, such as a personal identifier (e.g., name, phone number or email address), an identification number, online identifiers or inferences about your preferences. Personal Information does not include information that is de-identified or aggregated such that it cannot be used to identify individuals. Personal Information also includes “personal data,” as such term is defined under the GDPR or the UK GDPR.

We may collect the following Personal Information:

- Information you provide, including your name, email address, social media handles, digital wallet addresses, and company name (and related information); 
- Publicly available blockchain data; and
- Usage data about devices you use to access the Services, such as device manufacturer, operating system, browser information, domain name, location and internet protocol (“IP”) address (collectively, “Automatically Collected Information”).

We may also collect other information, which may be publicly available, or that we may acquire through third-party sources, or that you provide to us.

### Personal Information Used and Disclosed to Third Parties

We, or third parties on our behalf may, use the Personal Information, including Automatically Collected Information, that we have about you to enforce the Terms of Service and this Privacy Policy, to provide the Services, to communicate with you regarding your requests, to analyze Services usage, for marketing and advertising purposes, to detect fraud or misuse, to comply with our legal or regulatory obligations, with your consent or otherwise for valid business purposes, to help us improve your experience with the Services, to enforce eligibility requirements and to record IP addresses, browser types, internet service provider and usage metrics.

We may also share your Personal Information in the following circumstances:

- **Designated Service Providers.** We may share your Personal Information with companies that we contract with in order to provide the Services (“Service Providers”). For example, Service Providers may: (i) provide products or services to you on our behalf; (ii) create or maintain our networks, systems, databases or analytics; (iii) provide other general support; (iv) respond to inquiries; (v) provide marketing services and advertising relevant to you; (vi) monitor and analyze the use and functionality of our Services; and (vii) other relevant internal business operations and purposes. Information disclosed to third parties may include aggregated and/or de-identified information derived from your Personal Information. We may disclose Automatically Collected Information obtained from your use of the Services to our Service Providers.
- **Legal or Regulatory Obligations.** We may disclose your Personal Information if we believe that such disclosure is necessary to satisfy our legal or regulatory obligations. This may include: (i) to comply with the law or in response to a subpoena, court order, government request or other legal process; (ii) to produce relevant documents or information in connection with litigation, arbitration, mediation, adjudication, government or internal investigations or other legal or administrative proceedings; (iii) to protect the interests, rights, safety or property of us, or any of our subsidiaries, affiliates, employees or users of the Services; (iv) to monitor compliance with and enforce the Terms of Service; (v) to operate the systems that are designed to allow the Services to function properly; (vi) for internal research purposes or managing the use of our copyrighted materials; or (vii) if we reasonably believe that a disclosure is necessary.
- **Business Transactions.** In the event that we go through a business transition, such as a merger, acquisition by another company, reorganization or sale of a portion of its assets, some or all of your Personal Information may be transferred in connection with the proposed transaction.
- **Consent.** With your consent or at your direction, such as sharing with your representatives or third parties.

### Cookies and Other Data Collection Technologies

We utilize cookies and other data collection technologies on our Services. A cookie is a small text file placed on your computer that helps us understand how you and our other visitors use the Services, to enhance the user experience through different features and functionality and to analyze and compile usage data. Personal Information collected by cookies may include your device’s IP address, browser type, operating system, computer platform, web pages viewed and/or the date and time of your visit. For example, we may use cookies to remember your preferences or settings. We may also use Software Development Kits (“SDKs”) on the Services for services related to on-ramping and maintenance of crypto wallets. SDKs are a collection of tools or libraries that we may use to add functionality to the Services.

Most browsers include tools to manage or disable cookies. You can visit the help function on most browsers to modify how your browser handles cookies. However, if you disable cookies, some features of the Services may not function properly.

Cookies can be categorized by how long they remain on your device. All cookies have expiration dates in them that determine how long they stay in your browser. There are two broad categories of duration:

- **Session Cookies.** Session cookies are temporary cookies that exist only during an online session and are not stored on your computer or mobile device.
- **Persistent Cookies.** Persistent cookies are those placed on your computer or mobile device for a pre-determined length of time when you visit our Sites and Apps. Persistent cookies remain on your device until deleted manually or automatically.

To assist us with the various uses and purposes described in this Privacy Policy, your Personal Information, including information collected by cookies or similar data collection technologies, may be aggregated, analyzed or linked to other information we have about you (including information from other online and offline sources). For example, we may use Service Providers to collect information about your use of the Services, such as pages viewed via the Websites, to provide us reports about your use of the Services.

- **Global Privacy Control.** The Global Privacy Control (“GPC”) is a method for individuals to opt-out of the sale or sharing of their personal information, as such term is described under applicable data protection laws, via a user-enabled privacy control that is available on certain internet browsers. Our systems are not configured to detect or respond to the GPC. You can learn more about the GPC here.
- **“Do Not Track” Signals.** Some web browsers have “Do Not Track” or similar features that allow you to tell each website you visit that you do not want your activities on that website tracked. Currently, the Services do not respond to “Do Not Track” signals and will continue to collect information about you even if your browser’s “Do Not Track” functionality is activated. Please note that your selection of the “Do Not Track” option provided by your browser may not have any effect on our collection of cookie information.

### Notice to Residents of the EEA and the UK

If you are a resident of the EEA or the UK, you have the rights under the GDPR or the UK GDPR. We are required to comply with the GDPR, the UK GDPR and applicable local laws with respect to certain Personal Information we collect. If you are a resident of the EEA or the UK, the GDPR and the UK GDPR provide you with certain rights and choices regarding your Personal Information and how you can exercise those rights. Please note that we do not collect Special Categories of Personal Information, as such term is defined under the GDPR and the UK GDPR.

#### Legal Bases for Processing Your Personal Information

We collect and process Personal Information for the following legal bases:

- We process your Personal Information with your valid, explicit consent.
- We process your Personal Information when necessary to perform our agreements with you.
- We process your Personal Information in pursuit of our legitimate interests. Examples of these legitimate interests include operation and improvement of the Services, personalization of content on the Services and made available via the Services, and protection from fraud or security threats

.
- We process your Personal Information when necessary to ensure compliance with a legal obligation to which we are subject.
- We process your Personal Information to protect an individual’s vital interests.

#### Your Rights With Respect To Personal Information

Subject to certain conditions, if you are a resident of the EEA or UK and have submitted Personal Information to us, you have the right to access, correct, delete, or object to or restrict the use of certain Personal Information covered by this Privacy Policy. You may also have the right to request the following: a copy of your Personal Information in a structured, commonly used and machine-readable format and/or request that we transmit that Personal Information to a third party where this is technically feasible, and that we refrain from processing Personal Information. To honor any requests, we will take steps (and may need to collect information from you) to verify your identity. You can also designate an authorized agent to make a request on your behalf. If you use an authorized agent, please include written permission that you have designated that agent to make the request or proof of the agent’s power of attorney. We may follow up with you to verify your identity before processing your authorized agent’s request.

We will only use Personal Information provided in the verification process for identity verification purposes. Please note that if you exercise such rights, this may affect our ability to provide the Services to you. While we will make reasonable efforts to accommodate your request, we also reserve the right to impose certain restrictions and requirements on such requests or deny certain requests, to the extent allowed or required by applicable law. For inquiries about your Personal Information, please contact us through one of the methods listed in the “Contact Us” Section below. You have the right to lodge a complaint about the processing of your Personal Information with a supervisory authority.

#### Withdrawal of Consent

Where you have given us valid, explicit consent to collect, use and process your Personal Information, we will rely on your valid, explicit consent. In instances in which we have based our processing of your Personal Information on your consent, you have the right to withdraw your consent. To withdraw such consent, please contact us through the methods listed below. Please note that when you withdraw consent, we might not be able to provide you with the Services. In certain situations, we may continue to process your Personal Information after you have withdrawn consent and requested that we delete your Personal Information, if we have a legal basis to do so. For example, we may retain certain information if we need to do so to comply with a legal obligation or if it is necessary to do so to pursue our legitimate interest in keeping the Services safe and secure.

#### International Transfers of Personal Information

We are headquartered and operate in the United States. If you visit or use the Services, or contact us from outside the United States, please be advised that (i) any Personal Information you provide to us or that we automatically collect will be transferred to the United States; and (ii) by using or submitting Personal Information through the Services, you explicitly authorize the transfer to and subsequent processing in the United States, and other countries in which we operate, in accordance with this Privacy Policy. Please be advised that the United States and other countries may not offer the same privacy protections as the laws of the jurisdiction where you reside.

### Notice to California Residents

The California Consumer Privacy Act, as amended by the California Privacy Rights Act (“CCPA”) provides California residents with rights to receive certain disclosures regarding the collection, use, and sharing of their Personal Information, and the right to know, access, correct, delete, and transfer Personal Information. In the past twelve months, we have collected the categories of Personal Information as described in the “Personal Information That We Collect” section.

We provide California residents with the privacy rights listed below, in accordance with the CCPA. To exercise these rights, please use one of the outreach methods listed in the “Contact Us” section below.

- **The right to know.** You may request the following information about how we have collected and used your Personal Information during the past twelve (12) months: (i) the specific pieces of Personal Information we have about you; (ii) the categories of Personal Information we have collected about you; (iii) the categories of sources from which that Personal Information was collected; (iv) the purpose for collecting and selling your Personal Information; and (v) the categories of your Personal Information that we sold or disclosed for a business purpose.
- **The right to deletion.** You have the right to request that we delete the Personal Information that we have collected or maintain about you. We may deny your request under certain circumstances, such as if we need to retain the information to comply with our legal obligations or complete a transaction for which your Personal Information was collected. If we deny your request for deletion, we will let you know the reason why.
- **The right to correct.** In certain situations, you have the right to request that we correct any inaccurate information that we maintain about you. We will use commercially reasonable effort to correct the inaccurate Personal Information.
- **Request Verification and Response.** We will take steps to verify your identity before processing your request. We will not fulfill your request unless you have provided sufficient information for us to reasonably verify you are the individual about whom we collected Personal Information. If you are a customer, we will use our existing account authentication practices to verify your request. If you do not have an account with us, we may request additional information about you. We will only use the Personal Information provided in the verification process to verify your identity or authority to make a request and to track and document request responses, unless you initially provided the information for another purpose. We will confirm our receipt of a verifiable consumer request within ten (10) business days and respond to a verifiable consumer request within forty-five (45) days of receipt. If we need more time to respond, we will provide written notification to you, including our reason for the need for an extension and respond to your request no later than ninety (90) days after receipt. If we cannot verify your identity to comply with a request, we will explain the reason in our communication to you.
- **Authorized Agent.** You may use an authorized agent to submit a request. When we verify your agent’s request, we may verify both your and your agent’s identity and request a signed document from you that authorizes your agent to make the request on your behalf. To protect your Personal Information, we reserve the right to deny a request from an agent that does not submit proof that they have been authorized by you to act on their behalf.
- **Non-Discrimination.** If you choose to exercise any of these rights, we will not discriminate against you in any way. If you exercise certain rights, please be advised that you may be unable to use or access certain features of our Services.
- **Sale or Sharing of Personal Information.** We do not “sell” or “share” Personal Information, as those terms are defined in the CCPA. We do not knowingly sell or share any information of any individuals younger than the age of 16 –for more information, see the “Children’s Privacy” section, below.
- **Other California Privacy Rights.** Under California Civil Code Section 1798.83, California residents are entitled to request and obtain from us once per calendar year information about when we share your Personal Information with third parties for those third parties’ own direct marketing purposes. To request this information, please contact us by email and indicate “California Shine the Light” in the subject line. Please be advised that in the past year, we have not shared Personal Information with third parties for those third parties’ own direct marketing purposes.

### Notice to Residents of Other States

If you are a resident of state that has enacted a comprehensive privacy law that is in effect as of the “Last Revised” date of this Privacy Policy—specifically, Colorado, Connecticut, Montana, Oregon, Texas, Utah, or Virginia—you may have rights with respect to the collection, use, and disclosure of your Personal Information. In accordance with the applicability requirements of applicable data privacy laws, we will provide residents of these states with the privacy rights listed below when the laws apply to us.

- **The right to know.** You may request to know, access, and receive a copy of the Personal Information that we process about you.
- **The right to deletion.** In certain circumstances, you have the right to request that we delete the Personal Information that we have collected or maintain about you. We may deny your request under certain circumstances, such as if we need to comply with our legal obligations or complete a transaction for which your Personal Information was collected. If we deny your request for deletion, we will let you know the reason why.
- **The right to correct.** In certain circumstances, you have the right to request that we correct any inaccurate information that we maintain about you.
- **The right to portability.** You have the right to obtain a copy of the Personal Information that you have provided to us in a portable, secure, and readily-usable format.
- **The right to opt-out.** You have the right to opt out of targeted advertising, sale, or profiling (in furtherance of decisions that produce legal or similar significant effects) of your Personal Information, as such terms are defined under applicable data privacy law. Please note that we do not “sell” your Personal Information or engage in profiling, as such terms are defined under state data privacy laws.
- **The right to appeal.** If we deny your rights request, you may have the right to appeal our decision under applicable state data privacy law.
- **The right to non-discrimination.** If you choose to exercise any of these rights, we will not discriminate against you. However, please be advised that if you exercise certain rights, you may be unable to use or access certain features of our services.

#### Submitting a Rights Request

Colorado, Connecticut, Montana, Oregon, and Utah residents may request information without charge once every twelve

 months, and we may charge an administrative fee for additional requests during a twelve (12) month period. Texas and Virginia residents may request information twice in a twelve (12) month period without charge. When you exercise these rights and submit a request to us, we will take steps to verify your identity before processing your request regarding your Personal Information. We will not fulfill your request unless you have provided sufficient information for us to reasonably verify you are the individual about whom we collected Personal Information. You also may designate an authorized agent to make a request for deletion on your behalf. We reserve the right to deny a request from an agent that does not submit proof that they have been authorized by you to act on your behalf. Please note that we may use a third-party verification provider to verify your identity. Applicable laws may permit or require us to decline your rights request. If we decline your request, we will tell you why, unless prohibited by law from doing so.

### Data Retention

We retain Personal Information we collect as long as it is necessary and relevant to fulfill the purposes outlined in this Privacy Policy. Subject to applicable law, we may also retain Personal Information to resolve disputes, enforce any of our terms of service or engage in other actions permitted by applicable law.

### Children’s Privacy

The Services are intended for users 18 years of age or older. You are not permitted to use the Services if you are younger than 18 years of age without parental or guardian consent. In accordance with the Children’s Online Privacy Protection Act and applicable children’s data protection laws, we do not knowingly collect Personal Information from children under the age of 18. If we learn we have collected or received Personal Information from a child under 18 years of age without authorization, verification or parental consent, we will promptly delete that information.

### Security of Your Personal Information

We maintain administrative, physical and technical safeguards designed to protect the Personal Information we collect and maintain. However, no data transmission over the internet is ever 100% secure. As a result, while we strive to protect your information, we cannot guarantee or warrant the security of any information you transmit via the Services.

### Email Marketing

We, or third parties, may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. In particular, Uniswap Foundation may receive the Personal Information you provide on the Websites and contact you about Unichain. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email sent by us or on our behalf or by contacting us.

Your option not to receive marketing material shall not preclude us from: corresponding with you, by email or otherwise, regarding your relationship with us; accessing your Personal Information for our internal business purposes; or disclosing your Personal Information as described in this Privacy Policy for purposes other than sending you marketing materials.

### Notification of Changes

We reserve the right to update, modify or change this Privacy Policy from time to time. If we make a material change to the way we intend to use your Personal Information, we will notify you by updating this Privacy Policy and modifying the date updated at the beginning of this Privacy Policy. We encourage you to review the Privacy Policy whenever you access the Services to stay informed about our privacy practices.

### Contact Us

We seek to resolve any issues that you have with our privacy practices. If you have questions or complaints regarding this Privacy Policy, please contact us through email at: privacy@uniswap.org or support@uniswap.org. Please include “Privacy” in the subject line of your inquiry.
  `
};

export default function Page() {
  if (!policy) {
    notFound();
  }

  return (
    <Scroll className="h-full w-full">
      <Header variant="secondary" />
      <Content header="Privacy Policy" content={policy.content} />
      <Divider variant="secondary" />
      <Footer />
    </Scroll>
  );
}
