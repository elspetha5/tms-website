import ContentPage from "../../components/content-page/content-page";

function DeviceSecurity() {
  return (
    <ContentPage
      title="The SMS-Phishing Compliance Crisis: What Most Companies Miss (& How TMS
        Closes the Gap)"
    >
      <div className="content-page-section-title">
        1. Most MDR Cybersecurity Doesn’t Cover iOS or Mobile Devices
      </div>
      <div className="content-page-paragraph">
        Most Endpoint Detection & Response (EDR), Extended Detection & Response
        (XDR), and Managed Detection & Response (MDR) solutions are built around
        traditional computers—not smartphones and tablets. In fact, leading MDR
        providers often don’t support iOS at all, leaving a huge blind spot in
        your security.
      </div>
      <div className="content-page-section-title">
        2. The Leading Threat Is Still Phishing
      </div>
      <div className="content-page-paragraph">
        Year after year, phishing remains the #1 vector for bad actors to breach
        companies. Ransomware, account takeovers, and data theft almost always
        begin with a phishing attack.
      </div>
      <div className="content-page-section-title">
        3. Most Phishing Is No Longer Just in Email
      </div>
      <div className="content-page-paragraph">
        While most companies zero in on email phishing, attackers are ahead of
        the curve—they know everyone has anti-phishing email filters now.
      </div>
      <div className="content-page-section-title">
        4. Phishing Now Happens by SMS and Messaging Apps
      </div>
      <div className="content-page-paragraph">
        Today, SMS (“smishing”) and messaging platforms have become the most
        popular ways for attackers to engage targets. This means your mobile
        devices (corporate and BYOD) are wide open—even if your email is
        protected.
      </div>
      <div className="content-page-section-title">
        5. MDM Alone Can’t Stop Mobile Phishing
      </div>
      <div className="content-page-paragraph">
        MDM (Mobile Device Management) tools are great for configuring and
        remotely managing devices—they are not built for active, real-time
        security against phishing attacks. Every device—corporate-owned or
        BYOD—needs an additional layer of on-device protection.
      </div>
      <div className="content-page-section-title">
        6. How Real-World Attacks Happen
      </div>
      <div className="content-page-paragraph">
        Imagine: An employee gets a text: “Hi, how are you?” After a few casual
        responses, the sender shares a link—they tap it, thinking nothing of it.
        Suddenly, malware is installed. The attacker now scoops up work and
        personal passwords, breaks into your company network, and launches a
        ransomware attack. Your MDR never saw it coming—because it never saw the
        SMS in the first place.
      </div>
      <div className="content-page-section-title">
        7. How TMS Protects You—Where Others Don’t
      </div>
      <div className="content-page-paragraph">
        TMS solves this compliance gap by placing a dedicated security app on
        every mobile device we manage (corporate or BYOD). This app actively
        blocks phishing links and alerts users before harm is done. You get
        active protection, real-time backup, and 24/7 support—no more overlooked
        attacks, no more relying on hope or luck
      </div>
    </ContentPage>
  );
}

export default DeviceSecurity;
