import 'package:flutter/material.dart';
import 'package:mercafesa/widgets/product_widget.dart';

class HomeTab extends StatelessWidget {
  const HomeTab({super.key});

  @override
  Widget build(BuildContext context) {
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
                itemCount: 20,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) =>
                    const ProductWidget(
                  imagen: 'https://picsum.photos/100',
                  nombre: 'Nombre',
                  precio: 50,
                  isAvailable: false,
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
                itemCount: 20,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) =>
                    const ProductWidget(
                  imagen: 'https://picsum.photos/100',
                  nombre: 'Nombre',
                  precio: 50,
                  isAvailable: false,
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
                itemCount: 20,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) =>
                    const ProductWidget(
                  imagen: 'https://picsum.photos/100',
                  nombre: 'Nombre',
                  precio: 50,
                  isAvailable: false,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
