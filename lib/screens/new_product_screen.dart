import 'package:flutter/material.dart';

class NewProductScreen extends StatelessWidget {
  const NewProductScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

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
            TextFormField(
              decoration: const InputDecoration(
                hintText: 'Nombre del producto',
              ),
            ),
            const SizedBox(height: 20),
            TextFormField(
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                hintText: 'Precio del producto',
              ),
            ),
            const SizedBox(height: 20),
            TextFormField(
              decoration: const InputDecoration(
                hintText: 'Descripción del producto',
              ),
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
                onPressed: () {},
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
