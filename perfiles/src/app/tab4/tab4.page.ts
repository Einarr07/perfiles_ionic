import { Component } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import {UserPhoto, PhotoService} from '../services/photo.service'

@Component({
    selector: 'app-tab4',
    templateUrl: 'tab4.page.html',
    styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
    constructor(
        public photoService: PhotoService,
        public actionSheetController: ActionSheetController
        ) {}

    async ngOnInit(){
        await this.photoService.loadSaved();
    }
    
    public async showActionSheet(photo: UserPhoto, position: number){
        const actionSheet = await this.actionSheetController.create({
            header: 'Photos',
            buttons: [{
                text: 'Borrar',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    this.photoService.deletePicture(photo, position);
                }
            },
            {
                text: 'Cancelar',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    // La opción es automatica
                }
            }]
        });
        await actionSheet.present
    }
}