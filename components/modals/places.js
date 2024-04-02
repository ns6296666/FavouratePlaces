export class Places {
  constructor(title, image, location) {
    this.title = title;
    this.image = image;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = new Date().toString() + Math.random().toString();
  }
}
