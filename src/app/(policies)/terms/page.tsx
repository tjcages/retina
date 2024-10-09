import { notFound } from "next/navigation";

import { Content } from "@/components/policies";
import { Footer, Header } from "@/components/shared";
import { Divider, Scroll } from "@/components/ui";

// This would typically come from a CMS or API
const policy = {
  title: "Terms of Service",
  content: `
### Uniswap Labs Terms of Service  
Last modified: August 7, 2024  

These Terms of Service (the "Agreement") explain the terms and conditions by which you may access and use the Products provided by Uniswap Labs (referred to herein as "Uniswap Labs", "we", "our", or "us"). The Products include, but are not limited to:

(a) **https://app.uniswap.org**, a website-hosted user interface (the "Interface" or "App")  
(b) An aggregator of various third-party non-fungible token ("NFT") marketplaces (the "NFT Marketplace Aggregator")  
(c) Our mobile wallet application (the "Uniswap Wallet")  
(d) Any other products and services that link to this Agreement (collectively, the “Products”)  

You must read this Agreement carefully, as it governs your use of the Products. By accessing or using any of the Products, you signify that you have read, understood, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use any of our Products.

### 1. Our Products
#### 1.1 The Interface  
The Interface provides access to:  
- A decentralized protocol on various public blockchains, including Ethereum, that allows users to trade certain compatible digital assets (the "Uniswap Protocol" or the "Protocol").  
- The NFT Marketplace Aggregator.  

The Interface is distinct from the Protocol, which is open-source and self-executing smart contracts deployed on various blockchains, such as Ethereum. Uniswap Labs does not control or operate any version of the Protocol. Fees paid by traders accrue to liquidity providers, not to Uniswap Labs.

To access the Interface, you must use a non-custodial wallet software. We do not have custody or control over the contents of your wallet and have no ability to retrieve or transfer its contents.

#### 1.2 The NFT Marketplace Aggregator  
The NFT Marketplace Aggregator allows users to discover, buy, and sell NFTs simultaneously across multiple third-party marketplaces ("Third-Party Marketplaces").  

Uniswap Labs does not determine what to list or set pricing for NFTs on those Third-Party Marketplaces. If a purchase transaction for a Sweep fails, refunds will be made to your wallet, less any Gas Fees. Uniswap Labs does not guarantee that a Sweep will be successful or that any financial outcomes will be achieved.

#### 1.3 The Uniswap Wallet  
The Uniswap Wallet allows you to:  
- Store digital assets  
- Link to third-party decentralized exchanges ("DEXs") and decentralized applications  
- View addresses and information part of digital asset networks and broadcast transactions  
- Participate in DEX trades  
- Perform additional services that may be added to the Uniswap Wallet.  

#### 1.4 Subdomains  
The Uniswap Wallet allows you to claim a subdomain (username) associated with your wallet address. Uniswap Labs reserves the right to revoke your username at its discretion without notice if you violate terms or laws or engage in harmful behavior.

#### 1.5 Access through Third-Party Partners  
Some Products may be made accessible or usable through third-party partners, such as exchanges and trading platforms. Even when using third-party interfaces, your use of our Products is still governed by this Agreement.

#### 1.6 Other Products  
From time to time, we may offer additional products, and these will also be governed by this Agreement.

#### 1.7 Third-Party Services and Content  
Our Products may include integrations with third-party services, which may require additional terms and agreements. Uniswap Labs is not responsible for the accuracy, availability, or privacy practices of third-party services.

### 2. Modifications of this Agreement or our Products  
#### 2.1 Modifications of this Agreement  
Uniswap Labs reserves the right to modify this Agreement at any time. Changes will be effective upon posting, and your continued use of any Products will confirm your acceptance of those changes.

#### 2.2 Modifications of our Products  
We reserve the right to modify, substitute, eliminate, or add to any of our Products at any time without notice.

### 3. Intellectual Property Rights  
#### 3.1 IP Rights Generally  
Uniswap Labs owns all intellectual property rights in the Products, including trademarks, service marks, copyrights, and patents. You are granted a limited, non-exclusive license to use the Products in accordance with this Agreement.

#### 3.2 DMCA Complaints  
If you believe your copyrighted work is being infringed on a Third-Party Marketplace, you should notify that Marketplace. Uniswap Labs will investigate and take action under the DMCA.

#### 3.3 Third-Party Resources and Promotions  
Uniswap Labs does not endorse or assume responsibility for third-party resources, services, or promotions that may be referenced within its Products.

### 4. Your Responsibilities  
#### 4.1 Prohibited Activity  
You agree not to engage in any of the following prohibited activities:  
- Intellectual Property Infringement. Activity that infringes on or violates any copyright, trademark, service mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under the law.
- Cyberattack. Activity that seeks to interfere with or compromise the integrity, security, or proper functioning of any computer, server, network, personal device, or other information technology system, including, but not limited to, the deployment of viruses and denial of service attacks.
- Fraud and Misrepresentation. Activity that seeks to defraud us or any other person or entity, including, but not limited to, providing any false, inaccurate, or misleading information in order to unlawfully obtain the property of another.
- Market Manipulation. Activity that violates any applicable law, rule, or regulation concerning the integrity of trading markets, including, but not limited to, the manipulative tactics commonly known as "rug pulls", pumping and dumping, and wash trading.
- Securities and Derivatives Violations. Activity that violates any applicable law, rule, or regulation concerning the trading of securities or derivatives, including, but not limited to, the unregistered offering of securities and the offering of leveraged and margined commodity products to retail customers in the United States.
- Sale of Stolen Property. Buying, selling, or transferring of stolen items, fraudulently obtained items, items taken without authorization, and/or any other illegally obtained items.
- Data Mining or Scraping. Activity that involves data mining, robots, scraping, or similar data gathering or extraction methods of content or information from any of our Products.
- Objectionable Content. Activity that involves soliciting information from anyone under the age of 18 or that is otherwise harmful, threatening, abusive, harassing, tortious, excessively violent, defamatory, vulgar, obscene, pornographic, libelous, invasive of another's privacy, hateful, discriminatory, or otherwise objectionable.
- Any Other Unlawful Conduct. Activity that violates any applicable law, rule, or regulation of the United States or another relevant jurisdiction, including, but not limited to, the restrictions and regulatory requirements imposed by U.S. law.

#### 4.2 Trading  
All trades made using Uniswap Labs Products are unsolicited and initiated solely by you. Uniswap Labs does not provide investment advice.

#### 4.3 Non-Custodial and No Fiduciary Duties  
Uniswap Labs does not have custody of your digital assets and does not owe fiduciary duties to you. You are solely responsible for the security of your wallets and transactions.

#### 4.4 Compliance and Tax Obligations  
You are solely responsible for complying with all applicable laws in your jurisdiction, including tax obligations related to the use of the Products.

#### 4.5 NFT Terms  
NFTs may be subject to additional terms set by creators. Uniswap Labs is not responsible for enforcing or communicating these terms.

#### 4.6 Gas Fees  
You are responsible for paying Gas Fees for any blockchain transactions initiated via Uniswap Labs Products.

#### 4.7 Release of Claims  
By using any Products, you waive any claims against Uniswap Labs related to your use of the Products.

### 5. Disclaimers  
#### 5.1 Assumption of Risk — Generally  
You acknowledge the risks associated with using blockchain-based systems and digital assets, including volatility and irreversibility of transactions.

#### 5.2 Assumption of Risk — NFTs  
You accept the inherent risks involved with NFT transactions, including volatility, potential loss, and purchasing counterfeit items.

#### 5.3 No Warranties  
Uniswap Labs Products are provided "as is," without warranties. Uniswap Labs is not responsible for errors, defects, or interruptions related to the Products.

#### 5.4 No Investment Advice  
Information provided by Uniswap Labs Products is for informational purposes only and should not be construed as investment advice.

### 6. Indemnification  
You agree to indemnify Uniswap Labs and its affiliates from any claims, losses, or damages arising from your use of the Products or violation of this Agreement.

### 7. Limitation of Liability  
Uniswap Labs is not liable for any damages arising from your use of the Products, including indirect, incidental, or consequential damages.

### 8. Governing Law, Dispute Resolution, and Class Action Waivers  
#### 8.1 Governing Law  
The laws of the State of New York govern this Agreement.

#### 8.2 Dispute Resolution  
Disputes will be resolved by confidential arbitration under JAMS rules in New York, New York.

#### 8.3 Class Action and Jury Trial Waiver  
You agree to resolve disputes in your individual capacity and waive the right to a trial by jury or to participate in a class action.

### 9. Miscellaneous  
#### 9.1 Entire Agreement  
This Agreement constitutes the entire agreement between you and Uniswap Labs regarding the subject matter.

#### 9.2 Assignment  
You may not assign this Agreement without Uniswap Labs’ consent. Uniswap Labs may assign the Agreement freely.

#### 9.3 Rewards  
Uniswap Labs may provide incentives or rewards for using its Products, subject to applicable terms.

#### 9.4 Not Registered with the SEC or Any Other Agency  
Uniswap Labs is not registered with the U.S. Securities and Exchange Commission.

#### 9.5 Notice  
Uniswap Labs may provide notice via public communication channels.

#### 9.6 Severability  
If any provision of this Agreement is found to be invalid, the remaining provisions will continue to be valid and enforceable.
  `
};

export default function Page() {
  if (!policy) {
    notFound();
  }

  return (
    <Scroll className="h-full w-full">
      <Header variant="secondary" />
      <Content header="Terms of Service" content={policy.content} />
      <Divider variant="secondary" />
      <Footer />
    </Scroll>
  );
}
