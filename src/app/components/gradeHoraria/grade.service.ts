import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as gradeConfigs from '../../../../styleconfig.json'

@Injectable({ providedIn: 'root' })
export class GradeService {

  gradeVespStylesConfigs = gradeConfigs.gradeVespertino;
  gradeNotStylesConfigs = gradeConfigs.gradeNoturno;

  getGradeVespConfigStyle(): Observable<any> {
    return of(this.gradeVespStylesConfigs)
  }

  getGradeNotConfigStyle(): Observable<any> {
    return of(this.gradeNotStylesConfigs)
  }

}
