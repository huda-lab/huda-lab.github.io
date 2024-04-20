---
title: "WhyFlow: Explaining Errors in Data Flows Interactively"
link: "https://dl.acm.org/doi/..."
where: "DaSH@KDD’20"
when: "2020-08"
authors: [ 
  "Maeda Hanafi", 
  "Azza Abouzied", 
  "Marina Danilevsky", 
  "Yunyao Li"
]
tags: ["powerup"]
acknowledgments: "" 
awards: []
links: [
  {
    txt: "Paper",
    ref: "/papers/whyflow.pdf"
  }
]
---
In real-world data processing pipelines or data flows, data are often processed by many modules, potentially written by multiple developers. As bugs are introduced, it may be relatively easy to identify errors in the final outputs. However, tracing the errors backwards to their origin in the pipeline in order to identify and fix the relevant faulty module is a difficult and time-consuming task in practice. We built WhyFlow to help users localize which modules in the pipeline are propagating errors by automatically generating explanations: simple predicates that zero in on the most relevant aspects of the errors within the data flows. We describe WhyFlow and present a user study that shows how explanations are useful in helping users identify errors in data flows.