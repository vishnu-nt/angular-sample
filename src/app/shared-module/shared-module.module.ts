import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DeleteDialog} from "../curriculum/component-configuration/component-configuration.component";

/** Alyle UI */
import { LyThemeModule, LY_THEME, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyListModule } from '@alyle/ui/list';
import { LyButtonModule } from '@alyle/ui/button';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyIconModule } from '@alyle/ui/icon';
import { ResponsiveModule } from '@alyle/ui/responsive';
import { LyFieldModule } from '@alyle/ui/field';
import { LySelectModule } from '@alyle/ui/select';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyCardModule } from '@alyle/ui/card';
import { LyDialogModule } from '@alyle/ui/dialog';
import { LyGridModule } from '@alyle/ui/grid';

export class GlobalVariables {
  testVal = '#00bcd4';
  primary = {
    default: '#2c3144',
    contrast: '#fff'
  };
  Quepal = {
    default: `linear-gradient(135deg,#ff8599 0%,#ffbe9a 100%)`,
    contrast: '#fff',
    shadow: '#ff8599'
  };
  SublimeLight = {
    default: `linear-gradient(135deg,#FC5C7D 0%,#6A82FB 100%)`,
    contrast: '#fff',
    shadow: '#B36FBC'
  };
  Amber = {
    default: '#ffc107',
    contrast: 'rgba(0, 0, 0, 0.87)'
  };
}


@NgModule({
  declarations: [],
  entryComponents: [DeleteDialog],
  imports: [
    CommonModule,
    LyThemeModule.setTheme('minima-light'),
    CommonModule,
    LyDrawerModule,
    LyToolbarModule,
    LyListModule,
    LyButtonModule,
    LyRadioModule,
    LyTypographyModule,
    LyIconModule,
    ResponsiveModule,
    LyFieldModule,
    LySelectModule,
    LyAvatarModule,
    LyCardModule,
    LyDialogModule,
    LyGridModule,
  ],
  exports: [
    CommonModule,
    LyDrawerModule,
    LyToolbarModule,
    LyListModule,
    LyButtonModule,
    LyRadioModule,
    LyTypographyModule,
    LyIconModule,
    ResponsiveModule,
    LyFieldModule,
    LySelectModule,
    LyAvatarModule,
    LyCardModule,
    LyDialogModule,
    LyGridModule,
  ],
  providers: [{
    provide: LY_THEME,
    useClass: MinimaLight,
    multi: true
  },
  {
    provide: LY_THEME_GLOBAL_VARIABLES,
    useClass: GlobalVariables
  } // global variables],
],
})
export class SharedModuleModule { }
