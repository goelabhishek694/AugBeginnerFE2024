- Getting Data from TMDB API
- Populating movies in Movies Page
- Creating the watchlist
- Features of Watchlist
- Local Storage for keeping data persistent

## Replacing dummy entries with data from TMDB API

#### Que We can't use the static images  and to drive out our application so we need a server that can give use realtime data.

#### Solution : 
In the above use case we need to talk to servers that just send data in a given format`. 

let's understand how it's done with the help of an analogy
#### Analogy
Imagine you're in charge of creating certificates for a course completion. You have a template for the certificate design that includes placeholders for the student's name, course title, and completion date. This template is like React components. React is like your design tool, allowing you to structure and design the certificate layout.

Now, to fill in the actual data and generate the final certificate, you need information about the student who completed the course. This is where APIs come in. APIs act as messengers, fetching the necessary data from a database or external source. In our analogy, the API is gets the information about the student from various sources and brings it to you.

So, to create the final certificate:

1. **React Components (Template)**: You start with React components, just like you start with a certificate template. These components provide the structure and layout for the certificate.
    
2. **API Calls (Data Gathering)**: Next, you make API calls to gather the specific data needed to fill in the placeholders on the certificate. This is akin to collecting information about the student's name, course details, and completion date from different sources.
    
3. **Data Integration (Data into Template)**: Once the API returns the necessary data, you integrate it into the React components. This process involves replacing the placeholders in the template with the actual student data, similar to how you fill in the student's name, course details, and completion date onto the certificate.
    
4. **Final UI (Final Certificate)**: Finally, with the data integrated into the React components, you have a fully populated certificate – your final UI. This certificate is ready to be presented to the student, showcasing their achievement.
    

In summary, React provides the framework for designing the certificate layout, while APIs fetch the relevant data to populate the certificate, resulting in a seamless process to generate the final UI, just like creating a personalized certificate for each course completion

Now ,


To use the TMDB (The Movie Database) API in a React app to get upcoming movies data with images, follow these steps:

Create a TMDB Account and Get an API Key:

Go to TMDB and sign up for an account.
Navigate to your account settings and find the API section.
Create an API key which you will use to make requests to TMDB.

Step by Step Screenshots are added ahead

1. Go to Login if you alreay have an account or join TMBD if you are  a new user

<img src='https://i.ibb.co/tB7nQcZ/Screenshot-2024-05-14-at-8-30-59-PM.png'/>

2. After Signing up go to profile settings 

<img src='https://i.ibb.co/CBZy4nz/Screenshot-2024-05-14-at-9-00-26-PM.png'/>

3. Go to API option and genarate a API Key, My key is already generated .


<img src='https://i.ibb.co/JsbgccQ/Screenshot-2024-05-14-at-9-00-41-PM.png'/>

4. Now go to API Reference and get started 
<img src='https://i.ibb.co/nC8MS1W/Screenshot-2024-05-14-at-8-34-53-PM.png'/>

5. you will get movies options where you will get different options, I am going for trending movies

<img src='https://i.ibb.co/HVxS3g3/Screenshot-2024-05-14-at-8-35-32-PM.png'/>


You can play around in this section and do different stuff with movie Data 


but our main goal is to fetch the data of upcoming movie from the API.


### Structure of data receieved from TMDB API

We will be using this url to get list of movies 
`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`


 - make sure to add your API key which you generated in the api key field in the url

it will return the data in the form of  an array then that will contain lot of properties that populates 

when you will fetch the data you will get a list of 20 movies like this .
![image](https://hackmd.io/_uploads/BksttvzyR.png)
* Here's `backdrop_path` property that is responsible for helping you get the poster image
* title will give you title of the movie
* adult property will tell you if the movie is only for adult or not 

In short it is up to you how you want to use this data


## Populating Banner and Movies   from TMDB
let's  understand the how we can replace the dummy data in Banner.jsx and Movies.jsx

* Banner.jsx :  we need to replace the dummy image url and replace that with some realtime url of a movies

 **Adding dynamic Poster to Banner**
 
let's see how it is done
* install axios
```
npm i axios
```
* import axios in Banner component
* We will next use an useEffect for fetching the data
* use the fetched data populate our banner component



`Banner.jsx`
```jsx
\\ create a state variable to hold the image and title to hold title
const [bannerImage , setBannerImage] = useState("https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68");
const [title, setTitle]=useState("Placeholder title")

 useEffect(() => {
    console.log("use effect fetched data");
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`
      )
      .then(function (res) {
        //           we will get the list of all the films
        console.log("Films", res.data.results);
        //           for the sake of our example we will be using the first object that represents first movie
        const firstMovie = res.data.results[0];
        const firstMovieTitle = firstMovie.title;
        const firstMoviePoster = firstMovie["backdrop_path"];
        setTitle(firstMovieTitle);

        setBannerImage(
          `https://image.tmdb.org/t/p/original/${firstMoviePoster}`
        );
      });
  }, []);

