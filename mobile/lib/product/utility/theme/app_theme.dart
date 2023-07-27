import 'package:flutter/material.dart';

import '../../generation/colors.gen.dart';

final class AppTheme {
  AppTheme() {
    _themeData = ThemeData.light();
  }

  late final ThemeData _themeData;

  ThemeData get themeData => _themeData.copyWith(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(seedColor: ColorName.bloodmystIsle),
        primaryColor: ColorName.bloodmystIsle,
        textTheme: _themeData.textTheme.copyWith(
          displaySmall: _themeData.textTheme.displaySmall!.copyWith(
            color: Colors.black,
            fontWeight: FontWeight.w600,
          ),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: ColorName.bloodmystIsle,
            shape: const StadiumBorder(),
            elevation: 0,
            foregroundColor: Colors.white,
            textStyle: _themeData.textTheme.titleMedium?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      );
}
