export class Product {
  private readonly id?: string;
  private readonly name: string;
  private readonly description: string;
  private readonly price: number;

  constructor(
    name: string,
    description: string,
    price: number,
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.id = id;
  }

  getId(): string | undefined {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price
    };
  }

  static fromJSON(data: { id: string; name: string; description: string; price: number }): Product {
    return new Product(
      data.name,
      data.description,
      data.price,
      data.id
    );
  }
}