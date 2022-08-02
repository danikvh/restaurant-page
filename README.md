# restaurant-page
Odin's Project: Restaurant Page

- Practice of DOM manipulation by dynamically rendering a simple restaurant homepage.
- Use of webpack
- Quick tip: the node_modules folder can get really big. It is customary to add a .gitignore file to your project so that you don’t have to sync the contents of node_modules to github. The dependencies that are stored there can be installed from your package.json by running npm install, so you don’t need to sync them.
- Deploying a subfolder to GitHub Pages: After running webpack the full bundled version of your site is available in the dist folder, but GH pages is looking for an index.html in the root directory of your project. https://gist.github.com/cobyism/4730490