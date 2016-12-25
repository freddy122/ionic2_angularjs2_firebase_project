import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController, AlertController,ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  personnels: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,af: AngularFire,public actionSheetCtrl: ActionSheetController) {
		this.personnels = af.database.list('/personnels');
		
  }
  addPersonnel(){
	let prompt = this.alertCtrl.create({
    title: 'Information personnel',
    message: "Veuillez saisir l'information concernant le personnel",
    inputs: [
      {
        name: 'nom',
        placeholder: 'Nom'
      },
	  {
        name: 'prenom',
        placeholder: 'Prenom'
      },
	  {
        name: 'adresse',
        placeholder: 'Adresse'
      },
	  {
        name: 'datenaissance',
        placeholder: 'Date de naissance',
		type: 'date'
      },
    ],
    buttons: [
      {
        text: 'Annuler',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Enregistrer',
        handler: data => {
          this.personnels.push({
            nom: data.nom,
			prenom: data.prenom,
			date_naissance: data.datenaissance,
			adresse: data.adresse
          });
        }
      }
    ]
	});
	prompt.present();
  }
  
  voirPersonnel(personnelId, personnelNom,personnelPrenom,personnelDatenaiss,personnelAdresse) {
	let actionSheet = this.actionSheetCtrl.create({
	title: 'Tu vas faire quoi',
	buttons: [
	  {
		text: 'Supprimer cette personnel',
		role: 'destructive',
		handler: () => {
		  this.supprimerPersonnel(personnelId);
		}
	  },{
		text: 'Modifier',
		handler: () => {
		  this.personnelModif(personnelId,personnelNom,personnelPrenom,personnelDatenaiss,personnelAdresse);
		}
	  },{
		text: 'Annuler',
		role: 'cancel',
		handler: () => {
		  console.log('Cancel clicked');
		}
	  }
	]
	});
	actionSheet.present();
	}
	
	supprimerPersonnel(personnelId: string){
	  this.personnels.remove(personnelId);
	}
	
	personnelModif(personnelId, personnelNom,personnelPrenom,personnelDatenaiss,personnelAdresse){
	  let prompt = this.alertCtrl.create({
		title: 'Song Name',
		message: "Update the name for this song",
		inputs: [
		  {
			name: 'nom',
			placeholder: 'Nom',
			value: personnelNom
		  },
		  {
			name: 'prenom',
			placeholder: 'Prenom',
			value: personnelPrenom
		  },
		  {
			name: 'datenaiss',
			placeholder: 'Date de naissance',
			value: personnelDatenaiss
		  },
		  {
			name: 'adresse',
			placeholder: 'Adresse',
			value: personnelAdresse
		  },
		],
		buttons: [
		  {
			text: 'Annuler',
			handler: data => {
			  console.log('Cancel clicked');
			}
		  },
		  {
			text: 'Enregistrer',
			handler: data => {
			
			  this.personnels.update(personnelId, {
				nom: data.nom,
				prenom: data.prenom,
				date_naissance: data.datenaiss,
				adresse: data.adresse
			  });
			}
		  }
		]
	  });
	  prompt.present();
	}
  
}
