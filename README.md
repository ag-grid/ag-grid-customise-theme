# ag-Grid Theme Customization Example

The project in this repository showcases how the ag-Grid built-in themes can be customized by overriding Sass variables. 
An up-to-date table with the variable default values and their function is available [at the bottom of the ag-Grid styling page](https://www.ag-grid.com/javascript-grid-styling/).

## Usage

- Clone the project
- run `npm install`
- start with `npm start`
- Examine the `src/styles.scss` file for details

## Common How-Tos

### Change Cell Horizontal Padding

In the original `ag-*` themes, the cells had more compact horizontal padding. This has been changed in the current implementation - you can change that by modifying the `$cell-horizontal-padding` variable value to `4`.


### Change Icon Colors

- To change the colors of the icons used, you can modify the `$icon-color` variable. 
- The `$primary-color` affects the color of the icons in the selected tabs in the column menu.
- The `$accent-color` changes the color of the checked checkboxes

### Change Font Size

- Change the `$font-size` variable value.
