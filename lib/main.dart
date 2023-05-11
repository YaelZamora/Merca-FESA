import 'package:flutter/material.dart';
import 'package:mercafesa/screens/home_screen.dart';
import 'package:mercafesa/screens/login_screen.dart';
import 'package:mercafesa/services/services.dart';
import 'package:provider/provider.dart';

import 'screens/new_product_screen.dart';
import 'screens/product_detail.dart';
import 'screens/register_screen.dart';

void main() => runApp(AppState());

class AppState extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (_) => ProductsService(),
        ),
      ],
      child: MyApp(),
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Material App',
      initialRoute: 'login',
      routes: {
        'login': (context) => const LoginScreen(),
        'home': (context) => const HomeScreen(),
      },
    );
  }
}
