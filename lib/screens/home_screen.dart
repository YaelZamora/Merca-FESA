import 'package:flutter/material.dart';
import 'package:mercafesa/models/models.dart';
import 'package:mercafesa/screens/carrito_screen.dart';
import 'package:mercafesa/screens/new_product_screen.dart';
import 'package:mercafesa/services/services.dart';
import 'package:mercafesa/tabs/tabs.dart';
import 'package:provider/provider.dart';

enum SampleItem { itemOne, itemTwo, itemThree }

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentIndex = 0;
  final List<Widget> _index = [
    const HomeTab(),
    const RecentTab(),
  ];

  SampleItem? selectedMenu;

  @override
  Widget build(BuildContext context) {
    final productsService = Provider.of<ProductsService>(context);

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: Text(
          (_currentIndex == 0) ? 'Productos' : 'Recientes',
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 20,
          ),
        ),
        centerTitle: true,
        actions: [
          PopupMenuButton<SampleItem>(
            initialValue: selectedMenu,
            onSelected: (SampleItem item) {
              setState(() {
                selectedMenu = item;
              });
              productsService.selectedProduct = new Product(
                available: true,
                cantidad: 1,
                nombre: '',
                price: 0,
              );
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (BuildContext context) => const NewProductScreen(),
                ),
              );
            },
            itemBuilder: (BuildContext context) => <PopupMenuEntry<SampleItem>>[
              const PopupMenuItem(
                value: SampleItem.itemOne,
                child: Text(
                  'Publicar artículo',
                ),
              ),
            ],
          )
        ],
      ),
      body: _index[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (value) {
          setState(() {
            _currentIndex = value;
          });
        },
        selectedItemColor: Colors.red,
        items: const [
          BottomNavigationBarItem(
              icon: Icon(
                Icons.home,
              ),
              label: ''),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.book,
              ),
              label: ''),
        ],
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.red,
        child: const Icon(Icons.shopping_cart),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (BuildContext context) => CarritoScreen(
                product: productsService.products.elementAt(0),
              ),
            ),
          );
        },
      ),
    );
  }
}
 /*
 

        productsService.selectedProduct = new Product(
            available: true,
            cantidad: 1,
            nombre: '',
            price: 0,
          );
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (BuildContext context) => const NewProductScreen(),
            ),
          );
 */