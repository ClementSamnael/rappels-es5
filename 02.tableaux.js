var lg = console.log;

var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(ville){
    lg(ville)
});

var lettreADansTouteslesVilles =  villes.every(function(ville){
   return(ville.includes('a'));
});
lg('lettreADansTouteslesVilles = ' + lettreADansTouteslesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(function(ville){
    return(ville.includes('-'));
});
lg('auMoinsUneVilleAvecUnTiret = ' + auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(function(ville){
        return((!ville.includes('-') && !ville.includes(' ')));
});
lg('villesSansTiretSansEspace = ' + villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function(ville){
    return ville.endsWith('s');
}).map(function(ville){
    return ville.toUpperCase();
});
lg('villesMajusculeSeTerminantParS = ' + villesMajusculeSeTerminantParS)