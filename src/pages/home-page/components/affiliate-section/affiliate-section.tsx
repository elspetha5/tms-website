import Section from "../../../../components/section/section";
import { firebaseImgUrl } from "../../../../shared/constants";

import "./affiliate-section.scss";

const affiliatesLogoArr = [
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FApple-logo.png?alt=media&token=3093c05b-dc91-41de-8eb8-a1000e3183f0`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FAndroid-logo.png?alt=media&token=7e7d9fab-9640-4bb0-b11b-35c871a7c258`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FATT-business-logo.png?alt=media&token=0363a2f6-9810-437c-862d-d46eb910b39a`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FBaramundi-logo.png?alt=media&token=ee7d6aff-33df-43e6-bdcc-89a57fb7aa33`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2Fcheckpoint-logo.png?alt=media&token=ba16fb3e-e209-42c9-a04e-2fd9c2332258`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FCisco-Meraki-logo.png?alt=media&token=58830f76-2935-4291-b8e9-5d3e21095178`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FHexnode-logo.png?alt=media&token=96650998-edb7-454e-8aa9-5126fd92cf38`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FIBM-MaaS360-logo.png?alt=media&token=2f572189-7bad-4d9d-8629-3831461ecbc5`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FIvanti-Mobileiron-logo.png?alt=media&token=f01ce9de-455a-49ea-b255-1afaf5640a90`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FJobber-logo.png?alt=media&token=f94cc6b7-e6de-4983-ae2d-671548d14a9d`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FMicrosoft-Intune-logo.png?alt=media&token=981f5c90-e3d7-4c4c-a72f-150538161f4a`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FT-mobile-logo.png?alt=media&token=cb5a5beb-acca-429e-9718-0ad0f1667613`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FVerizon-business-logo.png?alt=media&token=5f660d29-46ae-48d7-a153-676be4589fb3`,
  `${firebaseImgUrl}/Partners%20%26%20Affiliations%2FVMwarebyBroadcom-logo.jpeg?alt=media&token=251afe7e-92ac-4164-b384-2a325b4f6f56`,
];

function AffiliateSection() {
  return (
    <Section title="Our Partners & Affiliations">
      <div className="affiliate-img-container">
        {affiliatesLogoArr.map((a) => (
          <div key={a}>
            <img
              className={`affiliate-img ${
                a.includes("Apple-logo") ? "affiliate-img-apple" : ""
              }`}
              key={a}
              src={a}
              alt="Affiliate Logo"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default AffiliateSection;
