import React from "react";
import "./experience.css";
import { FaArrowRight } from "react-icons/fa";

const roles = [
  {
    period: "Jun 2026 — Present",
    role: "Data Engineer",
    company: "Versetal Information Systems",
    location: "Quincy, MA",
    url: "https://versetalinfo.com/",
    summary: "Building enterprise AI systems that make internal knowledge easier to find, reason over, and act on.",
    highlights: [
      "Developed an LLM-powered support assistant grounded in historical tickets and enterprise knowledge bases.",
      "Engineered semantic-search pipelines in BigQuery for high-performance retrieval across ticket and conversation data.",
      "Built Claude-powered agentic workflows that route between vector search and SQL while automating ticket triage.",
    ],
    tags: ["GCP", "BigQuery", "RAG", "Claude", "Vector Search"],
  },
  {
    period: "Jan 2026 — Present",
    role: "Founder & AI Engineer",
    company: "Process Trace AI",
    location: "Boston, MA",
    url: "https://processtraceai.com/",
    summary: "Creating evidence-first AI for pharmaceutical manufacturing investigations.",
    highlights: [
      "Built a full-stack assistant that synthesizes deviations, CAPAs, and quality records into review-ready investigations.",
      "Designed an agentic platform with RAG, ontology-driven validation, and end-to-end evidence traceability.",
      "Lead product strategy and customer discovery with pharmaceutical manufacturing and quality leaders.",
    ],
    tags: ["FastAPI", "React", "DuckDB", "Agentic AI", "Life Sciences"],
  },
  {
    period: "May 2025 — Dec 2025",
    role: "Data Scientist",
    company: "Takeda Pharmaceuticals",
    location: "Cambridge, MA",
    url: "https://www.takeda.com/en-us/",
    summary: "Applied machine learning and data engineering to enterprise compliance and manufacturing analytics.",
    highlights: [
      "Developed Random Forest and language models to predict hazardous-chemical regulatory actions and classify regulatory text.",
      "Processed and validated 10,000+ material-qualification records spanning more than 30 manufacturing sites.",
      "Built live Databricks-connected Dash dashboards for risk metrics and model outputs used by senior leadership.",
    ],
    tags: ["Python", "Databricks", "SQL", "NLP", "Dash"],
  },
];

const Experience = () => (
  <section id="experience" className="experienceSection sectionBlock">
    <div className="sectionShell">
      <div className="sectionHeading splitHeading">
        <div>
          <span className="sectionIndex">02 / EXPERIENCE</span>
          <h2>From models to<br /><em>working systems.</em></h2>
        </div>
        <p>I work across product, data, and AI engineering—taking ideas from ambiguous problem statements to reliable tools people can actually use.</p>
      </div>

      <div className="experienceList">
        {roles.map((role, index) => (
          <article className="experienceItem" key={role.company}>
            <div className="experienceNumber">0{index + 1}</div>
            <div className="experienceMeta">
              <span>{role.period}</span>
              <span>{role.location}</span>
            </div>
            <div className="experienceBody">
              <h3>{role.role}</h3>
              <div className="companyName">{role.company}</div>
              <p className="roleSummary">{role.summary}</p>
              <ul>
                {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="tagRow">
                {role.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <a className="experienceLink" href={role.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${role.company}`}>
              <FaArrowRight className="experienceArrow" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
