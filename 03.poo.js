var lg = console.log;

function Personne(nom, prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function (){
        return this.nom + this.prenom + this.pseudo;
    }
}

var jules = new Personne('LEMAIRE', 'Jules', 'jules77');
var paul = new Personne('LEMAIRE', 'Paul', 'paul44');

var afficherPersonne = function(Personne){
    lg(Personne.nom);
    lg(Personne.prenom);
    lg(Personne.pseudo);
    lg(Personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';
afficherPersonne(jules);

//Valeur undefined pra l'objet jules
jules.age;
lg(jules.age);

Personne.prototype.age = 'NON RENSEIGNE';
lg(jules.age);

jules.age = 30;
lg(jules.age);

Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0) + this.nom.charAt(0);
};
lg(jules.getInitiales());

var robert = {
    prenom : 'Robert',
    nom : 'LEPREFET',
    pseudo : 'robert77',
    getNomComplet : function(){
       return this.nom + this.prenom + this.pseudo;
    }
};

afficherPersonne(robert);

function Client(nom, prenom,pseudo, numeorClient){
    Personne.call(this, nom, prenom, pseudo);
    this.numeorClient = numeorClient;
    this.getInfos = function(){
        return this.numeorClient + this.nom + this.prenom;
    }
}

var steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');
afficherPersonne(steve);

lg(steve.numeorClient);
lg(steve.getInfos());