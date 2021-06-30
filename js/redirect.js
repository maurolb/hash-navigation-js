function redirect ({app, pages}) {
    
    document.querySelectorAll('.nav-link').forEach(elem => {
        elem.addEventListener('click', (e) => {
            const {hash} = e.target;
            if (hash){
                window.location = hash;
                content({app, pages});
          }
        });
      });
}