```
Now we have fetched the required banner image. Let's update our Banner component to support this
```jsx=
return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          `url(${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        {title}
      </div>
    </div>
  );
}
```
update imports
```jsx=
import React, { useState, useEffect } from "react";
```


`Movies.jsx` :  we need to replace the dummy image url and replace that with some realtime url of a movies
 
```
   const [movies, setMovies] = useState([
        {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 1"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 2"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 3"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 4"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 5"},
         
     ]);
``` 

now let's talk how we can leverage TMDB API to get that data

We will be using axios to get the data from the same  url  that is given by TMDB->

`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`

let's see how it is done 


* import axios in movies component
* We will next use an useEffect for fetching the data
* set the movies from the incoming data 

`movies.jsx`
```jsx
 const [movies, setMovies] = useState([]);

 useEffect(() => {
    console.log("use effect fetched data");
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, []);
```

`moviecard.jsx`
```jsx!
 <div
            className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`,
            }}
        >
            <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
                {movieObj.title}
            </div>
        </div>
```
### Modify the pagination to work with data coming 
Let's keep the pagination in sync with movies for that 
we already have pageNumber state variable . 
Now we can use this to update the list of movies as we change the page number.

**Solution**: Update the useEffect to depend upon pageNo state variable-> add it to dependency array and the url

`movies.jsx`
```
useEffect(() => {
        console.log("use effect fetched data");
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
            )
            .then(function (res) {
                console.log(res.data.results);
                setMovies(res.data.results);
            });
    }, [pageNo]);
```


Now you will see that our project now looks somewhat like this after getting all the movies  with the Banner

<img src='https://i.ibb.co/bKqtPmD/Screenshot-2024-05-14-at-9-29-41-PM.png'>


<img src='https://i.ibb.co/17RhCRy/Screenshot-2024-05-14-at-9-30-54-PM.png '>


## Add/remove movies from watch List



In our current project, we've already implemented features like pagination and banners, showcasing various movies. Now, we're at the stage where we want to provide users with the ability to take actions, such as adding a movie to their watchlist. 

Before starting with Watch List component we should make sure that adding or removal of movies feature 

![hover](https://hackmd.io/_uploads/H1Le2OzkR.jpg)

1. Add to Watch list : by default no movies will be added to watch list and 😍 is visble on top righ and as  you click on that it should add the move to watclist and update it with cross ![image](https://hackmd.io/_uploads/H1E32dz1A.png)



2. remove movie from watch List: exact opposite of the above feature should happen  


### Add and remove from watch list

#### Pseudocode

We will start by initializing this as an empty array. One by one, we will add the movie object , and then we will retrieve them to show list of added movies

```javascript=
function Movies() {
    const [watchList, setWatchList] = useState([]);
}
```

Now, how can we implement the process of clicking on a movie  and store it in the watchlist? Do you have any suggestions?

One approach is to use filtering based on the movie's ID. To begin, we will add a button to our movie card. Inside the card div, we will create another div to accommodate this button.

#### Pseudocode

```jsx=
<div className="">
    😀
</div>

```
This div is intended for the button. For now, we're just adding an emoji. Let's proceed to style it.


#### Pseudocode

```jsx=
<div className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
    😀
</div>
    
