# ag-Grid Theme Customisation Examples

The project in this repository showcases how the ag-Grid built-in themes can be customized by overriding Sass variables. 
An up-to-date table with the variable default values and their function is available at: http://www.ag-grid.com/javascript-grid-styling/#customizing-sass-variables


## Usage

- Clone the project
- (optional) to set a specific grid version across all demo projects, run: `node set-version.js VERSION` where VERSION is a semver string e.g. 32.2.1
- Choose a project:
  - `src/vanilla`: using the Sass API through the command line Sass compiler
  - `src/vanilla-webpack`: using the Sass API through the Webpack and sass-loader
  - `src/angular`: Angular CLI example
  - `src/react`: create-react-app example
  - `src/vue`: Vue example
  - `src/legacy/*`: Various examples using the Legacy Sass API (deprecated in v28)
- In the project folder, run `npm install && npm start`
- View the project in your browser at [http://localhost:8080/](http://localhost:8080/).
- Open the `styles.scss` file to see how the theme has been customised.
