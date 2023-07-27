import 'package:flutter/material.dart';
import 'package:mobile/product/utility/navigator_utility.dart';

mixin WelcomeMixin on StatelessWidget {
  void navigateToLogin(BuildContext context) {
    NavigatorUtility(context).pushAndReplace(
      const Scaffold(),
    );
  }
}
