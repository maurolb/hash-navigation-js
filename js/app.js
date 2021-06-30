window.onload = function() {

    const hash = (window.location.hash);
    if(!hash) {
        window.location = '#home';
    }

    // elementos
    const elements = {
       app: document.getElementById('app'),
       pages: {
           home: homePage,
           about: aboutPage,
           products: productsPage,
           contact: contactPage
       }
    };


    // iniciolizadores
    navbar(elements);
    content(elements);
    
    // metodos
    
    
    // listeners
    redirect(elements);


    // api



    console.log('cargó el sitio');
}