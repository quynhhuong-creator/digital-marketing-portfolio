import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Globe, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Clock, 
  Award, 
  Layout, 
  Megaphone, 
  Code, 
  Smartphone, 
  Cpu, 
  Briefcase,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Settings,
  MousePointer2
} from 'lucide-react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="portfolio">
      <header>
        <div className="container">
          <div className="logo">PQH.</div>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#case-studies">Cases</a></li>
              <li><a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Hire Me</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Digital Marketing Coordinator for Paid Social, CMS & Campaign Reporting</h1>
              <p>I support digital teams with paid social advertising operations, campaign tracking, website updates, client communication, and performance insights across global digital platforms.</p>
              <div className="hero-actions">
                <a href="#experience" className="btn btn-primary">View Experience <ChevronRight size={18} /></a>
                <a href="#case-studies" className="btn btn-secondary">View Case Studies</a>
              </div>

              <div className="highlight-row">
                <div className="highlight-item">
                  <span className="highlight-val">3+ Years</span>
                  <span className="highlight-label">Relevant Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-val">2 Years</span>
                  <span className="highlight-label">Paid Social Ops</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-val">Top 1</span>
                  <span className="highlight-label">6 Months Running</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-val">Remote</span>
                  <span className="highlight-label">AU Timezone Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <div className="horizontal-line" style={{ width: '40px', height: '2px', background: 'var(--accent)', marginBottom: '1.5rem' }}></div>
            </div>
            <div className="grid-2">
              <div className="about-text">
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                  Pham Quynh Huong is a Digital Marketing and MarTech professional based in Vietnam with 3+ years of relevant experience across paid social advertising operations, CMS and website projects, e-commerce workflows, and campaign reporting.
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  She has nearly 2 years of hands-on experience supporting advertisers on a <strong>global paid social advertising platform</strong>, covering campaign setup issues, Pixel tracking, Conversion API, Product Catalog, and performance troubleshooting.
                  Proactive and remote-ready, she is confident in written English and capable of managing recurring tasks independently while flagging risks and recommending improvements.
                </p>
              </div>
              <div className="about-stats card" style={{ background: '#f8fafc' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="contact-icon" style={{ background: 'white' }}><Globe size={20} /></div>
                    <div>
                      <div className="contact-label">Location</div>
                      <div className="contact-val">Vietnam (Remote)</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="contact-icon" style={{ background: 'white' }}><Clock size={20} /></div>
                    <div>
                      <div className="contact-label">Availability</div>
                      <div className="contact-val">AU Business Hours Overlap</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="contact-icon" style={{ background: 'white' }}><Award size={20} /></div>
                    <div>
                      <div className="contact-label">Recognition</div>
                      <div className="contact-val">Top 1 Performer (Teleperformance)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills" style={{ background: '#f8fafc' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Core Competencies</h2>
              <p className="section-desc">Specialized skill sets covering the end-to-end digital marketing and operations ecosystem.</p>
            </div>
            <motion.div 
              className="grid-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Paid Social Ads Operations",
                  icon: <Megaphone size={20} />,
                  skills: ["Campaign setup & config", "Pixel & Conversion API", "Product Catalog sync", "Attribution troubleshooting", "Account configuration"]
                },
                {
                  title: "Reporting & Optimization",
                  icon: <BarChart3 size={20} />,
                  skills: ["KPI dashboard analysis", "Data discrepancy review", "Performance insights", "Budget investigation", "Process improvement"]
                },
                {
                  title: "Content & Email Support",
                  icon: <Mail size={20} />,
                  skills: ["Social content planning", "Client-facing communication", "Ad copy & Caption writing", "Email sequence drafting", "Brand consistency"]
                },
                {
                  title: "Website & CMS Operations",
                  icon: <Layout size={20} />,
                  skills: ["WordPress & WooCommerce", "Hostinger & Webcake", "Landing page optimization", "AEM CMS workflows", "Basic layout changes"]
                },
                {
                  title: "Creative & AI Tools",
                  icon: <Cpu size={20} />,
                  skills: ["Canva creative drafting", "AI-assisted copywriting", "Content repurposing", "Workflow automation", "GenAI research"]
                },
                {
                  title: "Coordination & Management",
                  icon: <Briefcase size={20} />,
                  skills: ["CRM case management", "Stakeholder coordination", "Risk & issue flagging", "Remote collaboration", "Cross-functional bridge"]
                }
              ].map((group, idx) => (
                <motion.div key={idx} className="card skill-card" variants={itemVariants}>
                  <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{group.icon}</div>
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Professional Experience</h2>
              <p className="section-desc">Extensive background in digital operations and project coordination for global clients.</p>
            </div>
            
            <div className="experience-list">
              {/* Experience 1 */}
              <motion.div 
                className="experience-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="exp-header">
                  <div>
                    <div className="exp-company">Teleperformance — Malaysia</div>
                    <div className="exp-title">Digital Marketing Operations Specialist — Paid Social Ads & Client Support</div>
                  </div>
                  <div className="exp-meta">
                    <div>July 2024 – Present</div>
                    <div style={{ fontWeight: 600 }}>Nearly 2 Years Experience</div>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li className="exp-bullet">Supported advertisers using a <strong>global paid social advertising platform</strong>, focusing on campaign setup, tracking, and performance issues.</li>
                  <li className="exp-bullet">Expertise in Pixel tracking, Conversion API, Product Catalog, attribution, billing, and account access troubleshooting.</li>
                  <li className="exp-bullet">Reviewed campaign data, dashboards, and KPIs to identify root causes and performance gaps.</li>
                  <li className="exp-bullet">Drafted clear client-facing emails in English for troubleshooting updates and resolution steps.</li>
                  <li className="exp-bullet">Recognized as <strong>Top 1 Performer for 6 consecutive months</strong> based on KPI performance and service quality.</li>
                </ul>
              </motion.div>

              {/* Experience 2 */}
              <motion.div 
                className="experience-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="exp-header">
                  <div>
                    <div className="exp-company">Estuary Solutions Vietnam</div>
                    <div className="exp-title">Digital Project Coordinator — Website, CMS & E-commerce Projects</div>
                  </div>
                  <div className="exp-meta">
                    <div>May 2023 – June 2024</div>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li className="exp-bullet">Supported MarTech projects across HealthTech, logistics, and digital content management platforms.</li>
                  <li className="exp-bullet">Coordinated website updates and landing page requirements across WordPress, WooCommerce, and Webcake.</li>
                  <li className="exp-bullet">Defined user journeys, page structures, and content workflows for CMS projects.</li>
                  <li className="exp-bullet">Integrated AI tools (ChatGPT, Claude, Gemini) to support research and content drafting workflows.</li>
                  <li className="exp-bullet">Acted as a bridge between clients and technical teams to ensure deliverables matched business needs.</li>
                </ul>
              </motion.div>

              {/* Experience 3 */}
              <motion.div 
                className="experience-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="exp-header">
                  <div>
                    <div className="exp-company">Bosch Global Software Vietnam</div>
                    <div className="exp-title">Operations & Administrative Coordinator</div>
                  </div>
                  <div className="exp-meta">
                    <div>Sept 2022 – Nov 2022</div>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li className="exp-bullet">Maintained employee and system access data with high accuracy.</li>
                  <li className="exp-bullet">Coordinated cross-functional workflows to ensure smooth operational reporting.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h2>6M</h2>
                <p>Consecutive Top Performer Recognition</p>
              </div>
              <div className="stat-item">
                <h2>95+</h2>
                <p>Country CMS Deployment Support</p>
              </div>
              <div className="stat-item">
                <h2>20K+</h2>
                <p>App Downloads Within 2 Months</p>
              </div>
              <div className="stat-item">
                <h2>13</h2>
                <p>Country Regional Deployment Reach</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section" id="case-studies">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Case Studies & Key Projects</h2>
              <p className="section-desc">A deep dive into high-impact initiatives and their outcomes.</p>
            </div>
            <div className="grid-2">
              {[
                {
                  title: "Paid Social Ads Ops Support",
                  desc: "Investigated Pixel, CAPI, and catalog issues on a global social platform, leading to Top 1 Performer status for 6 months.",
                  focus: ["Tracking", "Support", "Reporting"],
                  achievement: "Improved resolution time by 15%"
                },
                {
                  title: "Global Content Management",
                  desc: "Defined CMS workflows and component logic for a global web platform deployed in 95 countries.",
                  focus: ["CMS", "AEM", "MarTech"],
                  achievement: "95-Country reach"
                },
                {
                  title: "Active Lifestyle Tracker",
                  desc: "Supported app growth via user engagement features and feature logic validation across 8 APAC countries.",
                  focus: ["Loyalty", "Growth", "Engagement"],
                  achievement: "20k+ Downloads"
                },
                {
                  title: "E-comm Workflow Scaling",
                  desc: "Optimized landing pages and campaign logic using WordPress and AI-assisted content drafting.",
                  focus: ["WordPress", "Workflow", "AI"],
                  achievement: "Enhanced workflow efficiency"
                }
              ].map((item, idx) => (
                <motion.div key={idx} className="card case-card" whileHover={{ y: -5 }}>
                  <div className="case-body">
                    <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>{item.desc}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {item.focus.map((f, i) => (
                        <span key={i} style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="case-badge">{item.achievement}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">MarTech Stack & Tools</h2>
              <p className="section-desc">Proficient in the leading platforms powering modern digital marketing.</p>
            </div>
            
            <div className="tool-group">
              <h3>Paid Social & Tracking</h3>
              <div className="tool-list">
                {["Ads Support Systems", "Pixel Tracking", "Conversion API", "Product Catalog", "CRM Tools"].map((t, i) => (
                  <span key={i} className="tool-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="tool-group">
              <h3>Website / CMS / E-commerce</h3>
              <div className="tool-list">
                {["WordPress", "Hostinger", "WooCommerce", "Webcake", "Pancake", "AEM CMS"].map((t, i) => (
                  <span key={i} className="tool-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="tool-group">
              <h3>Creative & AI</h3>
              <div className="tool-list">
                {["Canva", "ChatGPT", "Claude", "Gemini"].map((t, i) => (
                  <span key={i} className="tool-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="tool-group">
              <h3>Management & Collaboration</h3>
              <div className="tool-list">
                {["Jira", "Trello", "Azure DevOps", "Workfront", "Notion", "Google Workspace", "Figma", "Power BI"].map((t, i) => (
                  <span key={i} className="tool-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-grid">
              <div>
                <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Let's talk about your next project.</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                  Open to remote opportunities and collaborations within Digital Marketing Coordinator roles. I am available for Australian business hour overlap.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon"><Mail size={20} /></div>
                    <div>
                      <div className="contact-label">Email</div>
                      <div className="contact-val"><a href="mailto:pquynhhuong.work@gmail.com">pquynhhuong.work@gmail.com</a></div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon"><Linkedin size={20} /></div>
                    <div>
                      <div className="contact-label">LinkedIn</div>
                      <div className="contact-val"><a href="https://linkedin.com/in/huongpham209" target="_blank" rel="noopener noreferrer">huongpham209</a></div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon"><Phone size={20} /></div>
                    <div>
                      <div className="contact-label">Phone / Zalo</div>
                      <div className="contact-val">(+84) 852 735 953</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: '3rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <TrendingUp size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                  <h3 style={{ marginBottom: '1rem' }}>Ready to coordinate your success.</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Digital Marketing Coordination | Paid Social Ops | CMS Management</p>
                  <a href="mailto:pquynhhuong.work@gmail.com" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>Send an Email</a>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Typical response time: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>Portfolio created for Digital Marketing Coordinator roles — Paid Social Ads Operations, CMS, Campaign Reporting & Client Support.</p>
          <p style={{ fontSize: '0.75rem', marginTop: '1rem' }}>© 2026 Pham Quynh Huong • Proudly Remote</p>
        </div>
      </footer>
    </div>
  );
}
