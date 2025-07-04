import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as sidebarConfigs from '../../../../styleconfig.json'

@Injectable({ providedIn: 'root' })
export class SidebarService {

  sidebarStylesConfigs = sidebarConfigs.sidebar;

  getSidebarConfigStyle(): Observable<any> {
   return of(this.sidebarStylesConfigs)
 }

}

