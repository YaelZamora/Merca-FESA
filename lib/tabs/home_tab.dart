import 'package:flutter/material.dart';
import 'package:mercafesa/screens/product_detail.dart';
import 'package:mercafesa/services/products_service.dart';
import 'package:mercafesa/widgets/product_widget.dart';
import 'package:provider/provider.dart';

class HomeTab extends StatelessWidget {
  const HomeTab({super.key});

  @override
  Widget build(BuildContext context) {
    final productService = Provider.of<ProductsService>(context);
    final size = MediaQuery.of(context).size;

    return SizedBox(
      height: size.height * 0.95,
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Comida',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
              ),
            ),
            SizedBox(
              width: size.width,
              height: 170,
              child: ListView.builder(
                itemCount: productService.products.length,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) => ProductWidget(
                  product: productService.products.elementAt(index),
                  imagen: 'https://picsum.photos/100',
                  nombre: 'Nombre',
                  precio: 50,
                  isAvailable: false,
                  index: index,
                ),
              ),
            ),
            const Text(
              'Productos',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
              ),
            ),
            SizedBox(
              width: size.width,
              height: 170,
              child: ListView.builder(
                itemCount: productService.products.length,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) => ProductWidget(
                  product: productService.products.elementAt(index),
                  imagen: 'https://picsum.photos/100',
                  nombre: 'Nombre',
                  precio: 50,
                  isAvailable: false,
                  index: index,
                ),
              ),
            ),
            const Text(
              'Ropa',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
              ),
            ),
            SizedBox(
              width: size.width,
              height: 170,
              child: ListView.builder(
                itemCount: productService.products.length,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) => ProductWidget(
                  product: productService.products.elementAt(index),
                  imagen: 'https://picsum.photos/100',
                  nombre: 'Nombre',
                  precio: 50,
                  isAvailable: false,
                  index: index,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
