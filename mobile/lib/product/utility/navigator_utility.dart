import 'package:flutter/material.dart';

@immutable
final class NavigatorUtility {
  const NavigatorUtility(BuildContext context) : _context = context;

  final BuildContext _context;

  void push(Widget child) {
    Navigator.of(_context).push(
      MaterialPageRoute<void>(
        builder: (context) => child,
      ),
    );
  }

  void pushAndReplace(Widget child) {
    Navigator.of(_context).pushReplacement(
      MaterialPageRoute<void>(
        builder: (context) => child,
      ),
    );
  }

  void pop() {
    Navigator.of(_context).pop();
  }
}
