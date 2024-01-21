export class User {
    private userId: number;
    private nom: string;
    private prenom: string;
    private username: string;
    private email: string;
    private password: string;
    private phone: string;
    private photo: Uint32Array;
    private creationDate: Date ;
    private modificationDate: Date;
    private loginDate: Date;
    private logoutDate: Date;

    constructor(id: number, nom: string, prenom: string,username :string,email:string,
         password : string, phone: string, photo:Uint32Array ,creationDate: Date, modificationDate: Date,
         loginDate : Date, logoutDate: Date)
      {
        this.userId = id;
        this.nom=nom;
        this.prenom=prenom;
        this.username = username;
        this.email=email;
        this.password = password;
        this.phone=phone;
        this.photo = photo;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
        this.loginDate = loginDate;
        this.logoutDate = logoutDate;
    }

}
