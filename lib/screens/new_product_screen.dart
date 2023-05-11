import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mercafesa/models/product.dart';
import 'package:mercafesa/providers/product_form_provider.dart';
import 'package:mercafesa/services/products_service.dart';
import 'package:provider/provider.dart';

class NewProductScreen extends StatelessWidget {
  const NewProductScreen({
    super.key,
    //this.productsService,
  });

  //final ProductsService? productsService;

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    //final productForm = Provider.of<ProductFormProvider>(context);
    //final product = productForm.product;

    return _NewProductBody(
      size: size,
      //product: product,
      //productsService: productsService,
    );
  }
}

class _NewProductBody extends StatelessWidget {
  const _NewProductBody({
    super.key,
    required this.size,
    //required this.product,
    //required this.productsService,
  });

  final Size size;
  //final Product product;
  //final ProductsService? productsService;

  @override
  Widget build(BuildContext context) {
    //final productForm = Provider.of<ProductFormProvider>(context);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purple,
        title: const Text(
          'Nuevo Producto',
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true,
      ),
      body: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          children: [
            GestureDetector(
              onTap: () {
                //TODO: Abrir cámara para tomar fotos
              },
              child: Container(
                width: size.width,
                height: size.width * 0.8,
                margin: const EdgeInsets.symmetric(vertical: 20),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  color: Colors.grey,
                ),
                child: Icon(
                  Icons.camera_alt,
                  color: Colors.grey.shade300,
                  size: size.width / 2,
                ),
              ),
            ),
            _ProductForm(
              size: size,
              //productForm: productForm,
              //product: product,
            ),
            const SizedBox(height: 20),
            Container(
              width: size.width,
              height: 50,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                color: Colors.indigo,
              ),
              clipBehavior: Clip.hardEdge,
              child: MaterialButton(
                height: 50,
                minWidth: size.width,
                onPressed: () async {
                  /*if (!productForm.isValidForm()) return;

                  await productsService!
                      .saveOrCreateProduct(productForm.product);*/
                },
                child: const Text(
                  'Publicar Producto',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 20,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ProductForm extends StatelessWidget {
  const _ProductForm({
    super.key,
    required this.size,
    //required this.productForm,
    //required this.product,
  });

  final Size size;
  //final ProductFormProvider productForm;
  //final Product product;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size.width,
      height: size.height * 0.3,
      child: Form(
        //key: productForm.formKey,
        autovalidateMode: AutovalidateMode.onUserInteraction,
        child: Column(
          children: [
            TextFormField(
              //onChanged: (value) => product.nombre = value,
              validator: (value) {
                if (value == null || value.length < 1)
                  return 'El nombre es obligatorio';
              },
              decoration: const InputDecoration(
                hintText: 'Nombre del producto',
              ),
            ),
            const SizedBox(height: 20),
            TextFormField(
              inputFormatters: [
                FilteringTextInputFormatter.allow(RegExp(r'^(\d+)?\.?\d{0,2}'))
              ],
              onChanged: (value) {
                /*if (double.tryParse(value) == null) {
                  product.price = 0;
                } else {
                  product.price = double.parse(value);
                }*/
              },
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                hintText: 'Precio del producto',
              ),
            ),
          ],
        ),
      ),
    );
  }
}
