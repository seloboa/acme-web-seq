const html = require('html-template-tag');

module.exports = (pages, contents) => html`<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <h1>Acme Web</h1>
  <div>
  ${pages.map(page =>html`
  <h2>${page.name}</h2>
  `)}
  </div>
  <div>
${contents.map(content => html`
  <div>
  <p>${content.name}</p>
  <p>${content.body}</p>
  </div>`
  )}
  </div>
</body>
</html>`;
