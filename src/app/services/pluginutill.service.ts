import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Injectable({
  providedIn: 'root'
})
export class PluginutillService {
  clickedImage: string;
  options:CameraOptions;
  constructor(private camera: Camera) { }
 async captureImage() {
  this.clickedImage = "";
    this.options = {
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }
   await this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
      return this.clickedImage;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

async selectFromDevice() {
  this.clickedImage = "";
  this.options = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.ALLMEDIA,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }
await  this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.clickedImage = base64Image;
    return this.clickedImage;
  }, (err) => {
    console.log(err);
    // Handle error
  });
}

}
