# hsbinterpolation
jscript to interpolate color values between three points in a hue/saturation/lightness color model

https://uxdesign.cc/simplified-figma-color-variables-based-on-hsb-interpolation-c3e404585176 makes a compelling case for leveraging interpolation to generate a scalable color palette.

Most graphic applications today support HSL models, but only allow integer values. This makes sense because color hex codes are just hex integers for RGB value.
When creating a color model using interpolation, integers don't support sufficent granularity for the interim calculations to arrive at RGB color integers.

This code leverages https://editor.p5js.org as a color model calculation engine. It accepts five constants, representing miniumum saturation, maximum saturation, minimum brightness, maximum brightness, and number of steps in between the central color value and its min/max anchors in each direction.