```
In CSS, the Tailwind properties would translate roughly as follows:
* m-4 applies a margin of 1rem (since the default Tailwind scale is 0.25rem per unit) to all sides.
* flex sets the display to flex, enabling flexbox layout.
* justify-center centers the flex items along the main axis (horizontally).
* items-center centers the flex items along the cross axis (vertically).
* h-8 and w-8 set both the height and width to 2rem (8 units * 0.25rem).
* rounded-lg applies a moderate border radius, making the edges rounded.
* bg-gray-900/60 sets the background color to a very dark gray with 60% opacity.

 


If a movie has not been added to the watchlist, you should display an emoji. If it's already on the watchlist, you should display a cross sign. As of now, the watchlist is empty.

The purpose of adding a movie to the watchlist is that when we click on the emoji, a function should be triggered to provide us  the movie we've clicked on.

#### Pseudocode

```javascript=
// watchList handlers

const addToWatchList = (movieObj) => {
        const updatedWatchlist = [...watchList, movieObj];
        setWatchList(updatedWatchlist);
        
    };

```
Let's explore how the spread operator functions. 
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/497/original/Screenshot_2023-09-20_171534.png?1695210341)


Now, let's shift our focus back to our div. We are simply going to invoke this.

What should be passed as the argument in this context?
The movie ID should be passed as the argument here.

#### Pseudocode

```jsx=

    <div onClick={() => addToWatchList(movieObj)}>
        😀 
    </div>


```

We have wrapped the addToWatchList(movieObj) function call in an arrow function to ensure it's triggered correctly when clicked. So, when you click on this emoji, it will trigger a click event that, in turn, activates the "addToWatchList" function and retrieves the specific   movie.

To demonstrate how the spread operator works, we will create a "test.js" file and write the code accordingly.

#### Pseudocode

```javascript=
let arr = [1, 2, 3, 4, 5];
let updatedArr = [...arr, 6];
console.log(updatedArr);

```

Next, we will examine the functionality of a cross button for removing items from the watchlist, involving conditional code.

#### Pseudocode

```jsx
function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObject.id) {
        return true; // chnage button to cross
      }
    }
    return false; // added to my WatchList
  }



    {doesContain()==false ? (
        <div onClick={() => addToWatchList(movie.id)}>
            😀
        </div>
    ) : (
        <div>
            ❌
        </div>
    )}


```

If the movie ID is not present in my watchlist, then for those movies, display the "Add to Watchlist" button. Otherwise, show the "Remove from Watchlist" button.


At a high level, here are the steps we've taken:

* Added the "Add to Watchlist" button.
* When clicked,  that movie is added to the watchlist array.
* Created the onClick event and the addToWatchList function.
* Now, we also need a feature to remove movies from the watchlist.
* To achieve this, we will create the removeFromWatchList function, which will filter out the specified movie from the watchlist.


Now, we can proceed to create the "Remove from Watchlist" function.

#### Pseudocode

```javascript=
// watchList handlers

 const addToWatchList = (movieObj) => {
        let updatedWatchlist = [...watchList, movieObj];
        setWatchList(updatedWatchlist);
        
    };
    const removeFromWatchList = (movieObj) => {
        let filtredMovies = watchList.filter((movie) => {
            return movie.id != movieObj.id
        })
        setWatchList(filtredMovies)
    };

```

`Pass the props so that it could be used in movieCard can use them`
```jsx
// movie.jsx
<MovieCard key={movieObj.id}
                        addToWatchList={addToWatchList}
                        removeFromWatchList={removeFromWatchList}
                        watchList={watchList}
                        movieObj={movieObj} />
```

Now, let's write the code that allows us to remove a movie from our watchlist when we click on the cross button.

#### Pseudocode

```jsx=
{doesContain() === false ? (
                <div
                    onClick={() => addToWatchList(movieObj)}
                    className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
                >
                    &#128525;
                </div>
            ) : (<div onClick={() => removeFromWatchList(movieObj)} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
                &#10060;
                {/* // code for cross */}
            </div>

            )}
```

`Observation` : We see our application is still working as we are able to see list of movies but page number is reset to 1 and watch List is removed . 

`Question` : Why is this happening. Why are we facing the above issue ??

`Answer` : As react is used to create SPA and essentially when you reload the page all of the application is initialized from scratch that means all of the saved movies and pagination will be lost. Let's think of solution . 

`solution`: In this case we will again use the power of local storage to save the watch list , same can also be done for pagination 