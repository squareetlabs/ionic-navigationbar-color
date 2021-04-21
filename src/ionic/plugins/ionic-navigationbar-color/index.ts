import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';


/**
 * @name Navigation Bar Color
 * @description
 * This plugin is a wrapper plugin for [cordova-plugin-navigationbar]
 *
 * @usage
 * ```typescript
 * import { NavigationBarColor } from 'ionic-ionic-navigationbar-color';
 *
 *
 * constructor(private navigationBarColor: NavigationBarColor) { }
 *
 * ...
 *
 * ```
 */
@Plugin({
  pluginName: 'NavigationBarColor',
  plugin: 'cordova-plugin-navigationbar', // npm package name, example: cordova-plugin-camera
  pluginRef: 'NavigationBarColor', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/fagundes/cordova-plugin-navigationbar', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class NavigationBarColor extends IonicNativePlugin {
  /**
   * Whether the NavigationBarColor is currently visible or not.
   */
  @CordovaProperty()
  isVisible: boolean;

  /**
   * This function changes the color of the android navigation bar
   * @param hexString {string} Color of navigation bar in hex string format, default value #000000
   * @param lightNavigationBar {boolean} Change the color of the buttons in the navigation bar to black, use in light colors of the navigation bar (Android 8.0 or higher).
   * @return void Nothing is returned
   */
  @Cordova()
  backgroundColorByHexString(hexString: string,  lightNavigationBar:boolean): void {
    return;
  }

  /**
   * This function changes the color of the android navigation bar
   * @param colorName {string} Color of navigation bar by color name string format
   * @param lightNavigationBar {boolean} Change the color of the buttons in the navigation bar to black, use in light colors of the navigation bar (Android 8.0 or higher).
   * @return void Nothing is returned
   */
  @Cordova()
  backgroundColorByName(colorName: string,  lightNavigationBar:boolean): Promise<any> {
    return;
  }

  /**
   * This function show the android navigation bar
   * @return void Nothing is returned
   */
  @Cordova()
  show(): void {
    return;
  }

  /**
   * This function hides the android navigation bar
   * @return void Nothing is returned
   */
  @Cordova()
  hide(): void {
    return;
  }

}
