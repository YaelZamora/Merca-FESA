import 'package:flutter/material.dart';
import 'package:mercafesa/screens/home_screen.dart';
import 'dart:math' as math;

import 'package:mercafesa/screens/register_screen.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
      body: Stack(
        children: [
          Container(
            width: size.width,
            height: size.height,
            decoration: const BoxDecoration(
              gradient: SweepGradient(
                center: FractionalOffset.center,
                colors: [
                  Colors.red,
                  Colors.orange,
                  Colors.yellow,
                  Colors.green,
                  Colors.blue,
                  Colors.purple,
                ],
                stops: <double>[0.166, 0.332, 0.498, 0.664, 0.83, 1.0],
                transform: GradientRotation(math.pi / 4),
              ),
            ),
          ),
          Column(
            children: [
              const Spacer(),
              const Text(
                'MercaFESA',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 40,
                ),
              ),
              const Spacer(),
              Container(
                width: size.width,
                height: size.height * 0.6,
                margin: const EdgeInsets.symmetric(horizontal: 20),
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  color: Colors.white,
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    TextFormField(
                      keyboardType: TextInputType.emailAddress,
                      decoration: const InputDecoration(
                        prefixIcon: Icon(Icons.email_outlined),
                        hintText: 'Correo',
                        border: OutlineInputBorder(),
                      ),
                    ),
                    TextFormField(
                      obscureText: true,
                      decoration: InputDecoration(
                        prefixIcon: const Icon(Icons.key),
                        suffixIcon: IconButton(
                          onPressed: () {},
                          icon: const Icon(
                            Icons.remove_red_eye_outlined,
                          ),
                        ),
                        hintText: 'Contraseña',
                        border: const OutlineInputBorder(),
                      ),
                    ),
                    Container(
                      width: 250,
                      height: 60,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Colors.indigo,
                      ),
                      clipBehavior: Clip.hardEdge,
                      child: MaterialButton(
                        minWidth: 250,
                        height: 60,
                        onPressed: () => Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (BuildContext context) =>
                                const HomeScreen(),
                          ),
                        ),
                        child: const Text(
                          'Iniciar Sesión',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            letterSpacing: 2,
                            fontSize: 20,
                          ),
                        ),
                      ),
                    ),
                    TextButton(
                      onPressed: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (BuildContext context) =>
                              const RegisterScreen(),
                        ),
                      ),
                      child: const Text(
                        'Registrarse',
                      ),
                    ),
                  ],
                ),
              ),
              const Spacer(),
              const Spacer(),
              const Text(
                'Términos de privacidad',
              ),
            ],
          ),
        ],
      ),
    );
  }
}
