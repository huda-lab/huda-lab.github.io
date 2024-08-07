---
title: "Planning Epidemic Interventions with EpiPolicy"
link: "https://dl.acm.org/doi/10.1145/3472749.3474794"
where: "UIST 2021"
when: "2021-10"
authors: [
  "Zain Tariq",
  "Miro Mannino",
  "Anh Mai",
  "Whitney Bagge",
  "Dennis Shasha",
  "Azza Abouzied"
]
tags: ['powerup', 'dm']
funding: ["CITIES", "ASPIRE AARE20-307"]
acknowledgments: "This work was supported by the NYUAD Center for Interacting Urban Networks (CITIES), funded by Tamkeen under the NYUAD Research Institute Award CG001, by the Swiss Re Institute under the Quantum Cities™ initiative, and by the NYUAD COVID-19 Facilitator Research Fund"
links: [
  {
    txt: "Paper",
    ref: "/papers/epipolicy.pdf"
  },
  {
    txt: "Project Website",
    ref: "https://epipolicy.github.io/"
  },
  {
    txt: "Short Video",
    ref: "https://www.youtube.com/watch?v=JDYb4_coAf4&ab_channel=HuDaLab-NYUAD"
  },
  {
    txt: "Longer Video",
    ref: "https://www.youtube.com/watch?v=KJ7-Wt5bEeM&ab_channel=HuDaLab-NYUAD"
  }
]
--- 
Model-driven policymaking for epidemic control is a challenging collaborative process. It begins when a team of public-health officials, epidemiologists, and economists construct a reasonably predictive disease model representative of the team’s region of interest as a function of its unique socio-economic and demographic characteristics. As the team considers possible interventions such as school closures, social distancing, vaccination drives, etc., they need to simultaneously model each intervention’s effect on disease spread and economic cost. The team then engages in an extensive what-if analysis process to determine a cost-effective policy: a schedule of when, where and how extensively each intervention should be applied. This policymaking process is often an iterative and laborious programming-intensive effort where parameters are introduced and refined, model and intervention behaviors are modified, and schedules changed. We have designed and developed EpiPolicy to support this effort.

EpiPolicy is a policy aid and epidemic simulation tool that supports the mathematical specification and simulation of disease and population models, the programmatic specification of interventions and the declarative construction of schedules. EpiPolicy’s design supports a separation of concerns in the modeling process and enables capabilities such as the iterative and automatic exploration of intervention plans with Monte Carlo simulations to find a cost-effective one. We report expert feedback on EpiPolicy. In general, experts found EpiPolicy’s capabilities powerful and transformative, when compared with their current practice.