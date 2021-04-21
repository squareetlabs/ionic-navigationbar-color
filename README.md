# Ionic NavigationBar Color

Ionic NavigationBar Color is an Ionic 5 Native Wrapper that allows you to change the color, hide and show the android navigation bar and indicate whether to change the tone of the icons.

### Install it
```npm i --save ionic-navigationbar-color```

------------------------

## How to use

##For global config using "ionic-navigationbar-color" you can just add preference to config.xml file.

####NavigationBarBackgroundColor change the color of navigation bar.
```<preference name="NavigationBarBackgroundColor" value="#000000" />```

####NavigationBarLight change the color of the buttons in the navigation bar to black, use in light colors of the navigation bar (Android 8.0 or higher).
```<preference name="NavigationBarLight" value="true" />```

##For particular config using import
You can also use it by importing it in the app.module.ts or in the module corresponding to the page where it is going to be used in case of using lazyLoad for loading

```import { NavigationBarColor } from 'ionic-plugin-navigation-bar-color';```

```constructor(...,`public navigationBarColor: NavigationBarColor,...) { }```

###Now you can change background color using this:

```navigationBarColor.backgroundColorByHexString('#000000', false);```

###To hide the navigation bar use this:
```navigationBarColor.hide()```

###To force show the navigation bar use this:
```navigationBarColor.show()```

------------------------

## Troubles?
If you can't solve your problem, please report to [ionic-navigationbar-color](https://github.com/squareetlabs/ionic-navigationbar-color/issues) repository.


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `npm run shipit`, go to the dist folder `cd dist/ionic-navigationbar-color` and run `npm publish`.

## Running unit tests

Run `npm run test` to execute the unit tests.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Credits
- [Alberto Rial Barreiro](https://github.com/alberto-rial)
- [Jacobo Cantorna Cigarrán](https://github.com/jcancig)
- [Desarrollo de apps para moviles](https://squareet.com/desarrollo-de-aplicaciones-para-moviles) SquareetLabs
- [All Contributors](../../contributors)

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
