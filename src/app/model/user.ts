export class User {
   // private userId: number;
    public nom: string;
    public prenom: string;
    public username: string;
    public email: string;
    public password: string;
    public phone: string;
    public photo: string;
    public nomType: string;

    constructor(nom: string, prenom: string, username: string, 
        email: string, password: string, photo: string, phone: string, nomType: string)
    {
        //this.id =id;
        this.nom = nom;
        this.prenom = prenom;
        this.username = username;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.phone = phone;
        this.nomType = nomType;
    }

}
