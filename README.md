# sfs-react

View live at: [http://sfs-react.vercel.app/](http://sfs-react.vercel.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed via Vercel.

## Running Locally

Node 14 recommended. Create React App scripts have *not* been modified, so this project builds and runs the same as other apps bootstrapped with CRA.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## High Level Design
- Written in React w/ hooks
- [styled-components](https://styled-components.com/) for CSS
- Uses native `fetch` to get JSON data
- [big.js](https://github.com/MikeMcl/big.js) for performant, arbitrary-precision decimal arithmetic
- Totals calculated on state changes (including after initial data load)
- Users can:
  - add or remove rows of data
  - total a subset of that data (by selecting only the desired rows with checkboxes)
- precommit linting w/ husky


## Next steps
- add tests. Can include unit, integration, or end-to-end (for example with cypress) tests
- add a node server, implement server-side rendering for a performance improvement
- improve memory management: for example, don't store a Big.js instance in React state
- improve UI design
- general refactoring
- add stricter linting
