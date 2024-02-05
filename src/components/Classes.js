export class CardClass {
    constructor(title, description, imageUrl) {
      this.id = Date.now();
      this.title = title
      this.description = description
      this.imageUrl = URL.createObjectURL(imageUrl)
      this.timestamp = new Date().toString()
    }
  }
  
  export class ChangeClass extends CardClass {
    constructor(id, ...restProps) {
      super(...restProps)
      this.id = id;
    }
  }