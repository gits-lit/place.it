# place.it

## Goals

Sometimes the need to build new structures is unavoidable. At UC Santa Cruz, the demand for student housing has pressured the school to begin building on forests that have been preserved for decades which has led to many student protests. However, at the end of the day, the desire to build more housing won't go away even if the protests are successful. In a bustling city like Los Angeles, these pressures are even more acute and our team wanted to build a more data-driven application to determine the most optimal place to build, keeping environmental friendliness, property value, and other metrics in mind. 

Also, cities skylines

## Summary
**place.it** allows Los Angeles's city planners, architects, and everyday citizens understand the impact of the buildings that are 

![](Add an image)

## How It's Built

**place.it** utilizes multiple datasets provided by the city of Los Angeles in order to rate the impact of constructing new buildings. 

### Calculating the Rating

— Insert Image of the Rating and the Stats Here —

We calculate an overall rating based on 6 key aspects of a building — its estimated carbon emissions, land valuation / market rate, parking requirements, crime rate, impact on trees, and transit score.

#### Estimated Carbon Emissions

This was calculated through a linear regression machine learning model, as @Nir will explain in depth.

![Juypter Notebook](picture of a jupyter notebook or something)

___Machine learning was done on Jupyter Notebooks using scikit-learn.___


#### Land Valuation

This was calculated using the Estated API, as @Catherine will explain the technical challenges involved in this.

#### Parking Requirements

This is determined by the specifications from the [County of LA](https://library.municode.com/ca/los_angeles_county/codes/code_of_ordinances?nodeId=TIT22PLZO_DIV6DEST_CH22.112PA). Los Angeles County mandates a certain amount of parking spots based on a building's use and size, and as such we wanted to calculate the number of parking spots required. More parking spots causes more pollution and traffic in Los Angeles, and a high mandatory parking amount generally results in a lower rating.

#### Crime Rate

When placing a building, it's good to know the safety of the area you're building in. Using the [SpotCrime](https://spotcrime.com) database, we're able to see the number of crimes committed in the last month for the building's location, allowing us to assess the location and rate it accordingly.

#### Impact on Trees

Trees are incredibly important — [Support Planting Trees!](https://teamtrees.org) — and as such it is important to note how many trees your proposed building will destroy. We hope by providing this number, the user can pledge to replant the trees or consider a more eco-friendly location. We determined this rating by @Catherine fill this out ty.

#### Transit Score

Public transportation, walking, and biking are incredibly important to any kind of building, as it aids the users of the building in accessing the location. Leveraging the [Walk Score API](https://walkscore.com), we are able to score any location to determine a transit rating for the given location.

### Displaying the Data

Of course, such beautiful data needs to be displayed in a beautiful manner. Our UI was designed with [Figma](https://www.figma.com/file/u1RcjhQK1W572SM5c3fONY/La-Hacks-2020?node-id=0%3A1) and developed with [React](https://reactjs.org/). We used [Redux](https://redux.js.org/) to manage application state, which determines the look of elements on the website based on the user's interactions. With simple GET requests to the complex backend, we updated our element's states and populated our website with plenty of data. To generate the map, we utilized the [Mapbox GL JS](https://www.mapbox.com/) library and threw on [three.js](https://threejs.org/) to generate 3D buildings. Finally, to tie the whole application together and really make it look beautiful, we used [Ant Design](https://ant.design/) as our UI framework, [less](http://lesscss.org/) as our CSS preprocessor, and [GSAP](https://greensock.com/gsap/) as our animation library.

![Figma](https://user-images.githubusercontent.com/32719891/77843714-d00e2180-7154-11ea-9189-166408094a48.png)

___ <div align="center>Our application's UI was designed collaboratively utilizing Figma </div> ___

Our application currently sits on the web using [Netlify](https://www.netlify.com/) and our server is deployed with [Heroku](https://www.heroku.com/). Feel free to access our website at any time and if something's not working, leave a comment on this Devpost!

## Challenges

## Accomplishments

## Key Takeaways

## The Future

Moving onward, we of course aim to make our application robust
