---
title: "sPaQLTooLs: A Stochastic Package Query Interface for Scalable Constrained Optimization"
link: "https://par.nsf.gov/servlets/purl/10193275"
where: "VLDB'20"
when: "2020-09"
authors: [ 
  "Matteo Brucato", 
  "Miro Mannino", 
  "Azza Abouzied", 
  "Peter J. Haas", 
  "Alexandra Meliou"
]
tags: ["powerup"]
acknowledgments: "This work was supported by the NYUAD Center for Interacting Urban Networks (CITIES), and funded by: Tamkeen under the NYUAD Research Institute Award CG001, the Swiss Re Institute under the Quantum Cities initiative, and the National Science Foundation under grants IIS-1453543 and IIS-1943971." 
awards: ["Best Demonstration Award"]
links: [
  {
    txt: "Paper",
    ref: "/papers/sPaQLTooLs.pdf"
  }, 
  {
    txt: "Talk",
    ref: "https://www.youtube.com/watch?v=1v5KevGKbfE"
  }
]
---
Everyone needs to make decisions under uncertainty and with limited resources, eg, an investor who is building a stock portfolio subject to an investment budget and a bounded risk tolerance. Doing this with current technology is hard. There is a disconnect between software tools for data management, stochastic predictive modeling (eg, simulation of future stock prices), and optimization; this leads to cumbersome analytical workflows. Moreover, current methods do not scale. To handle a broad class of uncertainty models, analysts approximate the original stochastic optimization problem by a large deterministic optimization problem that incorporates many “scenarios”, ie, sample realizations of the uncertain data values. For large problems, a huge number of scenarios is required, often causing the solver to fail. We demonstrate sPaQLTooLs, a system for in-database specification and scalable solution of constrained optimization problems. The key ingredients are (i) a database-oriented specification of constrained stochastic optimization problems as “stochastic package queries”(SPQs),(ii) use of a Monte Carlo database to incorporate stochastic predictive models, and (iii) a new SUMMARYSEARCH algorithm for scalably solving SPQs with approximation guarantees. In this demonstration, the attendees will experience first-hand the difficulty of manually constructing feasible and high-quality portfolios, using real-world stock market data. We will then demonstrate how SUMMARYSEARCH can easily and efficiently help them find very good portfolios, while being orders of magnitude faster than prior methods.
