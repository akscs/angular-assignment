## Engineer.ai Angular assignment

Using Angular 2+ and any frameworks/open source libraries required, create an application that
does the following:

1. Periodically (every 10 seconds) poll for new posts from this API            https://hn.algolia.com/api/v1/search_by_date?tags=story via a GET request.
2. Display the title, url, created_at, and author of each post in a table.
3. Upon selecting a row in the table, a modal should appear containing the raw JSON data of post. This modal should support dismissal by clicking outside of the modal as well as upon clicking a close button.
4. Support the ability to filter/search the table by title.

### Technology Stack Used

* Angular 4.5
* TypeScript 3.4
* Karma/Jasmine
* Codelyzer & TSLint
* SASS/SCSS
* Webpack 3

To run this project, do `npm install && npm start`

### Commands

* `npm start` - start the development webpack server (access via http://localhost:3000/)
* `npm test` - run the project unit tests (*.spec.ts files)
* `npm run coverage` - run the project unit tests one time and print out a coverage report, generated under **/coverage/index.html**
* `npm run lint` - run the project linting (will be run every time `npm test` is run)
* `npm run build` - generate a production build for the project, which will be inserted into dist/
* `npm run server` - run a live-server instance off of the **dist/** directory (generated from the `build` command)