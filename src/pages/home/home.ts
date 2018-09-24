import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private actionSheet : ActionSheet,public navCtrl: NavController) {}

  async showActionSheet(){
    try {
      const options : ActionSheetOptions = {
        title :'My Action Sheet',
        subtitle : 'Select an Option',
        buttonLabels : ['Share on Facebook','Share on Twitter','Share in Linkedin'],
        addCancelButtonWithLabel : 'Cancel',
        addDestructiveButtonWithLabel : 'Delete',
        androidTheme: 1,
        destructiveButtonLast :true
      }
      const  selectedButtonIndex = await this.actionSheet.show(options)

      console.log(`User selected ${selectedButtonIndex}`)
      
    } catch (e) {
      console.error(e)
    }
  }
  
}
