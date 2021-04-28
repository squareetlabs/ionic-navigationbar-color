import { Injectable } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';

declare let NavigationBar: any;

@Injectable()
export class NavigationBarColor extends IonicNativePlugin {
  /**
   * Whether the NavigationBarColor is currently visible or not.
   */
  public isVisible = true;

  /**
   * This function changes the color of the android navigation bar
   * @param hexString  Color of navigation bar in hex string format, default value #000000
   * @param lightNavigationBar  Change the color of the buttons in the navigation bar to black,
   * use in light colors of the navigation bar (Android 8.0 or higher).
   * @return void Nothing is returned
   */

  backgroundColorByHexString(hexString: string, lightNavigationBar: boolean): Promise<any> {
    return NavigationBar.backgroundColorByHexString(hexString, lightNavigationBar);
  }

  /**
   * This function changes the color of the android navigation bar
   * @param colorName  Color of navigation bar by color name string format
   * @param lightNavigationBar Change the color of the buttons in the navigation bar to black,
   * use in light colors of the navigation bar (Android 8.0 or higher).
   * @return void Nothing is returned
   */
  backgroundColorByName(colorName: string, lightNavigationBar: boolean): Promise<any> {
    return NavigationBar.backgroundColorByHexString(colorName, lightNavigationBar);
  }

  /**
   * This function show the android navigation bar
   * @return void Nothing is returned
   */
  show(): void {
    NavigationBar.show();
    this.isVisible = true;
  }

  /**
   * This function hides the android navigation bar
   * @return void Nothing is returned
   */
  hide(): void {
    NavigationBar.hide();
    this.isVisible = false;
  }
}
