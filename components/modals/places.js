class Places {
  constructor(title, image, address, location) {
    this.title = title;
    this.image = image;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
