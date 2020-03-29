![Logo](https://user-images.githubusercontent.com/32719891/77843924-9ccc9200-7156-11ea-8e5e-73d4f9d47da4.png)

## Inspiration

Sometimes the need to build new structures is unavoidable. At UC Santa Cruz, the demand for student housing has pressured the school to begin construction on forests that have been preserved for decades, resulting in many student protests. However, the desire to build more housing won't go away even if the protests halt deforestation. In a bustling city like Los Angeles, these pressures are even more acute and our team wanted to build a more data-driven application to determine the most optimal locations to build, keeping environmental friendliness, property value, and other valuable metrics in mind.

## What it does
**place.it** allows Los Angeles's city planners, architects, and everyday citizens to understand the impact and cost associated with building structures in certain areas through advanced analytics based off real city datasets. Users start by generating custom buildings simply by filling out a form and clicking on a map. Users can build as many buildings as they would like at a time. When the proposed construction site is finished being planned, users can click a single button to simulate the impacts of the buildings. Our research on local laws and ordinances, our machine learning models trained on city data, and our utilization of numerous third-party APIs combine to provide information about the effects that the user's planned site has, as well as tips on how to improve the construction proposal. We additionally provide separate information on the impact of every single building planned by the user. What's more, our [API](https://placeitapi.herokuapp.com/) is documented and our ratings on environmental impact, carbon emissions, housing values, crime rates, parking, and transit could be made possible for use by any other developer.

![place.it](https://im2.ezgif.com/tmp/ezgif-2-9918e63f6d16.gif)

## How it's built

**place.it** utilizes multiple datasets provided by the city of Los Angeles in order to rate the impact of constructing new buildings. We take into account almost every single building, street, and tree in the city. We analyze this data based on real city specifications in order to calculate ratings on areas that have a social, environmental, or financial impact. Our explanation of each of our ratings and how they're calculated can be found below.

### Calculating the Rating

![Ratings](https://i.imgur.com/Obh7KwP.png)

We calculate an overall rating based on 6 key aspects of a building — its estimated carbon emissions, land valuation / market rate, parking requirements, crime rate, impact on trees, and transit score.

#### Estimated Carbon Emissions

The biggest challenge we had was acquiring the best feature variables for generating a model using [SciKit](https://scikit-learn.org/stable/) to predict Carbon Emissions (tons of CO2) from square footage and type of building. Just using the raw data, we were getting terrible linear fits, with an R^2 value of 0. We tried predicting using different columns provided by [Los Angeles](https://data.lacity.org/A-Livable-and-Sustainable-City/Existing-Buildings-Energy-Water-Efficiency-EBEWE-P/9yda-i4ya), including energy usage and year built, but nothing was working.

However, using data visualization tools such as matplotlib and [radiant](https://radiant-rstats.github.io/docs/), we were able to deduce that there are a few outliers skewing the data. After removing those our model was able to predict the Carbon Emissions with an R^2 value of 0.7. We use this model to score potential building placements in terms of pollution generated.

#### Land Valuation

This was calculated using the Estated API, which takes in a physical address which we received by reverse geocoding latitude and longitude points using the Google Maps API. The Estated API will return the current assessed land value and the amount of tax on that property in dollars, which is useful in determining if the benefits of building outweights the cons of removing natural resources.


#### Parking Requirements

This is determined by the specifications from the [County of LA](https://library.municode.com/ca/los_angeles_county/codes/code_of_ordinances?nodeId=TIT22PLZO_DIV6DEST_CH22.112PA). Los Angeles County mandates a certain amount of parking spots based on a building's use and size, and as such we wanted to calculate the number of parking spots required. More parking spots causes more pollution and traffic in Los Angeles, and a high mandatory parking amount generally results in a lower rating.

#### Crime Rate

When placing a building, it's good to know the safety of the area you're building in. Using the [SpotCrime](https://spotcrime.com) database, we're able to see the number of crimes committed in the last month for the building's location, allowing us to assess the location and rate it accordingly.

#### Impact on Trees

Trees are incredibly important — [Support Planting Trees!](https://teamtrees.org) — and as such it is important to note how many trees your proposed building will destroy. We hope by providing this number, the user can pledge to replant the trees or consider a more eco-friendly location. We determined this rating by using the tree dataset provided by Los Angeles county. Given a point of interest where someone would want to build over, we would identify how many trees exist within a certain length and width of that point based off our tree dataset. 

#### Transit Score

Public transportation, walking, and biking are incredibly important to any kind of building, as it aids the users of the building in accessing the location. Leveraging the [Walk Score API](https://walkscore.com), we are able to score any location to determine a transit rating for the given location.

### Displaying the Data

Of course, such beautiful data needs to be displayed in a beautiful manner. Our UI was designed with [Figma](https://www.figma.com/file/u1RcjhQK1W572SM5c3fONY/La-Hacks-2020?node-id=0%3A1) and developed with [React](https://reactjs.org/). We used [Redux](https://redux.js.org/) to manage application state, which determines the look of elements on the website based on the user's interactions. With simple GET requests to the complex backend, we updated our element's states and populated our website with plenty of data. To generate the map, we utilized the [Mapbox GL JS](https://www.mapbox.com/) library and threw on [three.js](https://threejs.org/) to generate 3D buildings. Finally, to tie the whole application together and really make it look beautiful, we used [Ant Design](https://ant.design/) as our UI framework, [less](http://lesscss.org/) as our CSS preprocessor, and [GSAP](https://greensock.com/gsap/) as our animation library.

![Figma](https://user-images.githubusercontent.com/32719891/77843714-d00e2180-7154-11ea-9189-166408094a48.png)

___Our application's UI was designed collaboratively utilizing Figma.___

Our application currently sits on the web using [Netlify](https://www.netlify.com/) and our server is deployed with [Heroku](https://www.heroku.com/). Feel free to access our website at any time and if something's not working, leave a comment on this Devpost!

## Challenges we ran into
The biggest challenge we had was acquiring the best feature variables for generating a model using [SciKit](https://scikit-learn.org/stable/) to predict Carbon Emissions (tons of CO2) from square footage and type of building. Just using the raw data, we were getting terrible linear fits, with an R^2 value of 0. We tried predicting using different columns provided by [Los Angeles](https://data.lacity.org/A-Livable-and-Sustainable-City/Existing-Buildings-Energy-Water-Efficiency-EBEWE-P/9yda-i4ya), including energy usage and year built, but nothing was working.

However, using data visualization tools such as matplotlib and [radiant](https://radiant-rstats.github.io/docs/), we were able to deduce that there are a few outliers skewing the data. After removing those our model was able to predict the Carbon Emissions with an R^2 value of 0.7. We use this model to score potential building placements in terms of pollution generated.

![Notebook](https://i.imgur.com/jAGMYhw.png)
___SciKit-learn, coupled with matplotlib and radiant, allowed us to predict [carbon emissions](https://github.com/gits-lit/place.it/tree/master/backend/modules/ratingApi).___

## Accomplishments that we're proud of

We're proud that we were able to make a full stack web application like **place.it** in such a short amount of time. **place.it** combines complex data analytics and machine learning on our backend with an intuive user interface on our frontend. We believe that **place.it** could easily be an application utilized by city planners in order to craft better structures. Our application is fully functional (although certain functions are disabled because the APIs that power them cost $$$ to use) and simple for anyone to use. This makes it user friendly for politicians and architects who may not be as tech savvy as developers are.

What's more, we're proud of how well we were able to document it. We made robust documentation and a well crafted video. This again increases accessibility and helps for both future users and for future development.

We're also proud of how well we adapted to a virtual hackathon. Our team stayed in strong communication throughout the hackathon, constantly staying on both Zoom and Facebook messenger. Coupled with Git for version control, we were able to work efficiently and effectively, despite the fact that we were in separate locations. 

![Buildings Data](https://im2.ezgif.com/tmp/ezgif-2-ee4a800a4548.gif)

___Data and UI combine to make **place.it** a useful tool for anyone.___

## What we learned
We utilized a tremendous amount of technology to create **place.it** and we all learned a lot from working with so much of it. 

To reiterate, we utilized Python to use data analytics tools like pandas, matplotlib, and radiant. We additionally used SciKit-learn for machine learning. We additionally called several APIs including SpotCrime, Estated, and WalkScore. Finally, the whole server was tied together with a Node.js and Express backend and deployed on Heroku.

On the client side, we designed our application first with Figma. The application was built using HTML, CSS, and Javascript with React being utilized as the front end framework. We utilized Redux to manage state. We also relied on the MapBox GL in order to generate the map and overlayed the map with three.js models generated. Finally, as stated before, we utilized less, GSAP, and Ant Design to beautify our application. The front end was then deployed on Netlify.

The tremendous amount of technologies that went into this application meant that this entire project was a constant learning process for all five of us. We had a lot of fun facing the numerous challenges that were thrown at us and we were not scared to get knee deep into documentation.

![Technologies](https://i.imgur.com/Kweep0o.png)

___A lot of technology went into making **place.it**.___

## What's next for place.it

Moving forward, we would love to expand our application to future cities. At the moment, all of our data comes from the city of Los Angeles. We could see cities inputting their own datasets in order to help build their own communities. Additionally, we would love to work with the city of Los Angeles to make this application actually usable by officials. We imagine that the city could directly input data that they obtain annually in order to keep the data powering this application up to date.

We also believe that there's a strong future for the [API](https://placeitapi.herokuapp.com/) that we produced for this application. We documented the API well so that it can be utilized by future developers, meaning that other developers can utilize our data analytics in order to create their own applications. We imagine that we can also add additional features to the API including information on jobs lost and homes lost. If this API is deployed and improved, there is not just a broad future for **place.it** but a robust and broad future for dozens, perhaps hundreds of applications like it. This, in turn, could result in more socially conscious communities and cities being developed.

![API Documentation](https://i.imgur.com/kq77Vfy.png)

___This single API could lead to hundreds of civic conscious applications like **place.it**___
