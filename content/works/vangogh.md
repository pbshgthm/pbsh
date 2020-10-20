---
title: 'Vangogh'
desc: 'Color Palette'
next: ['vangogh','duomoji']
---

# Vangogh - an AI powered color palette generator
## Designing and building a tool for designers to generate color palettes based on keywords

![vangogh-cover](assets/vangogh/vangogh-cover.jpg#large)


<InfoBox>
	<InfoTitle>🚀  My Role️</InfoTitle>
	<InfoDesc>
		Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars. Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
	</InfoDesc>
	<InfoTitle>👋  Team</InfoTitle>
	<InfoDesc>
		Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars.
	</InfoDesc>
</InfoBox>

### Google, but for color palettes
Color palettes are an _important aspect_ of every design. **Choosing a right** palette is far from a trivial task. This seemingly simple task requires a good understanding of colors theory. **More often**, as designers we are faced with a situation where we need to choose a color palette that evokes a certain feeling. Be it illustrations, graphic design or palette for UI elements, creating a contextually _appropriate_ color palette is an essential step in the process. How do we usually go about it ? Is there a way, we can automate the process ? These are the questions I had in mind that made me work on Vangogh.

##### Vangogh uses Machine Learning to generate color palettes based on keywords.

###### How do we make a machine create color palette based on a keyword ?

To answer that question, lets think of how we use a color palette. When designing something, we pick colors very [carefully](https://google.com) in a combination that would represent and evoke the feel of a certain idea. And we use those palettes in art and designs we create. Be it photography or illustrations, their color palettes reflects the choice we made while choosing them.

##### The art, photographs and graphics we make, reflect the color palette we chose that would evoke the desired feeling

### Prototype : Proof of concept

The idea was to extract palettes from these works we have created, as they reflect how we feel about certain color combinations. For example, when we want a color palette to evoke ‘sunset’ , we could extract color palettes from images of sunsets, as we can assume a good photograph generally has a good color palette. So I broke it down into a set of simple (actually, not simple) process

1. Get lots of images for a keyword
2. Extract color palette from each image
3. Hope the palettes are contextually appropriate

The best source for images that we can search with a keyword — Google Images. But Google Images API contains a lot of duplicates that gives the same palettes. So I decided to go with Bing Image search API. I used a Machine Learning algorithm called K Means clustering to extract the color palettes from each image. I its sent to the front-end to be displayed as palettes.