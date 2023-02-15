import 'package:flutter/material.dart';

class RegisterScreen extends StatelessWidget {
  const RegisterScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          SizedBox(
            height: 400,
            child: ListWheelScrollView(
              itemExtent: 40,
              children: const [
                Text('Actuaría'),
                Text('Ingeniería Civil'),
                Text('MAC'),
                Text('Arquitectura'),
                Text('Diseño gráfico'),
                Text('Relaciones Internacionales'),
                Text('Comunicación'),
                Text('Pedagogía'),
                Text('Derecho'),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
