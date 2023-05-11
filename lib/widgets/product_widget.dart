import 'package:flutter/material.dart';
import 'package:mercafesa/models/models.dart';
import 'package:mercafesa/screens/product_detail.dart';
import 'package:mercafesa/services/products_service.dart';
import 'package:provider/provider.dart';

class ProductWidget extends StatelessWidget {
  const ProductWidget({
    super.key,
    required this.imagen,
    required this.nombre,
    required this.precio,
    required this.isAvailable,
    required this.product,
    required this.index,
  });

  final String imagen;
  final String nombre;
  final int precio;
  final bool isAvailable;
  final Product product;

  final int index;

  @override
  Widget build(BuildContext context) {
    final productsService = Provider.of<ProductsService>(context);

    return GestureDetector(
      onTap: () {
        productsService.selectedProduct =
            productsService.products[index].copy();
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (BuildContext context) => ProductDetail(
              nombre: product.nombre,
            ),
          ),
        );
      },
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
              child: product.picture == null
                  ? const Image(
                      image: AssetImage('assets/placeholder.png'),
                    )
                  : FadeInImage(
                      placeholder: const AssetImage('assets/placeholder.png'),
                      image: NetworkImage(
                        product.picture.toString(),
                      ),
                      fit: BoxFit.cover,
                    ),
            ),
            Positioned(
              right: 0,
              child: (product.available == true)
                  ? const SizedBox()
                  : const Agotado(),
            ),
            Positioned(
              bottom: 10,
              left: 5,
              right: 5,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    '\$' + product.price.toString() + ' ' + product.nombre,
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
