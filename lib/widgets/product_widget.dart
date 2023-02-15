import 'package:flutter/material.dart';
import 'package:mercafesa/screens/product_detail.dart';

class ProductWidget extends StatelessWidget {
  const ProductWidget({
    super.key,
    required this.imagen,
    required this.nombre,
    required this.precio,
    required this.isAvailable,
  });

  final String imagen;
  final String nombre;
  final int precio;
  final bool isAvailable;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.push(
        context,
        MaterialPageRoute(
          builder: (BuildContext context) => ProductDetail(
            nombre: nombre,
          ),
        ),
      ),
      child: Container(
        width: 150,
        height: 150,
        margin: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.amber,
          borderRadius: BorderRadius.circular(20),
        ),
        clipBehavior: Clip.hardEdge,
        child: Stack(
          children: [
            Container(
              width: 150,
              height: 100,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: NetworkImage(imagen),
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Positioned(
              right: 0,
              child: (isAvailable == true) ? const SizedBox() : const Agotado(),
            ),
            Positioned(
              bottom: 10,
              left: 5,
              right: 5,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    '\$' + precio.toString() + ' ' + nombre,
                    overflow: TextOverflow.ellipsis,
                  ),
                  IconButton(
                    onPressed: () {},
                    icon: const Icon(
                      Icons.add_shopping_cart,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class Agotado extends StatelessWidget {
  const Agotado({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 75,
      height: 30,
      decoration: const BoxDecoration(
        color: Colors.red,
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(10),
        ),
      ),
      alignment: Alignment.center,
      child: const Text(
        'Agotado',
        style: TextStyle(
          color: Colors.white,
        ),
      ),
    );
  }
}
