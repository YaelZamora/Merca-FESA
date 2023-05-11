import 'package:flutter/material.dart';
import 'package:mercafesa/models/models.dart';

class CarritoScreen extends StatelessWidget {
  const CarritoScreen({
    super.key,
    required this.product,
  });

  final Product product;

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: const Text(
          'Carrito',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 20,
          ),
        ),
        centerTitle: true,
      ),
      body: Column(
        children: [
          Container(
            margin: const EdgeInsets.only(top: 10),
            width: size.width,
            height: size.height * 0.7,
            child: ListView.separated(
              itemBuilder: (BuildContext context, int index) {
                return ListTile(
                  leading: Container(
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    clipBehavior: Clip.hardEdge,
                    child: product.picture == null
                        ? const Image(
                            image: AssetImage('assets/placeholder.png'),
                            fit: BoxFit.cover,
                          )
                        : FadeInImage(
                            placeholder:
                                const AssetImage('assets/placeholder.png'),
                            image: NetworkImage(product.picture.toString()),
                            fit: BoxFit.cover,
                          ),
                  ),
                  title: Text(product.nombre),
                  trailing: IconButton(
                    onPressed: () {},
                    icon: const Icon(
                      Icons.delete,
                    ),
                  ),
                );
              },
              separatorBuilder: (BuildContext context, int index) =>
                  const Divider(),
              itemCount: 20,
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Container(
                  width: size.width * 0.45,
                  height: 50,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Colors.indigo,
                  ),
                  clipBehavior: Clip.hardEdge,
                  child: MaterialButton(
                    onPressed: () {},
                    child: const Text(
                      'Hacer pedido',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 20,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
                Container(
                  width: size.width * 0.45,
                  height: 50,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Colors.red,
                  ),
                  clipBehavior: Clip.hardEdge,
                  child: MaterialButton(
                    onPressed: () {},
                    child: const Text(
                      'Borrar carrito',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 20,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
