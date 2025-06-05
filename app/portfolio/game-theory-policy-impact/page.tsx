// app/portfolio/game-theory-policy-impact/page.tsx
import React from 'react';

export default function GameTheoryPolicyImpactPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>The Strategic Impact of Game Theory in Public Policy Design</h1>
        <p style={{ fontSize: '1.1em', color: '#555' }}>
          A white paper exploring how game-theoretic models can enhance the effectiveness and foresight of public policy.
        </p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Abstract</h2>
        <p>
          Public policy interventions often involve multiple stakeholders with differing incentives and strategic behaviors.
          This paper argues that incorporating game theory into policy design can lead to more robust,
          efficient, and equitable outcomes. By modeling strategic interactions, policymakers can anticipate
          potential responses to interventions, identify points of leverage, and design policies that are resilient
          to strategic manipulation. This paper draws upon concepts from mathematical economics and insights from the
          MIT DEDP program to illustrate the practical applications of game theory in policy analysis.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Introduction: Beyond Naive Policy Assumptions</h2>
        <p>
          Traditional policy analysis sometimes assumes that individuals or groups will react to policies in a passive or
          predictable manner. However, economic agents (individuals, firms, even nations) are often strategic, making
          decisions based on their expectations of how others will behave. Game theory, a branch of mathematical economics,
          provides a formal framework for analyzing such strategic interactions.
        </p>
        <p style={{ marginTop: '10px' }}>
          By understanding the "rules of the game," the players involved, their potential strategies, and their payoffs,
          policymakers can better predict equilibrium outcomes and design interventions that align individual incentives
          with collective goals. This is particularly crucial in areas like environmental regulation, public health initiatives,
          and international agreements.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Application Example: Designing an Emissions Reduction Policy</h2>
        <p>
          Consider the challenge of designing a national policy to reduce industrial carbon emissions. A simple approach might be
          to impose a uniform emissions tax. However, game theory can help analyze this more deeply:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>
            <strong>Players:</strong> Firms in various industries, government regulatory body, potentially consumer groups.
          </li>
          <li>
            <strong>Strategies:</strong> Firms can choose to invest in green technology, reduce production, pay the tax, or even attempt to lobby for exemptions.
            The government can set different tax levels or offer subsidies for green tech.
          </li>
          <li>
            <strong>Payoffs:</strong> Firms aim to maximize profits. The government aims to achieve emission targets at minimal economic cost.
          </li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          A game-theoretic analysis might model this as a "Pollution Game." Key insights could include:
        </p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '10px' }}>
          <li>
            <strong>Identifying Potential for "Tragedy of the Commons":</strong> If individual firms find it cheaper to pollute and pay a low tax
            than to invest in clean tech, the collective outcome could be high pollution (a sub-optimal Nash Equilibrium).
          </li>
          <li>
            <strong>Mechanism Design:</strong> Using game theory to design a better mechanism, such as a cap-and-trade system. This system
            creates a market for emissions permits, potentially leading to a more efficient allocation of abatement efforts
            as firms that can reduce emissions cheaply will do so and sell permits to those for whom it is more expensive.
            The design of auction rules for these permits is itself a game theory problem.
          </li>
          <li>
            <strong>Commitment and Credibility:</strong> Analyzing how the government can credibly commit to a long-term policy,
            influencing firms' investment decisions in green technology.
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Broader Policy Implications & Analysis</h2>
        <p>
          The application of game theory extends far beyond environmental policy:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Public Health:</strong> Modeling vaccination adoption as a social dilemma (individual vs. collective benefit for herd immunity).</li>
          <li><strong>Resource Management:</strong> Analyzing strategies for sustainable management of common-pool resources like fisheries.</li>
          <li><strong>International Negotiations:</strong> Understanding bargaining dynamics in trade agreements or climate change pacts.</li>
          <li><strong>Behavioral Economics Insights:</strong> Integrating concepts like bounded rationality or fairness preferences into game models for more realistic policy predictions, a key theme in advanced policy economics.</li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          Chaos theory and the study of economic agents can also complement game theory by helping understand how small changes in policy or agent behavior can lead to large, sometimes unpredictable, systemic effects, and how heterogeneous agents might respond differently to the same policy incentives.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Conclusion: Towards Smarter, Strategically-Aware Policy</h2>
        <p>
          Incorporating mathematical economics, particularly game theory, into the policy toolkit allows for a more nuanced
          and effective approach to societal challenges. It encourages policymakers to think critically about incentives,
          anticipate strategic responses, and design interventions that are robust and sustainable. As data availability
          and computational tools improve, the potential for sophisticated strategic analysis to inform public policy will only grow.
          The DEDP program's emphasis on rigorous quantitative analysis provides a strong foundation for such endeavors.
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#555' }}>
          This white paper reflects an understanding of mathematical economics, game theory, and policy analysis,
          and the ability to apply these concepts to real-world problems.
        </p>
      </section>

      <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.9em', color: '#777' }}>
        <p>Portfolio of Daniel Viveiros</p>
      </footer>
    </div>
  );
}
