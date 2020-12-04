---
SLUG : covidwire
NAME : CovidWire
THEME : Yellow
TITLE : Delivering curated news summaries on Covid 19 in Indian languages
DESC : Founded a covid response community project, that made news accessible for 15k+ people
ACTIONS :
- read more
- live site
URL : https://covidwire.in
DOMAIN : 
- Product Design
- Fullstack Development
- Project Management
HASH : 
- Product
- Research
- Design
- Launch
SUMMARY :
- Challenge : How to make good quality, authentic news on COVID19 accessible to the Indian demographic
- Outcome : We built a web app to deliver curated news in short summaries, translated in native Indian languages and scaled to 2900 daily users. Built a content pipeline to enable 110+ volunteers to work on the news pieces.
- My Role : Seeded the idea and acted as the Project Lead to set the vision for the Product. Headed a small design team. Responsible for the full-stack development of the app.
FEATURED : 
 width : 900
 content : [
 [https://abx.xyz,hindu.png],
 [https://abx.xyz,toi.png],
 [https://abx.xyz,iiith.png],
 [https://abx.xyz,twn.png],
 [https://abx.xyz,suntv.png]
 ]
---

# Product
## An antidote for the information pandemic

With the onset of the global pandemic - COVID19, another type of pandemic plagued the world - information. Being a new subject, people were hooked onto learning more about it. It proved to be very tricky, especially in the Indian context, with the advent of fake news, WhatsApp forwards and language barriers among other reasons.

I initiated a volunteer-driven effort, to tackle this and CovidWire was born. We curated local and international news on COVID 19, summarised and translated them and made it accessible through a mobile web app.

> Curate. Summarise. Translate. Share.

### Consumer facing Webapp

We designed and built a PWA (Progressive Web APP) in an agile development model and distributed news pieces processed by our volunteers to our 2000+ daily users.

![CovidWire Web App Interface](covidwire_assets/webapp.png#large)

### Volunteer content platform
Along with the user-facing web app, we also designed and implemented the content creation and management platform for our 110+ volunteers. We utilised **no-code** and **low-code** solutions to create a responsive environment to coordinate our content efforts.

![Volunteer's content flow pipeline](covidwire_assets/content-flow.png#large)

With the product team consisting of just 3 individuals, we were able to design effective systems that ensured a smooth working of volunteer facing and user-facing solutions.

# Research

## Understanding the Indian Information Context

In the early days of the pandemic, it was very apparent that there is a huge problem in how the general Indian public learns and understands the news about COVID19. Owing to the sensational nature of the topic, the conversation around it was present everywhere. Instead of taking an academic approach with user interview, affinity mapping and personas, we aimed for a more organic process which was agile and responsive.

### Conversations
We talked to adults of age 25 to 65, who were our target demographic. Instead of structured interviews, we had multiple casual chats to deeply understand the various factors involved in the consumer behaviour of the news reading.

### Insights
Of the multiple issues we identified, we focused on 5 of them, which later became the guiding principles of CovidWire.

![Insights from conversation](covidwire_assets/problems.png#large)

# Design
## CovidWire Beta

While designing for our target demographic, most of them being emergent users, we needed to make the UX simple and familiar. At the same time, we were limited in terms of content and technical side, we had to make constant compromises in all spheres. To understand how to work out the entire flow from curation to it being published on the app and shared on WhatsApp, we built a beta version to test the core features. 

![Beta version](covidwire_assets/beta.png#big)

We gathered insights from volunteers and beta users regarding the web app, to set out for designing the first version. Some key learnings from beta run -

- Feed becomes monotonous with no visual difference between news cards
- Information architecture gets complex quickly when introducing filters (domains, regions)
- Region switch happened rarely whereas language switch happened frequently
- 12 news pieces peer session was the average read rate
- Certain news stories can be conveyed with just headlines
- Utility functions like bookmarks, feedback and search were desired
- Familiar design patterns, similar to the ones on social media apps are the most effective for emergent users

## KISS. Keeping it Stupid Simple

With learnings from the beta run, we designed the app over the next couple of weeks. We adopted an agile development model, in contrast to the waterfall approach, so we stay realistic in terms of design and tech.

### Information Architecture

![Information architecture of the Webapp](covidwire_assets/architecture.png#large)

### Primary Layout

![Feed and Card layouts](covidwire_assets/blueprint.png#big)

### Design Language

![Design guide](covidwire_assets/design-lang.png)

### Component Library

![Component library](covidwire_assets/components.png#large)

# Launch

## In the hands of users

CovidWire was launched on April 22, after 3 weeks of planning and beta run. We saw steady growth in our user numbers and we tweaked the content output based on the immediate feedback we received from our users. We were featured in a few newspapers and TV channels which further boosted our adoption rate. 

![User growth](covidwire_assets/growth.png#big)

### All good things end (?)
Between late July and early August, we started to notice a drop in the usage numbers. Interestingly, we also found a similar drop around the same time across other COVID19 related websites. This indicated a bigger trend of information fatigue setting in and people getting back to their normal lives and schools and colleges restarting.

![Decline across multiple](covidwire_assets/trends.png#big)

We had our last day on August 31st as we figured that the user numbers are unlikely to rise again. After a 5 month run, we had a fair amount of impact in our immediate circles and created a lovely community. We have plans to rethink CovidWire and its philosophy for other issues in a much larger manner. The whole project, including the data, web app and the content platform has been open-sourced and can be found [here on github](https://github.com/pbshgthm/covidwire).