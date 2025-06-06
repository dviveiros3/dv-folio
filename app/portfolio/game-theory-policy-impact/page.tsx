"use client";
// app/portfolio/game-theory-policy-impact/page.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

export default function GameTheoryPolicyImpactPage() {
  const firm1DecisionData = [
    {
      name: "Firm 2 Abates",
      "Firm 1 Abates": -5, // Firm 1 payoff
      "Firm 1 Pollutes": 0, // Firm 1 payoff
    },
    {
      name: "Firm 2 Pollutes",
      "Firm 1 Abates": -10, // Firm 1 payoff
      "Firm 1 Pollutes": -2, // Firm 1 payoff
    },
  ];

  const firm1ChartConfig = {
    "Firm 1 Abates": { label: "Firm 1 Abates (Payoff)", color: "hsl(var(--chart-1))" },
    "Firm 1 Pollutes": { label: "Firm 1 Pollutes (Payoff)", color: "hsl(var(--chart-2))" },
  } satisfies ChartConfig;

  const vaccinationData = [
    { vaccinationRate: "20%", herdImmunityEffectiveness: 10, newInfections: 500 },
    { vaccinationRate: "40%", herdImmunityEffectiveness: 30, newInfections: 300 },
    { vaccinationRate: "60%", herdImmunityEffectiveness: 70, newInfections: 100 },
    { vaccinationRate: "80%", herdImmunityEffectiveness: 90, newInfections: 20 },
    { vaccinationRate: "90%", herdImmunityEffectiveness: 95, newInfections: 5 },
  ];

  const vaccinationChartConfig = {
    herdImmunityEffectiveness: { label: "Herd Immunity Effectiveness (%)", color: "hsl(var(--chart-1))" },
    newInfections: { label: "New Infections (per 100k)", color: "hsl(var(--chart-2))" },
  } satisfies ChartConfig;

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
          This paper demonstrates that incorporating game theory—including concepts such as strategic interactions, mechanism design, and the analysis of repeated games or scenarios with incomplete information—into policy design can lead to more robust,
          efficient, and equitable outcomes. By modeling strategic interactions, policymakers can anticipate
          potential responses to interventions, identify points of leverage, and design policies that are resilient
          to strategic manipulation. This paper draws upon concepts from mathematical economics and insights from the
          MIT DEDP program to illustrate the practical applications of game theory in policy analysis.
          Through illustrative examples, including visual representations of game dynamics, this paper explores practical applications.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Introduction: Beyond Naive Policy Assumptions</h2>
        <p>
          Traditional policy analysis sometimes assumes that individuals or groups will react to policies in a passive or
          predictable manner. However, economic agents (individuals, firms, even nations) are often strategic, making
          decisions based on their expectations of how others will behave. Game theory, a branch of mathematical economics,
          provides a formal framework for analyzing such strategic interactions.
          Beyond simple one-shot games, advanced game theory considers scenarios involving repeated interactions, where reputation and trust become crucial, and situations of incomplete information, where players might not know all relevant characteristics or payoffs of others. Furthermore, the field of mechanism design, a core component of modern game theory, focuses on designing the rules of the game itself to achieve desired societal outcomes.
        </p>
        <p style={{ marginTop: '10px' }}>
          By understanding the "rules of the game" (potentially designed through mechanism design), the players involved, their information sets, their potential strategies, and their payoffs,
          policymakers can better predict equilibrium outcomes (such as Nash Equilibrium) and design interventions that align individual incentives
          with collective goals, even in complex, dynamic settings. This is particularly crucial in areas like environmental regulation, public health initiatives,
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
        <p style={{ marginTop: '10px', marginBottom: '5px' }}>
          Let's simplify this to a two-firm scenario. Each firm can choose to 'Abate' (invest in green technology) or 'Pollute'.
          The payoffs (e.g., profits) for each firm depend on both its own action and the action of the other firm.
          A hypothetical payoff matrix might look like this (Firm 1 Payoff, Firm 2 Payoff):
        </p>
        {/* We will display the matrix as text first, then try to chart parts of it */}
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
          {`
                    Firm 2
                   /      \\
                  Abate  Pollute
        Firm 1 Abate  (-5,-5) (0,-10)
             Pollute (-10,0) (-2,-2)
          `}
        </pre>
        <p style={{ marginTop: '5px', marginBottom: '10px' }}>
          In this scenario, if Firm 1 pollutes while Firm 2 abates, Firm 1 gets 0 (no abatement cost) while Firm 2 gets -10 (abatement cost without shared benefit).
          If both pollute, they both get -2 (representing some shared environmental cost or minor penalty). If both abate, they share costs (-5,-5).
          The Nash Equilibrium here is often (Pollute, Pollute), as each firm is better off polluting regardless of the other's choice, leading to a suboptimal outcome.
          The following chart illustrates Firm 1's potential payoffs based on its own choices and Firm 2's choices:
        </p>

        <div style={{ marginTop: '20px', marginBottom: '20px', height: '300px' }}>
          <ChartContainer config={firm1ChartConfig} className="w-full h-full">
            <BarChart accessibilityLayer data={firm1DecisionData} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="Firm 1 Abates" fill="var(--color-Firm 1 Abates)" radius={4}>
                <LabelList dataKey="Firm 1 Abates" position="top" offset={5} />
              </Bar>
              <Bar dataKey="Firm 1 Pollutes" fill="var(--color-Firm 1 Pollutes)" radius={4}>
                <LabelList dataKey="Firm 1 Pollutes" position="top" offset={5} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
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
            For example, a cap-and-trade system sets an overall cap on emissions. Permits corresponding to this cap are distributed or auctioned. Firms that can reduce emissions cheaply can sell excess permits to firms for whom reduction is more costly. This creates a market price for emissions, internalizing the externality. The initial allocation of permits (e.g., auction vs. grandfathering) and rules for banking or borrowing permits are critical design elements that influence efficiency and equity. A well-designed system aims to ensure that the emissions target is met at the lowest overall economic cost.
          </li>
          <li>
            <strong>Commitment and Credibility:</strong> Analyzing how the government can credibly commit to a long-term policy,
            influencing firms' investment decisions in green technology.
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Case Study: Public Health Vaccination Strategy</h2>
        <p>
          Vaccination decisions present a classic example of a public goods game, often with elements of a coordination game.
          While individuals weigh their personal costs (e.g., perceived risks of vaccination, inconvenience) against private benefits
          (personal immunity), the collective benefit of herd immunity depends on a large proportion of the population being vaccinated.
        </p>
        <p style={{ marginTop: '10px' }}>
          If too few people vaccinate, herd immunity is not achieved, and the population remains vulnerable to outbreaks.
          This can be modeled as a game where each individual's decision to vaccinate (or not) affects the payoff (health outcome)
          for everyone. Policymakers can use game theory to understand factors influencing vaccination uptake and design interventions
          (e.g., mandates, incentives, information campaigns) to encourage higher rates and achieve public health goals.
        </p>
        <p style={{ marginTop: '10px', marginBottom: '10px' }}>
          The chart below illustrates a hypothetical relationship between vaccination rates, the effectiveness of herd immunity,
          and the number of new infections. As vaccination rates increase, herd immunity becomes more effective, leading to a sharp decline in new infections.
        </p>

        <div style={{ marginTop: '20px', marginBottom: '20px', height: '350px' }}>
          <ChartContainer config={vaccinationChartConfig} className="w-full h-full">
            <BarChart accessibilityLayer data={vaccinationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="vaccinationRate" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis yAxisId="left" orientation="left" stroke="var(--color-herdImmunityEffectiveness)" />
              <YAxis yAxisId="right" orientation="right" stroke="var(--color-newInfections)" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar yAxisId="left" dataKey="herdImmunityEffectiveness" name="Herd Immunity Effectiveness (%)" fill="var(--color-herdImmunityEffectiveness)" radius={4}>
                <LabelList dataKey="herdImmunityEffectiveness" position="top" offset={5} formatter={(value: number) => `${value}%`} />
              </Bar>
              <Bar yAxisId="right" dataKey="newInfections" name="New Infections (per 100k)" fill="var(--color-newInfections)" radius={4}>
                <LabelList dataKey="newInfections" position="top" offset={5} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
        <p style={{ marginTop: '10px' }}>
          Strategic considerations include addressing misinformation (which can alter perceived payoffs), ensuring equitable access to vaccines,
          and building trust in public health institutions. Game theory helps in analyzing how different demographic groups might respond to
          various interventions and how to avoid outcomes where suboptimal vaccination levels persist due to individual strategic decisions.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Broader Policy Implications & Analysis</h2>
        <p>
          The application of game theory extends far beyond environmental policy:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Public Health:</strong> Modeling vaccination adoption (as explored above) or adherence to antibiotic regimens as social dilemmas, where individual choices impact collective resistance patterns. Concepts like information asymmetry (e.g., regarding side effects) can also be analyzed.</li>
          <li><strong>Resource Management:</strong> Analyzing strategies for sustainable management of common-pool resources like fisheries (e.g., using repeated game models to understand cooperation in limiting catches) or water resources, often involving tragedy of the commons scenarios.</li>
          <li><strong>International Negotiations:</strong> Understanding bargaining dynamics in trade agreements or climate change pacts (e.g., using models of coalition formation or analyzing commitment problems) to predict outcomes and design more effective treaties.</li>
          <li><strong>Behavioral Economics Insights:</strong> Integrating empirically validated concepts like bounded rationality, loss aversion, or fairness preferences (e.g., from ultimatum games) into game models for more realistic policy predictions, a key theme in advanced policy economics that acknowledges humans aren't always perfectly rational.</li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          Chaos theory and the study of economic agents can also complement game theory by helping understand how small changes in policy or agent behavior can lead to large, sometimes unpredictable, systemic effects, and how heterogeneous agents might respond differently to the same policy incentives.
        </p>
        <h3 style={{ fontSize: '1.5em', marginTop: '20px', marginBottom: '10px', color: '#444' }}>Limitations and Ethical Considerations</h3>
        <p>
          While powerful, game theory is not without its limitations when applied to policy:
        </p>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
          <li>
            <strong>Assumptions of Rationality:</strong> Many classical game theory models assume players are perfectly rational and possess complete information. Behavioral game theory attempts to address this, but predicting deviations from rationality remains challenging.
          </li>
          <li>
            <strong>Defining Payoffs:</strong> Accurately quantifying complex real-world payoffs (e.g., social welfare, environmental quality, individual happiness) into a utility function can be difficult and subjective.
          </li>
          <li>
            <strong>Solution Concepts:</strong> Multiple equilibria can exist in a game, making it hard to predict the actual outcome. The choice of equilibrium concept (e.g., Nash, Subgame Perfect) can also influence conclusions.
          </li>
          <li>
            <strong>Potential for Manipulation:</strong> A deep understanding of game theory could theoretically be used to design policies that exploit certain groups or lead to unintended manipulative outcomes if not guided by strong ethical frameworks.
          </li>
          <li>
            <strong>Dynamic and Complex Systems:</strong> Real-world policy environments are often more complex than tractable models can capture, with evolving rules, numerous players, and unforeseen external shocks.
          </li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          Therefore, game-theoretic insights should be used as one tool among many, complemented by empirical evidence, ethical scrutiny, and qualitative analysis. It is crucial to ensure that the application of these models promotes fairness and societal well-being.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '10px', color: '#333' }}>Conclusion: Towards Smarter, Strategically-Aware Policy</h2>
        <p>
          The integration of mathematical economics, particularly game theory, into the policy toolkit offers a significantly more nuanced and effective approach to complex societal challenges. By modeling strategic interactions, utilizing concepts from mechanism design, and visualizing potential outcomes through tools like payoff matrices and scenario charts, policymakers can enhance their ability to anticipate responses, identify leverage points, and design interventions that are both robust and sustainable. While acknowledging the inherent limitations and ethical considerations, such as assumptions about rationality and the complexities of real-world payoffs, a strategic mindset fostered by game theory is indispensable.
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#555' }}>
          The continuous evolution of game theory, including its integration with behavioral economics and advancements in computational analysis, promises even greater applicability. As this paper has illustrated through examples in emissions control and public health, the ability to strategically analyze and visually represent these complex interactions is key to developing smarter, more effective public policy. The rigorous quantitative training, such as that provided by programs like the MIT DEDP, forms a critical foundation for applying these sophisticated analytical techniques to real-world problems for positive societal impact.
        </p>
      </section>

      <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.9em', color: '#777' }}>
        <p>Portfolio of Daniel Viveiros</p>
      </footer>
    </div>
  );
}
