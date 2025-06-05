// app/portfolio/neuroscience-information-flow/page.tsx
import React from 'react';

export default function NeuroscienceInformationFlowPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>Analyzing Neural Information Flow Using Information Theory</h1>
        <p style={{ fontSize: '1.1em', color: '#555' }}>
          A project exploring the application of information-theoretic measures to understand neural communication pathways.
        </p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Project Background</h2>
        <p>
          This project is inspired by undergraduate research in bioengineering data science and a keen interest in
          neuroscience analytics. It focuses on how information theory can be applied to complex neural datasets (e.g., fMRI, EEG)
          to quantify and map the flow of information within the brain.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>The Challenge</h2>
        <p>
          Understanding how different brain regions communicate and process information is a fundamental goal in neuroscience.
          Traditional methods often focus on correlations, but information theory provides tools to measure directed influence
          and information transfer. Key challenges addressed include:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Quantifying the amount of information shared between different neural signals.</li>
          <li>Determining the directionality of information flow (e.g., is region A influencing region B, or vice-versa?).</li>
          <li>Applying these complex measures to noisy and high-dimensional neuroimaging data.</li>
          <li>Interpreting the results in a neurobiologically meaningful way.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Methodology & Approach</h2>
        <p>
          The project would involve the following steps:
        </p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
          <li>
            <strong>Data Acquisition & Preprocessing:</strong> Utilizing publicly available neuroimaging datasets (e.g., from the
            Human Connectome Project for fMRI, or other EEG/MEG repositories). Preprocessing would involve noise reduction,
            artifact removal, and time-series extraction from regions of interest (ROIs).
          </li>
          <li>
            <strong>Information-Theoretic Measures:</strong> Implementing and applying measures such as:
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px' }}>
              <li><strong>Mutual Information:</strong> To quantify statistical dependencies between signals from different ROIs.</li>
              <li><strong>Transfer Entropy:</strong> To measure the directed transfer of information from one time series (ROI) to another.</li>
              <li><strong>Granger Causality:</strong> While not strictly information-theoretic, it's often used alongside for comparison of directed influence.</li>
            </ul>
          </li>
          <li>
            <strong>Network Construction & Analysis:</strong> Building functional connectivity networks where nodes are ROIs and
            edges are weighted by the information flow metrics. Analyzing network properties (e.g., hub identification, community structure).
          </li>
          <li>
            <strong>Visualization & Interpretation:</strong> Developing visualizations to represent information flow patterns and
            relating these findings to known neuroanatomy and cognitive functions.
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Tools & Technologies</h2>
        <p>The project would leverage:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Programming Languages:</strong> Python for its extensive data science and neuroscience libraries. MATLAB could also be used for specific toolboxes.</li>
          <li><strong>Key Libraries:</strong>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px' }}>
              <li>Python: NumPy, SciPy for numerical operations; Pandas for data handling; Scikit-learn for machine learning components; MNE-Python for EEG/MEG data; NiBabel for neuroimaging file formats; PyInform or JIDT (via Python wrappers) for transfer entropy.</li>
              <li>MATLAB: Brain Connectivity Toolbox, FieldTrip (if applicable).</li>
            </ul>
          </li>
          <li><strong>Data Sources:</strong> Public datasets like Human Connectome Project, OpenNeuro.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Potential Insights & Significance</h2>
        <p>
          This type of analysis can contribute to:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>A deeper understanding of how different brain regions collaborate to perform cognitive tasks.</li>
          <li>Identifying altered information flow patterns in neurological or psychiatric disorders.</li>
          <li>Providing a quantitative framework for assessing the effects of interventions (e.g., treatments, therapies) on brain connectivity.</li>
          <li>Bridging the gap between low-level neural activity and higher-level cognitive functions.</li>
        </ul>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#555' }}>
          This project highlights expertise in bioengineering data science, advanced signal processing, and the application of
          information theory to complex biological systems, particularly in neuroscience.
        </p>
      </section>

      <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.9em', color: '#777' }}>
        <p>Portfolio of Daniel Viveiros</p>
      </footer>
    </div>
  );
}
