const Arrow = () => <span aria-hidden="true">→</span>;

function IssueCard() {
  return (
    <div className="issue-card">
      <div className="issue-photo">
        <div className="photo-label">Smith Residence · Exterior</div>
        <div className="window-frame">
          <div className="window-pane" />
          <div className="window-pane" />
          <div className="window-pane" />
          <div className="window-pane" />
        </div>
        <div className="callout-dot" />
      </div>
      <div className="issue-body">
        <div className="eyebrow-row">
          <span className="status status-open">Needs correction</span>
          <span className="muted">Today, 10:42 AM</span>
        </div>
        <h3>Missing flashing at lower left window</h3>
        <p>
          Install flashing at sill before exterior finish continues. Upload a correction photo when complete.
        </p>
        <div className="issue-meta">
          <div><span>Trade</span><strong>ABC Exteriors</strong></div>
          <div><span>Priority</span><strong>High</strong></div>
        </div>
        <button className="mock-button">Send to trade <Arrow /></button>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-top"><span />Construction QA<span>•••</span></div>
        <div className="phone-photo">
          <div className="beam one" />
          <div className="beam two" />
          <div className="beam three" />
          <div className="recording">● Recording</div>
        </div>
        <div className="transcript">
          <span className="tiny-label">VOICE NOTE</span>
          <p>“Missing flashing at lower left window. Assign to ABC Exteriors before siding.”</p>
        </div>
        <div className="ai-box">
          <span>AI DRAFT</span>
          <strong>Window flashing incomplete</strong>
          <small>Exterior · Waterproofing · High priority</small>
        </div>
        <button className="approve">Approve & assign</button>
      </div>
    </div>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="step-card">
      <div className="step-number">{n}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top"><span className="brand-mark">Q</span> Construction QA</a>
        <nav>
          <a href="#product">Product</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="nav-actions">
          <a className="text-link" href="#">Sign in</a>
          <a className="button button-dark button-small" href="mailto:hello@example.com?subject=Construction%20QA%20Pilot">Start a pilot</a>
        </div>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="pill">Built for custom residential builders</div>
          <h1>Construction QA that <span>closes the loop.</span></h1>
          <p className="hero-sub">
            Capture issues with photos and voice. Assign them to trades. Verify the fix. Keep the record.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:hello@example.com?subject=Construction%20QA%20Pilot">Start a pilot <Arrow /></a>
            <a className="button button-ghost" href="#how">See how it works</a>
          </div>
          <div className="hero-proof">
            <span>No subcontractor app required</span>
            <span>Unlimited field users</span>
            <span>Built for the jobsite</span>
          </div>
        </div>
        <div className="hero-product">
          <div className="glow" />
          <PhoneMockup />
          <div className="floating-card">
            <span className="status status-done">Correction submitted</span>
            <strong>ABC Exteriors</strong>
            <small>Photo received · 2:18 PM</small>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="shell narrow center">
          <p className="section-kicker">THE PROBLEM</p>
          <h2>Quality shouldn’t depend on someone remembering what they saw Tuesday afternoon.</h2>
          <p className="section-lead">
            Jobsite QA still gets scattered across texts, camera rolls, notebooks, and memory. That makes it easy for issues to disappear once the next trade moves in.
          </p>
        </div>
        <div className="shell problem-grid">
          <div className="problem-card"><span>01</span><h3>Issues get buried</h3><p>Photos and texts are hard to track once the job moves forward.</p></div>
          <div className="problem-card"><span>02</span><h3>Trades lack closure</h3><p>Assignments happen, but proof of correction is inconsistent.</p></div>
          <div className="problem-card"><span>03</span><h3>Quality history disappears</h3><p>Builders rarely leave a project with one clean record of what was caught and fixed.</p></div>
        </div>
      </section>

      <section id="how" className="section shell">
        <div className="section-header split">
          <div><p className="section-kicker">HOW IT WORKS</p><h2>From field observation to verified correction.</h2></div>
          <p>Fast enough for a superintendent to use while walking the job. Simple enough for a subcontractor to respond without training.</p>
        </div>
        <div className="steps-grid">
          <Step n="01" title="Capture">Take a photo and describe the issue by voice. AI turns it into a structured QA item.</Step>
          <Step n="02" title="Assign">Approve it and send it to the responsible trade by text or email.</Step>
          <Step n="03" title="Verify">The trade uploads a correction photo through a simple link. No account required.</Step>
          <Step n="04" title="Record">Approve or reopen the correction and keep a permanent project history.</Step>
        </div>
      </section>

      <section id="product" className="section dark-section">
        <div className="shell">
          <div className="section-header split light">
            <div><p className="section-kicker">THE CORE WORKFLOW</p><h2>One issue. One owner. One clear resolution.</h2></div>
            <p>Stop chasing loose ends through message threads. Every issue stays attached to its project, trade, photos, status, and correction history.</p>
          </div>
          <div className="product-demo">
            <IssueCard />
            <div className="before-after">
              <div className="ba-card">
                <div className="ba-image before"><span>BEFORE</span></div>
                <div><strong>Correction requested</strong><small>Missing sill flashing</small></div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="ba-card">
                <div className="ba-image after"><span>AFTER</span><div className="checkmark">✓</div></div>
                <div><strong>Builder approved</strong><small>Correction verified</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-header center narrow">
          <p className="section-kicker">WHY BUILDERS USE IT</p>
          <h2>Catch it early. Get it fixed. Keep the proof.</h2>
        </div>
        <div className="benefit-grid">
          <div><div className="icon">⌁</div><h3>Catch problems before they’re covered</h3><p>Document issues while the work is visible and correction is still straightforward.</p></div>
          <div><div className="icon">↗</div><h3>Reduce chasing and callbacks</h3><p>Give each issue an owner, status, deadline, and correction trail.</p></div>
          <div><div className="icon">✓</div><h3>Require proof of correction</h3><p>Trades submit completion photos before work disappears into a text thread.</p></div>
          <div><div className="icon">▤</div><h3>Build a quality record</h3><p>Keep every observation and approved correction organized by project.</p></div>
        </div>
      </section>

      <section className="field-section">
        <div className="shell field-grid">
          <div>
            <p className="section-kicker">BUILT FOR THE FIELD</p>
            <h2>No complicated rollout. No subcontractor app required.</h2>
            <p className="section-lead left">Construction QA fits the way supers already walk jobs: see it, say it, assign it, verify it.</p>
            <ul className="check-list">
              <li><span>✓</span> Works on phone and desktop</li>
              <li><span>✓</span> Trades respond from a simple link</li>
              <li><span>✓</span> Unlimited subcontractor participation</li>
              <li><span>✓</span> Clear project-level issue history</li>
            </ul>
          </div>
          <div className="dashboard-card">
            <div className="dash-head"><strong>Smith Residence</strong><span>QA Overview</span></div>
            <div className="stats">
              <div><span>OPEN</span><strong>12</strong></div><div><span>AWAITING TRADE</span><strong>7</strong></div><div><span>VERIFIED</span><strong>46</strong></div>
            </div>
            <div className="dash-row"><span className="dot red" /><div><strong>Missing sill flashing</strong><small>ABC Exteriors · Exterior</small></div><span className="tag">High</span></div>
            <div className="dash-row"><span className="dot amber" /><div><strong>Plumbing strap incomplete</strong><small>Hill Country Plumbing · Mechanical</small></div><span className="tag">Open</span></div>
            <div className="dash-row"><span className="dot green" /><div><strong>Cabinet reveal corrected</strong><small>Oak & Stone Millwork · Kitchen</small></div><span className="tag">Verified</span></div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section shell">
        <div className="pricing-wrap">
          <div className="pricing-copy">
            <p className="section-kicker">FOUNDING BUILDER PROGRAM</p>
            <h2>Simple pricing. Put it on a real job.</h2>
            <p>Start with one company account and use it across your active projects without counting seats or subcontractors.</p>
          </div>
          <div className="pricing-card">
            <div><span className="plan">FOUNDING BUILDER</span><div className="price"><strong>$299</strong><span>/month</span></div></div>
            <ul>
              <li>Unlimited company users</li>
              <li>Unlimited subcontractors</li>
              <li>Up to 10 active projects</li>
              <li>AI photo + voice issue capture</li>
              <li>Trade correction links</li>
              <li>Before / after verification</li>
              <li>Project QA history & reports</li>
              <li>Direct founder onboarding</li>
            </ul>
            <a className="button button-dark full" href="mailto:hello@example.com?subject=Construction%20QA%20Founding%20Builder">Start a pilot <Arrow /></a>
            <small>Early pricing can be adjusted before launch.</small>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell center narrow">
          <p className="section-kicker">RUN QUALITY LIKE A SYSTEM</p>
          <h2>Stop chasing construction issues through texts, photos, and memory.</h2>
          <p>Capture it. Assign it. Verify it. Keep the record.</p>
          <a className="button button-light" href="mailto:hello@example.com?subject=Construction%20QA%20Pilot">Start a pilot <Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brand-mark">Q</span> Construction QA</a>
        <span>© 2026 Construction QA. All rights reserved.</span>
        <div><a href="mailto:hello@example.com">Contact</a><a href="#">Privacy</a></div>
      </footer>
    </main>
  );
}
