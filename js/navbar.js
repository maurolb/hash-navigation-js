function navbar ({app}) {

    if(!app) return;

    const links = [
        { hash: '#home', title: 'home'},
        { hash: '#about', title: 'about'},
        { hash: '#products', title: 'products'},
        { hash: '#contact', title: 'contact'}
    ];

    const linktTemplates = links.map(({hash, title}) => 
    ` <li class="nav-item">
        <a class="nav-link" href="${hash}">${title.charAt(0).toUpperCase()}${title.slice(1)}</a>
      </li>`).join('')

    const template = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SPA</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          ${linktTemplates}
        </ul>   
      </div>
    </div>
    </nav>`

    const header = document.createElement('header');
    header.innerHTML = template;
    app.appendChild(header);

}