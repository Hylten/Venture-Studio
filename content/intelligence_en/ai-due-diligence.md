---
title: "M&A Due Diligence in the AI Era: How to Audit a Black Box"
slug: "ai-due-diligence"
description: "M&A due diligence in the AI era: How to audit a black box. Due diligence framework."
date: "2026-03-19"
tags: []
categories: ["ai-enterprise"]
canonical_url: "https://hylten.github.io/Venture-Studio/intelligence/ai-due-diligence/"
meta_title: "M&A Due Diligence in the AI Era: How to Audit a Black Box"
meta_description: "M&A due diligence in the AI era: How to audit a black box. Due diligence framework."
featured_image: ""
draft: false
author: "Jonas Hyltén"
---

## Introduction: A New Due Diligence Paradigm

Over the past decade, M&A processes in the software sector have evolved toward increasing system complexity, shorter analysis windows, and growing dependence on data-driven business models. For companies in Series C and above—particularly in SaaS—this has meant a gradual professionalization of technical due diligence. But with the breakthrough of the AI era, the entire playing field has changed. Today, buyers face a situation where the key value in a target company does not primarily reside in the codebase or the scalability of its cloud infrastructure, but in a black box: a combination of models, data flows, internal tooling, system behaviors, and organizational processes that cannot be easily isolated or understood using traditional audit tools.

AI systems are not like classic SaaS engines. They are not deterministic processes where input and output stand in clear relation. They are probabilistic machines whose behavior changes over time, often without anyone in the organization knowing exactly why. When an increasing share of margins in modern SaaS models depends on automation levels and model performance, due diligence becomes a question of understanding uncertainty. That question is structurally different from understanding technical debt or cloud architecture.

It is in this landscape that an institutional approach to AI due diligence is beginning to take shape. It involves treating AI systems as living, dynamic data systems—not as static product features. Acquirers therefore need a new mental framework: a system-builder perspective where AI components are audited as previously were core architectures, pipelines, and data volumes.

## From Code Review to Model Review

In classic tech due diligence, source code quality, API design, security levels, and backend scalability have been central focus areas. This still applies, but AI components have introduced a second dimension of analysis. It is no longer enough to assess the software around the model. You must understand the model’s lifecycle: how it is trained, how it is monitored, how it is updated, and what kind of operational tolerance it has.

The fundamental difference is that the code in a model pipeline is often significantly simpler than the logic in the model itself. The model’s behavior is not in lines of code, but in weight matrices, embeddings, data-sharing patterns, and distribution shifts. These are practically inaccessible to traditional audit methods. This means due diligence must shift focus from inspection logic to functional logic. You audit how the system behaves over time, not how it looks at a given moment.

Acquirers therefore need to understand the models’:

- Training regimes
- Evaluation frameworks
- Observability levels
- Feedback loop structures
- Data strategy and data quality
- Risks of "model drift" and "data drift"
- Robustness against adversarial inputs
- Potential regulatory risks tied to datasets or inference flows

In practice, this means buyers must establish a language for model evaluation that is specifically developed for M&A contexts. This type of terminology is still in its infancy, and most transactions are conducted with significant asymmetry in information understanding between seller and buyer.

## The Difficulty of Auditing a Black Box

One of the most central problems in AI due diligence is that many modern systems are designed as black boxes both technically and organizationally. It is not just that model weights are complex. It is that the model lives in an ecosystem of data, pipelines, cloud services, annotation tools, orchestration systems, QA processes, and internal manual labor that is not transparent in itself.

AI companies in rapid growth stages tend to build internal systems organically. This means fragmented datasets, technical debt in annotation flows, ad hoc scaling, and a multitude of undocumented decisions in model versions. This type of structural disorder is not necessarily a risk in itself—many high-performing AI teams build effectively in chaos. But acquirers must understand what constitutes necessary quick fixes and what constitutes long-term risk.

Auditing a black box is not about understanding every component. It is about understanding the system’s emergent behaviors. For M&A, this means shifting focus from static artifacts to dynamic patterns. Examples:

- Performance over time rather than performance at a given benchmark.
- Deviations in model drift and how quickly they are detected.
- How recurring data problems are identified and handled.
- Which parts of the system depend on internal expertise rather than documented process flows.
- How changes in customer data affect the system’s risk profile.

This type of analysis requires a new type of due diligence specialist: one who understands both software architecture and model behaviors, but also data governance, AI ethics, regulatory frameworks, and operational risk management.

## What Traditional Due Diligence Misses

When acquirers apply classic technical audit methods to AI companies, a number of blind spots emerge. Some of the most common:

- **Model performance** is often measured on datasets with unclear representativeness. A high accuracy score can hide major risks in real-world usage.
- **Model versioning** is often inadequate. The buyer does not know which model is used by which customer or in which part of the system.
- **Data quality** is often both manual and automated, without clear responsibility allocation. Many companies lack clear documentation of the annotation process.
- **Production systems for model inference** are often ad hoc optimized for cost rather than robustness.
- **Many AI companies rely on third-party models or APIs** without mapping the risks from upstream providers.
- **Companies with rapid customer growth** tend to accumulate model drift across multiple segments but lack central tools to identify it.

Each of these blind spots can become a problem after acquisition. But together, they form a systemic risk that is difficult to value. Traditional due diligence is built for code quality and architecture. AI due diligence is built for behavior and long-term system dynamics.

## Data: The Hidden Balance Sheet

In AI companies, a significant portion of value consists of data. This is not a new assertion, but in M&A contexts, it remains underanalyzed. Data functions as a hidden balance sheet: a set of assets that are sometimes explicitly documented but often only exist in continuous flows and internal processes.

Data quality consists of multiple layers:

- Raw data flowing in from users.
- Processed data undergoing validation and normalization.
- Annotated data serving as training material.
- Metadata describing how data has been used, by whom, and for what purpose.
- Derived data underlying embeddings or model weight adjustments.

During acquisition, it is common for the buyer to receive an overview of data volumes and data sources. What is rarely audited is the functional quality of pipelines, the degree of manual intervention, the signal-to-noise ratio, or risks tied to distribution shifts. Even rarer is an analysis of how much the data actually contributes to model performance.

It is therefore important to see data not as static rows in a warehouse, but as a living process. In AI systems, data is a resource that is consumed and transformed. One of the central questions in acquisition is therefore:

Is the data in the target company a renewable resource or a one-time asset?

If the data is renewable, it means the system has strong feedback loops. If it is one-time in nature—for example, proprietary datasets without natural replenishment—the buyer must understand how quickly the value will erode.

## The Economic Value of the Model

In an AI-driven business model, the model’s value is not directly proportional to its development cost. This fundamentally differs from classic software. Value lies in:

- How the model affects margins.
- How it reduces customer churn.
- How it improves expansion revenue.
- How it scales across customer segments.
- How dependent the business model is on these effects.

This means a model that is cheap to develop can be strategically critical, while an advanced model with high development costs can be economically marginal. For M&A, this requires a fine-grained understanding of how model performance translates into economic outcomes.

This type of economic modeling remains rare in due diligence. Most transaction processes struggle to translate technical model performance into EBITDA forecasts. But this is where AI due diligence must develop toward a more system-oriented method.

The buyer must understand the model’s actual contribution, not just its technical functionality. This means auditing models through lenses such as:

- Significance for customer value.
- Dependence on data inflow.
- Robustness in inference flows.
- Long-term cost structures in training and operations.
- Scalability in an international and regulatorily complex ecosystem.

When this type of analysis is established, it becomes possible to value AI systems with greater precision. Acquirers can therefore make decisions with higher certainty and longer time horizons.

## Infrastructure: The Overlooked but Critical Component

Modern AI companies depend on extensive technical ecosystems. In Series C+ SaaS companies, a significant portion of the system’s real complexity often consists of:

- Training infrastructure
- Feature stores
- Model registries
- Data pipelines
- Monitoring flows
- Scaling logic for inference
- Batch and streaming architectures
- Orchestration frameworks
- Internal tooling for annotation and QA

What is often overlooked in due diligence is how these systems actually function in daily operations. Many AI companies have built internal tools that are business-critical but underdocumented. In some cases, a significant portion of the model’s performance depends on domain expertise internally rather than structural quality in the system.

This means the M&A process needs a much more hands-on understanding of:

- The maturity of the systems
- The amount of hidden technical debt
- How much is driven by expert dependency
- How much organizational bottlenecks affect model quality
- Where the system risks scaling poorly

The thesis here is simple: An AI company’s model is only as good as its infrastructure and processes. In due diligence, infrastructure often becomes a better indicator of long-term value than the model file itself.

## Regulatory Variables and Risk Zones

AI regulation is evolving rapidly. This means buyers must understand which parts of the target’s tech stack are exposed to future requirements. This is not just about the EU AI Act but also about:

- Data protection rules affecting training data
- Transparency requirements affecting the model’s black-box nature
- Documentation requirements
- Risk analysis and model governance requirements
- Restrictions on biometric or sensitive datasets
- Boundaries for using foundation models

The biggest problem is not necessarily regulatory requirements themselves, but how quickly the requirements can change. A target company dependent on data sources that risk being banned or restricted can see its most valuable asset class disappear overnight.

Regulatory due diligence must therefore not only be defensive. It must also be forward-looking. This is one of the most difficult parts of AI due diligence today: building a future model where technical, regulatory, and economic dimensions interact.

## A New Institutional Standard: AI Systems as Organizational Diagnostics

AI due diligence is not an isolated technical activity. It is also an organizational analysis. AI systems reveal:

