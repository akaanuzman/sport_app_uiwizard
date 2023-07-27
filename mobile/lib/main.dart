import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:mobile/feature/views/authentication/welcome_view.dart';
import 'package:mobile/product/utility/theme/app_theme.dart';
import 'package:device_preview/device_preview.dart';

void main() => runApp(
      DevicePreview(
        enabled: !kReleaseMode,
        builder: (_) => const MyApp(),
      ),
    );

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      locale: DevicePreview.locale(context),
      builder: DevicePreview.appBuilder,
      debugShowCheckedModeBanner: false,
      theme: AppTheme().themeData,
      title: 'Sport App',
      home: const WelcomeView(),
    );
  }
}
