---
SLUG : vangogh
NAME : Vangogh
THEME : Green
TITLE : Building an AI-Powered Search Engine for Color Palettes
DESC : Created a design tool, currently used by 1k+ users every day.
ACTIONS :
- read more
- live site
URL : https://thevangogh.in
DOMAIN : 
- UX Design
- Fullstack Development
- SaaS Management
HASH : 
- Product
- Concept
- Design
- Tech
- Launch
SUMMARY :
- Challenge : Creating a design tool that lets you search or generate color palettes using a search term.
- Outcome : Designed and built a web-based design tool, that lets you search for palettes using keywords. The tool uses Machine Learning to create contextual palettes and a bunch of utility functions to export the palette.
- Performance: Served <b>2 million+ searches</b> since launch, with <b>700+ daily users.</b> Picked up by multiple design blogs and newsletters.
FEATURED : 
 width : 700
 content : [
 [https://www.producthunt.com/posts/vangogh,producthunt.png],
 [https://us12.campaign-archive.com/?u=88328e131c58d0c0995e899eb&id=5d4998f6eb,anotherdesignnewsletter.png],
 [https://prototypr.io/toolbox/vangogh/,prototypr.png]
 ]
---

# Product

## Google, but for color palettes

Color Palettes. We all have spent countless hours struggling to find the right palettes for our creations. There are a few tools out there to help with this task, but what they lack is context. In every design process, we look for palettes for a particular theme or an idea and one usually starts with their personal interpretation of the term. It's a long process, but can we create something that can aid us here?

> What if we could search for color palettes the same way we search for images in Google?

Vangogh is a web-based tool that lets you search for color palettes with any search term like **sunset**, **deep ocean** or **cherry blossoms**. Alternatively, you can upload an image and extract color palettes from it.

![Vangogh Product Preview](vangogh_assets/product.png#large)

# Concept

## Extracting our collective color sense

Color palettes for a particular theme, reflect our interpretations of those themes. Over time, we've repeated this process so many times when creating photographs, art and designs. Internet is full of such images, where the creator has deliberately chosen palettes to evoke the feel of a certain idea. In theory, we could reverse engineer the palettes from such artworks.

### Protoype

To test the validity of the concept, I made a quick prototype. It downloads images from Google search results for the search term entered and picks 4 dominant colors from each image to create the palette.

![Vangogh v1.0](vangogh_assets/vangogh-1.png#normal)

The general direction seemed to be working as the palettes generated were not too bad. While it was just a prototype, it shed light on a lot of implementational details that had to be set right for a functional tool. Few key takeaways -

- Unrelated images in search results
- Multiple palette styles for a search term
- Image background interference
- Averaging colors creating muddy hues
- Google results being repetitive

### Product

Learning from the previous iteration, I introduced multiple ways to smartly filter images and extract color palettes. 

![Working of Vangogh](vangogh_assets/working.png#big)

This concept produced good enough results that could make it into a functional design tool. With the core functionalities ready, now was the time for designing the product.

# Design

## Designing a design tool

Vangogh being a design tool, I prioritized functionality over everything else. I went with a single page design for the search result page, to maintain focus on the core functions.

> Simplicity. Utility. Delight.

### Search page

To make it truly useful, multiple utility functions like copying the color code, downloading the swatch and regenerating the palettes were added while keeping the UI clutter at a minimum. 

![Search result page UI](vangogh_assets/layout.png#large)

### Color composition visualisation

Although multiple palettes with various styles were provided, it was helpful to show the color space from where the palettes were created from, to help users understand the context of the palette better. Histograms are the most common ways to visualise color distribution but it wasn't intuitive enough for an average user to understand. Hence, I created a 3D interactive visualisation to plot the colors. It also added an element of delight to the experience. 

![Histogram vs 3D Plot](vangogh_assets/histogram.png)

### Filling the gaps

With the main search page done, other supplementary pages were designed. The landing page was kept simple with just a search bar and a short description of the app. Based on feature requests from the prototype, an option to generate palettes from an image was added. Since Vangogh already does this for the search page, it was just about adding another interface for this functionality. Last, an about page that explains the working of the tool was added.

![Vangogh screens](vangogh_assets/screens.png#large)

# Tech

## Behind the curtains

### Clustering

Vangogh uses a modified version of [K-Means Clustering](https://stanford.edu/~cpiech/cs221/handouts/kmeans.html) for both groupings the images based on perceptual similarity and extracting palettes from images. K-Means Clustering is a Machine Learning algorithm that can identify clusters in a given data. In this case, the color compositions are the data points and the cluster centres are dominant colors of the image.

![Color clusters Highlighted in a sample distribution](vangogh_assets/cluster.png)

### Color Space

RGB is very convenient when it comes to displays. But it doesn’t reflect the way humans perceive colors. Importantly, the difference between numerical representations doesn’t reflect the perceived difference. This becomes a problem while doing K-Means Clustering. To solve this, I shifted to [LAB color system](https://azure.microsoft.com/en-in/services/cognitive-services/) (created by Adobe) as it is much closer to how human perceive colors.

![RGB vs LAB](vangogh_assets/colorspace.png)

### Visualisation

To create the 3D interactive visualisations, I used [Plotly JS](https://plotly.com/javascript/)'s 3D scatter plots. The scales and grids were removed for an immersive effect. The color space stayed as RGB instead of LAB as the GRB cube was much more intuitive to visualise.

![Image to 3D color composition visualisation](vangogh_assets/transformation.png#big)

### Tech Stack

Since it was an experimental project, I adopted a lightweight tech stack to keep the development rapid and flexible.

- python - backend
- [flask](https://flask.palletsprojects.com/en/1.1.x/) - server
- [scikit-learn](https://scikit-learn.org/stable/) - ML Library
- [jQuery](https://jquery.com) - front-end
- [plotly.js](https://plotly.com/javascript/) - visualisation
- AWS EC2 - server host
- [Bing Cognitive Services](https://azure.microsoft.com/en-in/services/cognitive-services/) - search

Managing it all on AWS was a bit of a pain (mainly due to my lack of experience). Temporarily, its hosted on Heroku and I'm planning to make the entire stack serverless sometime in the future.

# Launch

## Vangogh on the wild

### Launch
Vangogh 2.0 was launched in Jan 2020 and had a very good reception among the early users. Without knowing much about Product Hunt, one Saturday night, I 'launched' it on Product Hunt. The next day, after forgetting about Product Hunt, I was bombarded with notifications and comments and it was the #1 Product of the day. The server crashed 3 times because I hadn't expected the traffic I was getting then.

![Usage stats](vangogh_assets/stats.png#big)

### On the run
With Vangogh being picked up by Instagram, blogs and Youtube videos, the site had been getting constant traffic and has served millions of searches since Launch this year. 

![Mentions across the web](vangogh_assets/mentions.png#big)

### Looking Back
Designing, building and running a design tool used by thousands of users every day is quite an experience. I learnt about what makes a project into a product and how real-world constraints between engineering and design shape a product. 

Since deploying it in the wild, some of his limitations have become more apparent, in terms of accuracy and UI errors. Hopefully, I'll be able to fix them sometime soon. Or if you are interested, the code is open-source and you can issue pull requests [here on github](https://github/pbshgthm/vangogh)