- How a team makes decisions
- How well documentation functions
- How data-driven the organization is
- How bottlenecks are handled
- How technical debt is prioritized
- How quickly recovery from errors is possible

This means auditing AI components is simultaneously auditing the company’s operational ability. This dimension becomes even more important when AI systems are deeply integrated into core business. A model pipeline that works well is often a sign of an organization with internal discipline and an understanding of lifecycle management for complex systems. A pipeline that works poorly often reveals structural deficiencies far beyond the technology.

This is why AI due diligence must be seen as a holistic diagnosis: a way to assess whether the company has built a resilient system, both technically and organizationally. This type of analysis requires buyers to develop a new institutional competence—one that combines data technical expertise with systems thinking and business strategy.

It is in this intersection that the most critical due diligence insights usually emerge, especially in later funding rounds and larger acquisitions. Here, the difference becomes clear between companies that have grown with structure and those that have grown with improvisation. Both types can be successful in the short term, but only one is long-term robust in an AI-driven market.

In the next section, we delve deeper into the central areas of AI due diligence, including methodology, tools, measurement structures, and a framework for valuing hard-to-audit AI systems under transaction pressure.

## Technical Risks Hidden Behind AI Models

When a company pitches its AI, it often claims the model is proprietary, unique, or trained on proprietary data. In a due diligence environment, this is usually just the beginning. The technical review needs to go much deeper to reveal whether the technology is actually scalable, legal, and possible to integrate after acquisition. The problem is that AI models are practically black boxes. You see input and output but not how decisions are made or exactly which data material influences the model.

A common pitfall is that companies oversell what the model can actually do. It is not uncommon for advanced systems to be rule-based flows with marketing-friendly terminology. Here, a technical deep dive is required to clarify which components are actually machine learning and which parts are built on traditional programming.

Another risk is that the model does not behave stably in real-world use cases. Many businesses have demonstrations designed for pitch meetings, but reality can be entirely different. It is therefore critical to insist on seeing the model’s performance in real situations. This includes everything from latency and drift costs to how often the model needs retraining to remain accurate.

Perhaps the most underestimated technical risk concerns the tools and frameworks the model is built on. A large number of AI startups are practically dependent on cloud providers that in turn offer API-based models controlled by third parties. If the provider changes its pricing model or withdraws a feature, this can have dramatic consequences for an acquired company. It is therefore a fundamental due diligence question to map technical dependencies and evaluate how much of the technology is actually under the company’s own control.

## Data Quality, Data Sources, and Training History

Data is the core of all AI systems, but precisely for that reason also one of the most complex areas to audit. Unlike traditional software, data does not just affect the model during development but shapes the model’s behavior throughout its lifecycle. A weak or controversial data foundation can quickly destroy the value a buyer expects.

The first question concerns data sources. Many companies struggle to document exactly where their training data comes from. It is not uncommon for datasets to be combined from open databases, customer material, and sometimes even internet scraping without clear permission checks. In a transaction, the buyer must demand a complete account of all data sources and ensure that usage aligns with licenses and rights.

Data quality is the next aspect. There are AI models that fundamentally work well but suffer from deficiencies due to low-quality or geographically biased datasets. This can lead to incorrect predictions and biases that are difficult to detect on the surface. For example, a healthcare company may have models trained on demographics that do not reflect the target market after acquisition. The result can be both inefficiency and legal risks.

Training history is often overlooked but simultaneously critical. A buyer needs to understand:

- How many times the model has been retrained
- What changes have been made to data over time
- How well the training flow is documented
- Whether there is a possibility to reproduce the model’s current version

If a model cannot be recreated anew, this is a serious warning sign. In practice, it often means the company lacks control over its own AI and that future improvements or maintenance become unpredictable.

## Legal and Regulatory Challenges

The regulatory environment for AI is developing rapidly. This means a buyer must evaluate not only today’s compliance but also how well the company is positioned for future requirements. Otherwise, an acquisition that looks promising today can become a legal burden within a year.

Data protection issues are central. GDPR imposes clear requirements on how personal data may be processed, and this includes how it may be used for training and operating AI models. If a company has used personal data without adequate legal basis, this can result in significant sanction risks. During due diligence, the buyer should therefore request detailed descriptions of how data was collected, how consent was handled, and how data was anonymized.

For AI used in high-risk environments, such as finance or healthcare, the regulatory framework becomes even more complex. There, special controls may be required to ensure robustness, traceability, and accountability. The buyer must analyze whether the company already meets these requirements or whether significant investments will be needed post-acquisition to align with regulations.

Another area concerns intellectual property. Many AI companies lack clear licenses for the code and datasets included in the product. It is not uncommon for open source components to have been used in ways that violate the license. In the worst case, this can mean the entire model must be rebuilt after purchase. Reviewing the license structure and ensuring no legal ambiguities exist is therefore critical.

