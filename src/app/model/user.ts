export class User {
   // private userId: number;
    private nom: string;
    private prenom: string;
    private username: string;
    private email: string;
    private password: string;
    private phone: string;
    private photo: string;
    private nomType: string;

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
