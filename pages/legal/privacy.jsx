import { motion } from 'framer-motion'

import Page from '../../components/Page'
import Navbar, { NavbarPublic } from '../../components/Navbar'
import Footer, { FooterPublic } from '../../components/Footer'
import { Heading1, Heading5, Heading6, SHeading, Paragraph, Anchor, ListItem, UList } from '../../components/ui/Text'
import Box from '../../components/utils/Box'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const pageVariants = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.5, ...transition } },
}

export default function IndexPage() {
  return (
    <Page
      slug="/"
      className="IndexPage"
    >
      <motion.div
        variants={pageVariants}
      >
        <header>
          <Navbar>
            <NavbarPublic
              animated
            />
          </Navbar>
        </header>

        <main>
          <Box>
            <div
              style={{ padding: '7rem 0 3rem 0' }}
            >
              <Heading1 BaronNeue>Privacy Policy</Heading1>
            </div>
            
            <Paragraph>
              {"Your privacy is important to us. It is Spring Lakes Golf Club's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, "}
              <Anchor
                href="/"
                style={{ color: '#0070f3' }}
              >
                https://springlakesgolf.com
              </Anchor>
              {"."}
            </Paragraph>
            <br />
            <Paragraph>Personal information is any information about you which can be used to identify you. This includes information about you as a person (such as name, address, and date of birth), your devices, payment details, and even information about how you use a website or online service.</Paragraph>
            <br />
            <Paragraph>In the event our site contains links to third-party sites and services, please be aware that those sites and services have their own privacy policies. After following a link to any third-party content, you should read their posted privacy policy information about how they collect and use personal information. This Privacy Policy does not apply to any of your activities after you leave our site.</Paragraph>
            <br />
            <Paragraph>This policy is effective as of 12 April 2021 and was last updated on 12 April 2021.</Paragraph>
            <br />
            <Paragraph>Last updated: 12 April 2021</Paragraph>
            <br />
            <Heading5>Information We Collect</Heading5>
            <br />
            <Paragraph>Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.</Paragraph>
            <br />
            <Heading5>Log Data</Heading5>
            <br />
            <Paragraph>When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details about your visit.</Paragraph>
            <br />
            <Paragraph>Additionally, if you encounter certain errors while using the site, we may automatically collect data about the error and the circumstances surrounding its occurrence. This data may include technical details about your device, what you were trying to do when the error happened, and other technical information relating to the problem. You may or may not receive notice of such errors, even in the moment they occur, that they have occurred, or what the nature of the error is.</Paragraph>
            <br />
            <Paragraph>Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.</Paragraph>
            <br />
            <Heading5>Personal Information</Heading5>
            <br />
            <Paragraph>We may ask for personal information which may include one or more of the following:</Paragraph>
            <br />
            <UList>
              <ListItem>Name</ListItem>
              <ListItem>Email</ListItem>
              <ListItem>Date of birth</ListItem>
              <ListItem>Phone/mobile number</ListItem>
            </UList>
            <br />
            <Heading5>Legitimate Reasons for Processing Your Personal Information</Heading5>
            <br />
            <Paragraph>We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.</Paragraph>
            <br />
            <Heading5>Collection and Use of Information</Heading5>
            <br />
            <Paragraph>We may collect personal information from you when you do any of the following on our website:</Paragraph>
            <br />
            <UList>
              <ListItem>Register for an account</ListItem>
              <ListItem>Enter any of our competitions, contests, sweepstakes, and surveys</ListItem>
              <ListItem>Sign up to receive updates from us via email or social media channels</ListItem>
              <ListItem>Use a mobile device or web browser to access our content</ListItem>
              <ListItem>Contact us via email, social media, or on any similar technologies</ListItem>
              <ListItem>When you mention us on social media</ListItem>
            </UList>
            <br />
            <Paragraph>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</Paragraph>
            <br />
            <UList>
              <ListItem>to provide you with our platform's core features and services</ListItem>
              <ListItem>to enable you to customise or personalise your experience of our website</ListItem>
              <ListItem>to contact and communicate with you</ListItem>
              <ListItem>for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you</ListItem>
              <ListItem>to enable you to access and use our website, associated applications, and associated social media platforms</ListItem>
              <ListItem>for internal record keeping and administrative purposes</ListItem>
              <ListItem>to run competitions, sweepstakes, and/or offer additional benefits to you</ListItem>
              <ListItem>to comply with our legal obligations and resolve any disputes that we may have</ListItem>
            </UList>
            <br />
            <Paragraph>Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.</Paragraph>
            <br />
            <Heading5>Security of Your Personal Information</Heading5>
            <br />
            <Paragraph>When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</Paragraph>
            <br />
            <Paragraph>Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.</Paragraph>
            <br />
            <Paragraph>You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.</Paragraph>
            <br />
            <Heading5>How Long We Keep Your Personal Information</Heading5>
            <br />
            <Paragraph>We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.</Paragraph>
            <br />
            <Paragraph>However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.</Paragraph>
            <br />
            <Heading5>Children’s Privacy</Heading5>
            <br />
            <Paragraph>We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.</Paragraph>
            <br />
            <Heading5>Disclosure of Personal Information to Third Parties</Heading5>
            <br />
            <Paragraph>We may disclose personal information to:</Paragraph>
            <br />
            <UList>
              <ListItem>a parent, subsidiary, or affiliate of our company</ListItem>
              <ListItem>third party service providers for the purpose of enabling them to provide their services, for example, IT service providers, data storage, hosting and server providers, advertisers, or analytics platforms</ListItem>
              <ListItem>our employees, contractors, and/or related entities</ListItem>
              <ListItem>our existing or potential agents or business partners</ListItem>
              <ListItem>sponsors or promoters of any competition, sweepstakes, or promotion we run</ListItem>
              <ListItem>courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise, or defend our legal rights</ListItem>
              <ListItem>third parties, including agents or sub-contractors, who assist us in providing information, products, services, or direct marketing to you third parties to collect and process data</ListItem>
            </UList>
            <br />
            <Heading5>International Transfers of Personal Information</Heading5>
            <br />
            <Paragraph>The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.</Paragraph>
            <br />
            <Heading5>Your Rights and Controlling Your Personal Information</Heading5>
            <br />
            <Paragraph>You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.</Paragraph>
            <br />
            <Paragraph>If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.</Paragraph>
            <br />
            <Paragraph>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.</Paragraph>
            <br />
            <Paragraph>If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.</Paragraph>
            <br />
            <Paragraph>If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.</Paragraph>
            <br />
            <Heading5>Use of Cookies</Heading5>
            <br />
            <Paragraph>We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.</Paragraph>
            <br />
            <Paragraph>Please refer to our Cookie Policy for more information.</Paragraph>
            <br />
            <Heading5>Limits of Our Policy</Heading5>
            <br />
            <Paragraph>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</Paragraph>
            <br />
            <Heading5>Changes to This Policy</Heading5>
            <br />
            <Paragraph>At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.</Paragraph>
            <br />
            <Paragraph>If the changes are significant, or if required by applicable law, we will contact you (based on your selected preferences for communications from us) and all our registered users with the new details and links to the updated or changed policy.</Paragraph>
            <br />
            <Paragraph>If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.</Paragraph>
            <br />
            <Heading5>Contact Us</Heading5>
            <br />
            <Paragraph>For any questions or concerns regarding your privacy, you may contact us using the following details:</Paragraph>
            <br />
            <Heading6
              style={{ color: '#000000' }}
            >Spring Lakes Golf Club</Heading6>
            <Anchor
              href="/contact"
              style={{ color: '#0070f3' }}
            >
              <Paragraph>https://springlakesgolf.com/contact</Paragraph>
            </Anchor>
          </Box>
        </main>

        <footer>
          <Footer>
            <FooterPublic />
          </Footer>
        </footer>
      </motion.div>
    </Page>
  )
}