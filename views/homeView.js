const html = require('html-template-tag');

module.exports = (content) => html`<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div>
  <h1>Home</h1>
  </div>
  <div>
  <p>${content.name}</p>
  <p>${content.body}</p>
  </div>
</body>
</html>`;