## Operational Risks and the Need for Human Oversight

AI systems are not self-sustaining. They require human expertise to monitor, calibrate, and further develop. During due diligence, the buyer must understand the extent to which the company depends on specific individuals. This is especially true for models that only one or two developers can update or troubleshoot.

If a company lacks clear monitoring routines, the risk of model degradation arises. Many models degrade gradually as the world changes. Customers notice it first, often long before the company does. This can hit the value and trust in the product hard. A robust operations environment includes performance metrics, operational alerts, and processes for rapid retraining when needed.

It is also important to evaluate the dependence on manual labor that may not be visible at first glance. Some companies present AI systems as automated despite the process behind the scenes requiring significant human intervention. In a transaction, the buyer must request clear flowcharts that clarify what is automated and what requires manual handling. This is especially true for models that rely on human feedback to function correctly. This is not necessarily negative but needs to be transparent to avoid incorrect expectations.

## Transparency Requirements and Documentation Levels

One of the most important questions in AI due diligence is whether the company can explain how its technology works. This does not mean the seller must reveal the codebase, but they must be able to provide sufficient documentation for the buyer to understand the risks.

Minimum documentation requirements should include:

- Model architecture
- Description of the training process
- Account of data sources and licenses
- Processes for monitoring and further development
- Dependencies on third parties

If the company cannot produce this, it often indicates that documentation simply does not exist. This is a clear weakness. In practice, the model then becomes very difficult to integrate, maintain, or further develop after acquisition.

Transparency is also important from a regulatory and customer perspective. Many industries now require that decisions affecting individuals be explainable in an understandable way. If the company’s AI does not offer any form of explainability, this can limit its future use cases. Buyers therefore need to assess whether the model can be adapted to meet such requirements or whether it is fundamentally too closed to be useful in long-term applications.

## Scalability and Cost Structure

An AI model that works well at small scale is not necessarily scalable in a profitable way. In due diligence, the buyer must assess the costs that arise when the model grows in usage or new markets need to be supported.

Operational costs are central. There are models with good performance but extremely expensive to run in the cloud. This is not always noticeable until costs skyrocket with increased usage. Here, a clear analysis of server costs, token usage, and other fees arising in operations is required.

Scalability also concerns data. If the model requires continuous supply of large amounts of quality data, this can become a significant operational problem. A buyer should therefore understand how much new data is needed and how this data will be acquired or generated.

Technical debt must also be analyzed. Some models are built quickly to reach the market but lack stable architecture. Under high pressure, the system can therefore break down or require significant investments to lift to a production-ready level.

## Integration Capability After Acquisition

In an M&A deal, it is not just the technology itself that is relevant, but how well it integrates into the buyer’s existing IT environment. This is especially true for AI systems, which often have unique requirements for data flows, security, and infrastructure.

The buyer must obtain a detailed picture of which systems the model depends on and what limitations exist for migrating the model to a new environment. It is common for startups to have built their architecture around specific cloud platforms. If the buyer uses a different platform, integration can become very costly or, in the worst case, impossible.

Another question is how the model will integrate with the buyer’s data. If the buyer has large datasets that should be used to improve or retrain the model, clear interfaces and processes are required. If these are missing, the model can become difficult to further develop after acquisition.

Finally, the buyer must assess whether the technology is compatible with the buyer’s security requirements. This includes everything from encryption and access control to how data is logged and validated. It is a common pitfall that AI startups have not built their systems with enterprise-grade security, which can require extensive work post-transaction.

## Valuation in AI Transactions

The final part of due diligence for AI companies concerns valuation. The technology’s market value is often difficult to assess because AI is not a traditional asset. Models can be valuable today but quickly lose relevance if a competitor launches a better model.

Valuation should therefore be based on several factors:

- Degree of technical differentiation
- Data advantage
- Legal and operational protection
- Team’s ability to further develop the technology
- Model’s cost structure and scalability

It is also critical to analyze how much of the value lies in the technology and how much depends on the team. In some companies, the model is less valuable than the people who built it. If key personnel leave after a transaction, the value can quickly erode. Here, retention strategies and incentive structures become important discussion points.

In an AI era where development pace is rapid, valuation can become even more complex. Buyers therefore need to look at future opportunities rather than just the current state of technology. A model that is technically weak today can be attractive if the company has unique datasets that enable rapid improvement. Conversely, an impressive model can be less valuable if the data foundation is poor or legally questionable.

## Summary

Due diligence in the AI era is about seeing through what is not visible at first glance. The technology must be audited in depth and understood from legal, operational, and technical perspectives. An AI model can be an enormous asset but also a risk if it is not properly documented or based on legal and high-quality data.

In the next part of the article, the focus will shift to how to practically organize an AI due diligence process and what questions should be asked to avoid the most critical pitfalls.
