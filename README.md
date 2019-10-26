## [Advanced React Tutorials Playlist](https://www.youtube.com/playlist?list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz) by techsith

## [React Fragments Tutorial](https://www.youtube.com/watch?v=UMo9_W8lPbs&list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz)

(See commit 1)<br/>
Fragment elements basically are like divs except that they only stay in JSX, they don't render to HTML (invisible).<br/>

## [React Interview Questions and answers | Top Commonly Asked | Part -1](https://www.youtube.com/watch?v=uRkS5Dqf8ic&list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz&index=21) (16 min)

### 1. Name lifecycle methods and their purpose.
note: "react hooks" have a completely different way to handle lifecycle matters.<br/>
The current lifecycle methods for React 16.4+ are...<br/>
There are two renders: the initial render and the rerender.<br/>

<strong>initial render lifecycle:</strong><br/>
-> constructor<br/>
-> static getDerivedStateFromProps (static prevents you from setting state; this method is rarely used)<br/>
-> render (can't set state here either)<br/>
-> componentDidMount<br/>

<strong>rerender lifecycle:</strong><br/>
-> static getDerivedStateFromProps<br/>
-> shouldComponentUpdate<br/>
-> render<br/>
-> getSnapshotBeforeUpdate<br/>
-> componentDidUpdate<br/>
<br/>

### 2. Why do we use arrow functions in React
arrows functions allow us to set state in React.<br/>
Also it allows us to not call a method right away on click.

### 3. How to prevent components from Rerendering?
3 ways.<br/>
-> shouldComponentUpdate()<br/>
-> extend React.PureComponent (for "class" components)<br/>
-> React.meme (for "functional/presentational" components)<br/>

## [React Interview Questions and answers 2019 | Best Commonly Asked | Part -2](https://www.youtube.com/watch?v=4OzC5InCkLY&list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz&index=22) (13 min)

### 1. Explain Error Boundaries?
<ErrorBoundaryComp> static getDerivedStateFromError. componentDidCatch. Helps catch errors if a component is not going to render

### 2. Best Lifecycle Method for making API calls?
componentDidMount, when the component is completely rendered. make sures that your DOM is ready.

### 3. Name some of the patterns that React uses.
Context API pattern (use it when we pass props into a deeply nested component, with this pattern you access props via context API; you wrap your component with a special tag, provider and consumer component, provider accepts the props, and consumer is anywhere you want to use those props).<br/>
Render props: instead of passing a component as a component, you pass it as a function.
Presentation component pattern. I

### 4. Why would you use React in your project?
The decision has to be made based on the project itself. If React is planning a huge update within the year, don't use it. If your developers are Javascript saavy, use Javascript.

### 5. What is CSS in JS pattern?
Because React uses all JS, you can pass CSS as all JS objects.

## [React Interview Questions and answers 2019 | Best Commonly Asked | Part -3](https://www.youtube.com/watch?v=yb_w7jg_veQ&list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz&index=23) (15 min)

### 1. Why can't you update state directly without setState?
setState will trigger a rerender.

### 2. How many ways can you conditionally render in React?
If statement, and statement, conditional operator. 

### 3. Why would you use fragments in your projects.
You can render multiple children. When you wrap the children in a div it creates too many tags which creates errors with the CSS.

### 4. How to do code splitting in React?
If you have a large project, you might not want to import everything at once. For this, React introduced dynamic import and lady loading. 

### 5. What are some alternatives to Redux?
mobX, apollo client + graphQL, RxJS

### 6. What is redux middleware?
First sends the post request that goes to the server, and when a positive response is coming back, update the local store.

### 7. What is the difference between redux-saga and redux-thunk.
These are both middleware. I don't use these two technologies currently.