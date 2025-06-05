// app/portfolio/edtech-student-success/page.tsx
import React from 'react';

export default function EdTechStudentSuccessPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>Optimizing Student Success Through Data Analytics</h1>
        <p style={{ fontSize: '1.1em', color: '#555' }}>
          A project focused on leveraging data to enhance learning outcomes in an EdTech environment.
        </p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Project Overview</h2>
        <p>
          This project was conceptualized within a tutoring company aiming to proactively improve student performance
          and engagement. The primary goal was to develop a data-driven system to identify students who might be
          struggling and to provide insights for personalized learning interventions.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>The Challenge</h2>
        <p>
          The main challenge was to move from a reactive to a proactive approach in student support. Key questions included:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>How can we identify students at risk of falling behind before their performance significantly drops?</li>
          <li>What factors are the strongest predictors of student success or struggle?</li>
          <li>How can data insights be translated into actionable strategies for tutors and curriculum developers?</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Methodology & Approach</h2>
        <p>
          A multi-faceted approach was adopted, combining statistical analysis and machine learning techniques:
        </p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
          <li>
            <strong>Data Collection & Preparation:</strong> Aggregated data from various sources including student quiz scores,
            assignment grades, platform engagement metrics (time spent, resources accessed), and tutor feedback.
            Data cleaning and feature engineering were performed to prepare the dataset for modeling.
          </li>
          <li>
            <strong>Predictive Modeling:</strong> Developed a classification model (e.g., Logistic Regression, Random Forest)
            to predict the likelihood of a student underperforming in upcoming assessments. Features included historical
            performance, engagement patterns, and demographic data (where appropriate and ethically considered).
          </li>
          <li>
            <strong>Factor Analysis:</strong> Used regression analysis and feature importance from tree-based models to
            understand key drivers of student success.
          </li>
          <li>
            <strong>Dashboarding & Reporting:</strong> Created dashboards to present insights to tutors and academic managers,
            highlighting at-risk students and areas where they might need support.
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Tools & Technologies</h2>
        <p>The project primarily utilized the following stack:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Programming Languages:</strong> Python for data analysis and machine learning, SQL for data extraction.</li>
          <li><strong>Key Libraries:</strong> Pandas, NumPy for data manipulation; Scikit-learn for machine learning;
              Matplotlib, Seaborn for visualizations.
          </li>
          <li><strong>Database:</strong> PostgreSQL for storing student and performance data.</li>
          <li><strong>BI Tool:</strong> Tableau (or similar, e.g., PowerBI/Metabase) for dashboarding.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Impact & Results</h2>
        <p>
          While specific quantitative results depend on the implementation context, the anticipated impacts included:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Improved Student Retention:</strong> Early identification of at-risk students allows for timely interventions,
              potentially increasing retention rates by 10-15%.
          </li>
          <li><strong>Enhanced Academic Performance:</strong> Personalized support based on data insights can lead to an
              average improvement in student scores by 5-10%.
          </li>
          <li><strong>Efficient Resource Allocation:</strong> Tutors can focus their efforts on students who need the most help,
              improving the efficiency of support services.
          </li>
          <li><strong>Data-Informed Curriculum Development:</strong> Insights from student performance data can guide
              enhancements in course content and delivery methods.
          </li>
        </ul>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#555' }}>
          This project demonstrates a strong capability in applying data science within the EdTech sector to directly
          benefit student learning journeys and operational efficiency.
        </p>
      </section>

      <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.9em', color: '#777' }}>
        <p>Portfolio of Daniel Viveiros</p>
      </footer>
    </div>
  );
}
