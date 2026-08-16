import React from "react";
import "./skills.css";
import { FaBrain, FaDatabase, FaCode, FaChartLine } from "react-icons/fa";

const capabilities = [
  { icon: <FaBrain />, title: "Applied AI", description: "RAG systems, agentic workflows, NLP, LLM evaluation, prompt design, vector search, and explainable AI.", tools: "Claude · OpenAI · Transformers · spaCy" },
  { icon: <FaDatabase />, title: "Data Engineering", description: "Semantic-search pipelines, high-volume data preparation, cloud warehouses, validation, and production analytics.", tools: "BigQuery · Databricks · SQL · DuckDB" },
  { icon: <FaCode />, title: "Product Engineering", description: "Full-stack products and APIs designed around real workflows, accessible interfaces, and maintainable systems.", tools: "React · FastAPI · Flask · Django" },
  { icon: <FaChartLine />, title: "Machine Learning", description: "Feature engineering, ensemble models, time-series analysis, cross-validation, calibration, and model monitoring.", tools: "Scikit-Learn · XGBoost · TensorFlow" },
];

const Skills = () => (
  <section id="skills" className="skillsSection sectionBlock">
    <div className="sectionShell">
      <div className="sectionHeading splitHeading lightHeading">
        <div>
          <span className="sectionIndex">03 / EXPERTISE</span>
          <h2>A builder at the intersection of <em>AI, data, and product.</em></h2>
        </div>
        <p>My best work connects rigorous technical foundations with a clear understanding of the person making the decision.</p>
      </div>

      <div className="capabilityGrid">
        {capabilities.map((capability, index) => (
          <article className="capabilityCard" key={capability.title}>
            <div className="capabilityTop"><span className="capabilityIcon">{capability.icon}</span><span className="capabilityNumber">0{index + 1}</span></div>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <div className="capabilityTools">{capability.tools}</div>
          </article>
        ))}
      </div>

      <div className="techMarquee" aria-label="Technical toolkit">
        {['Python', 'JavaScript', 'SQL', 'React', 'FastAPI', 'GCP', 'Databricks', 'AWS', 'Pandas', 'NumPy'].map((tech) => <span key={tech}>{tech}</span>)}
      </div>
    </div>
  </section>
);

export default Skills;
