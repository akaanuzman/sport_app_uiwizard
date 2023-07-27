import 'package:flutter/material.dart';
import 'package:kartal/kartal.dart';
import 'package:mobile/product/generation/assets.gen.dart';
import 'package:mobile/product/widget/button/custom_button.dart';

import 'mixin/welcome_mixin.dart';

class WelcomeView extends StatelessWidget with WelcomeMixin {
  const WelcomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: context.padding.horizontalMedium,
          child: Column(
            children: [
              const Spacer(),
              //img
              Assets.images.welcome.image(),
              const Spacer(),
              //apptitle
              Text(
                "FitDev",
                style: context.general.textTheme.displaySmall,
              ),
              context.sized.emptySizedHeightBoxLow,
              // subtitle
              Text(
                "Your ultimate fitness companion",
                style: context.general.textTheme.titleMedium,
              ),
              const Spacer(),
              //btn
              CustomButton(
                label: "Start",
                onPressed: () => navigateToLogin(context),
              ),
              context.sized.emptySizedHeightBoxLow3x,
            ],
          ),
        ),
      ),
    );
  }
}
