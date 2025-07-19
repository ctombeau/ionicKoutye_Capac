import { Adresse } from "./adresse.model";
import { ImageAppartement } from "./image-appartement.model";
import { User } from "./user";
import { VideoAppartement } from "./video-appartement.model";


export class Appartement{
    //id : number;
    description: string;
    prix: number;
    devise: string;
    adresse : Adresse;
    user : User;
    imgApp : ImageAppartement;
    videoApp: VideoAppartement;
    
    constructor(description: string, prix: number, devise: string,adresse:Adresse, user:User,
        imagApp:ImageAppartement, videoApp:VideoAppartement){
        //this.id = id;
        this.description = description;
        this.prix=prix;
        this.devise=devise;
        this.adresse=adresse;
        this.user=user;
        this.imgApp=imagApp;
        this.videoApp=videoApp;
    }

}