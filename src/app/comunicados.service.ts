import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as comunicadosConfigs from '../../styleconfig.json'

@Injectable({ providedIn: 'root' })
export class ComunicadosService {

  comunicadosStylesConfigs = comunicadosConfigs.Comunicados;

  getComunicadosConfigStyle(): Observable<any> {
   return of(this.comunicadosStylesConfigs)
 }

}
