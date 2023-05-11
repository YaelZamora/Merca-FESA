// To parse this JSON data, do
//
//     final product = productFromJson(jsonString);

import 'dart:convert';

class Product {
  Product({
    required this.available,
    required this.cantidad,
    required this.nombre,
    this.picture,
    required this.price,
    this.id,
  });

  bool available;
  int cantidad;
  String nombre;
  String? picture;
  double price;
  String? id;

  factory Product.fromRawJson(String str) => Product.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Product.fromMap(Map<String, dynamic> json) => Product(
        available: json["available"],
        cantidad: json["cantidad"],
        nombre: json["nombre"],
        picture: json["picture"],
        price: json["price"].toDouble(),
      );

  factory Product.fromJson(Map<String, dynamic> json) => Product(
        available: json["available"],
        cantidad: json["cantidad"],
        nombre: json["nombre"],
        picture: json["picture"],
        price: json["price"],
      );

  Map<String, dynamic> toJson() => {
        "available": available,
        "cantidad": cantidad,
        "nombre": nombre,
        "picture": picture,
        "price": price,
      };

  Product copy() => Product(
        available: available,
        cantidad: cantidad,
        nombre: nombre,
        price: price,
      );
}
