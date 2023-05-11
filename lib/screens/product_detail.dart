import 'package:flutter/material.dart';
import 'package:mercafesa/providers/product_form_provider.dart';
import 'package:mercafesa/services/services.dart';
import 'package:provider/provider.dart';

class ProductDetail extends StatelessWidget {
  const ProductDetail({super.key, required this.nombre});

  final String nombre;

  @override
  Widget build(BuildContext context) {
    final productsService = Provider.of<ProductsService>(context);
    final size = MediaQuery.of(context).size;

    return ChangeNotifierProvider(
      create: (_) => ProductFormProvider(productsService.selectedProduct),
      child: _ProductDetailBody(
        nombre: nombre,
        size: size,
        productsService: productsService,
      ),
    );
  }
}

class _ProductDetailBody extends StatelessWidget {
  const _ProductDetailBody({
    super.key,
    required this.nombre,
    required this.size,
    required this.productsService,
  });

  final String nombre;
  final Size size;
  final ProductsService productsService;

  @override
  Widget build(BuildContext context) {
    final productForm = Provider.of<ProductFormProvider>(context);
    final product = productForm.product;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: Text(
          nombre,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 20,
          ),
        ),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Imagen(
                size: size,
                url: productsService.selectedProduct.picture,
              ),
              Text(
                product.nombre,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
              Text(
                'Precio: \$${product.price}',
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
              //TODO: Agregar para que se ponga la descripción de el producto
              /*const Text(
                'Descripción:',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
              const Text(
                'Reprehenderit mollit mollit exercitation laboris cupidatat. Qui qui amet ad eu reprehenderit pariatur ipsum exercitation Lorem laboris. Velit nisi aliqua consectetur veniam fugiat do ea consequat tempor laboris veniam excepteur culpa consequat. Officia ea commodo dolor laborum adipisicing cillum aliqua eu.',
                textAlign: TextAlign.justify,
                style: TextStyle(
                  fontWeight: FontWeight.w300,
                  fontSize: 15,
                ),
              ),
              const SizedBox(
                height: 40,
              ),
              const Text(
                'Similares',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
              SizedBox(
                width: size.width,
                height: 300,
                child: GridView.builder(
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                  ),
                  itemBuilder: (BuildContext context, int index) => Container(
                    margin: const EdgeInsets.all(5),
                    decoration: BoxDecoration(
                      image: const DecorationImage(
                        image: NetworkImage(
                          'https://picsum.photos/100',
                        ),
                        fit: BoxFit.cover,
                      ),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    clipBehavior: Clip.hardEdge,
                  ),
                ),
              ),*/
            ],
          ),
        ),
      ),
    );
  }
}

class Imagen extends StatelessWidget {
  const Imagen({
    super.key,
    required this.size,
    this.url,
  });

  final Size size;
  final String? url;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size.width,
      height: size.width * 0.8,
      margin: const EdgeInsets.symmetric(vertical: 20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: Colors.grey,
      ),
      child: url == null
          ? const Image(
              image: AssetImage('assets/placeholder.png'),
              fit: BoxFit.cover,
            )
          : FadeInImage(
              placeholder: const AssetImage('assets/placeholder.png'),
              image: NetworkImage(url!),
              fit: BoxFit.cover,
            ),
    );
  }
}
