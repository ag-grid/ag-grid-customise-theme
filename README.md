# ag-Grid Theme Customisation Examples

The project in this repository showcases how the ag-Grid built-in themes can be customized by overriding Sass variables. 
An up-to-date table with the variable default values and their function is available at: http://www.ag-grid.com/javascript-grid-styling/#customizing-sass-variables


## Usage

- Clone the project
- Choose a project:
  - `src/vanilla`: customising a theme in vanilla JavaScript, including an example of changing the icon font.
  - `src/vanilla-css-variables`: an example of setting color parameters from CSS variables
  - `src/vanilla-extending-base`: an example of a custom theme that directly extends the base theme
  - `src/vanilla-material-design-icons`: customising the material theme in vanilla JavaScript to use Material Design Icons.
  - `src/vanilla-svg-icons`: an example of using SVG images for icons
  - `src/angular`: Angular CLI example
  - `src/react`: create-react-app example
  - `src/vue`: Vue example
  - v22 compatibility layer examples
    - `src/legacy/vanilla`: Vanilla JS
    - `src/legacy/angular`: Angular CLI
    - `src/legacy/v22-provided-themes`: Demonstration of how to rebuild the deprecated Fresh, Dark, Blue and Bootstrap themes as custom themes on top of ag-theme-base.
- In the project folder, run `npm install && npm start`
- View the project in your browser at [http://localhost:8080/](http://localhost:8080/).
- Open the `styles.scss` file to see how the theme has been customised.
