import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   option:BarcodeScannerOptions;
   encodeText:String='';
   encodeData:any={};
   scannedData:any={};

  constructor(public navCtrl: NavController,public scanner:BarcodeScanner) {

  }
scan(){
  console.log('Scanning works')
  this.option ={
      prompt:"Scan your BarCode"
  }
  this.scanner.scan(this.option).then((data)=>
  {
    this.scannedData = data;

  },(err) => {

    console.log('Error : ',err);
  })
}
encode(){
  console.log('Encode Works');
  this.scanner.encode(this.scanner.Encode.TEXT_TYPE,this.encodeText).then((data)=>{
  this.encodeData = data;
  },(err) => {
    console.log('Error :' ,err)
  })
}
}
