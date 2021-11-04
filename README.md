1. CD into FauxFreshlyApi, create the db, migrate and seed. Then start the server
2. Inside of pages/api/weekly-menus.js write a graphql query to return all of the weekly menus. (the query is called getWeeklyMenus and it only had 1 field called date)
3. In pages/index.js import your graqhql query and then on line 11 write a request (using the client of your choice - Axios, Urql, Fetch, Ect...)
4. With the returnsed
