## [Advanced React Tutorials Playlist](https://www.youtube.com/playlist?list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz) by techsith

## [React Fragments Tutorial](https://www.youtube.com/watch?v=UMo9_W8lPbs&list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz)

(See commit 1)
Fragment elements basically are like divs except that they only stay in JSX, they don't render to HTML (invisible).
<br/>

## [React Interview Questions and answers | Top Commonly Asked | Part -1 (16 min)](https://www.youtube.com/watch?v=uRkS5Dqf8ic&list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz&index=21)

### 1. Name lifecycle methods and their purpose.
note: "react hooks" have a completely different way to handle lifecycle matters.
The current lifecycle methods for React 16.4+ are...
There are two renders: the initial render and the rerender.

<strong>initial render lifecycle:</strong>
-> constructor
-> static getDerivedStateFromProps (static prevents you from setting state; this method is rarely used)
-> render (can't set state here either)
-> componentDidMount

<strong>rerender lifecycle:</strong>
-> static getDerivedStateFromProps
-> shouldComponentUpdate
-> render
-> getSnapshotBeforeUpdate
-> componentDidUpdate
<br/>

### 2. Why do we use arrow functions in React
arrows functions allow us to set state in React. Also it allows us to not call a method right away on click.

### 3. How to prevent components from Rerendering?
3 ways.
-> shouldComponentUpdate()
-> extend React.PureComponent (for "class" components)
-> React.meme (for "functional/presentational" components)

## [React Interview Questions and answers 2019 | Best Commonly Asked | Part -2](https://www.youtube.com/watch?v=4OzC5InCkLY&list=PL7pEw9n3GkoUZX3e9lBbmQqdCpgAWYooz&index=22)


