function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER
         let nomJournal = document.getElementById("nom-journal");
         let phraseAccroche = document.getElementById("phrase-accroche");
        nomJournal.textContent = "NBA Now";
         phraseAccroche.textContent = "Analyses, joueurs, dynamiques de saison";

      // TODO 2: REMPLIR LA NAVIGATION
     let themesNav = document.getElementById("themes-nav");

journal.topics.forEach((topic) => {
    themesNav.insertAdjacentHTML("beforeend", topic.nom + " ");
});



      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL   
    let articlePrincipal = document.getElementById("article-principal");

let principal = `
    <div class="container-full">
        <img src="${journal.feature.imageHero}" id="hero-image" alt="${journal.feature.titre}">
        <h2>${journal.feature.titre}</h2>
        <p id="hero-description">${journal.feature.summary}</p>
        <p class="hero-body">${journal.feature.corps}</p>
        <p class="hero-author">Par ${journal.feature.auteur} | ${journal.feature.date}</p>
    </div>
`;
articlePrincipal.innerHTML = principal;


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
   let articlesGrid = document.getElementById("articles-grid");

journal.stories.forEach((story) => {
    let articleCard = `
        <div class="article-card">
            <img src="${story.image}" alt="${story.titre}" class="article-image">
            <h3 class="article-title">${story.titre}</h3>
            <p class="article-summary">${story.description}</p>
            <p class="article-meta"> ${story.auteur} ${story.date}</p>
        </div>
    `;

    articlesGrid.insertAdjacentHTML("beforeend", articleCard);
});



      // TODO 5: REMPLIR LES THEMES
let listeThemes = document.getElementById("themes-list");

journal.topics.forEach((theme) => {
    let themeHTML = `
        <div class="theme-card">
            <h3 class="theme-title">${theme.icon} ${theme.nom}</h3>
            <p class="theme-description">${theme.description}</p>
        </div>
    `;
   listeThemes.insertAdjacentHTML("beforeend", themeHTML);
});


      // TODO 6: REMPLIR LES AUTEURS
let authorsList = document.getElementById("authors-list");

journal.contributors.forEach((auteur) => {
    let auteurHTML = `
        <div class="author-card">
            <img src="${auteur.image}" alt="${auteur.prenom}" class="author-image">
            <h3 class="author-name">${auteur.prenom} ${auteur.nom}</h3>
            <p class="author-role">${auteur.typeExperience}</p>
            <p class="author-description">${auteur.presentation}</p>
        </div>
    `;
    authorsList.insertAdjacentHTML("beforeend", auteurHTML);
});


      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION
      let boutton=document.getElementById('call-to-action')
   console.log(boutton);
   
      let btn=`<div class= container>
      <p>Vous êtes encore là ? Notre site vous attend, et il s’ennuie tout seul…</p>
      <p class= read-btn>${journal.cta.label}</p>
      </div>`
           boutton.insertAdjacentHTML("beforeend",btn)


      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
