import 'package:flutter/material.dart';
import 'package:mercafesa/screens/login_screen.dart';

import 'screens/new_product_screen.dart';
import 'screens/product_detail.dart';
import 'screens/register_screen.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Material App',
      home: RegisterScreen(),
    );
  }
}
