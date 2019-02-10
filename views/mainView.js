const html = require('html-template-tag');

module.exports = (pages, contents, cur) => html`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Home</title>
      <link rel="stylesheet" href="/style.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <h1>Acme Web</h1>
      <h2>${pages.find(page => page.id === parseInt(cur)).name}</h2>
      <ul class="nav nav-tabs">
        ${pages.map(
          page => html`
            <li class="nav-item">
              <a
                href="/pages/${page.id}"
                class="nav-link"
                id="${page.id === parseInt(cur) ? 'cur' : ''}"
                >${page.name}</a
              >
            </li>
          `
        )}
      </ul>
      <div>
        ${contents.map(
          content => html`
            <ul class="list-group">
              <li class="list-group-item">
                ${content.name}<br />${content.body}
              </li>
            </ul>
          `
        )}
      </div>
    </body>
  </html>
`;
