import { Pipe, PipeTransform } from '@angular/core';
import { MissionCourse } from 'src/app/@commons/models/mission-course';

@Pipe({
  name: 'filterMandatoryMission'
})
export class FilterMandatoryMissionPipe implements PipeTransform {

  transform(value: MissionCourse[], isMandatory: boolean): any {
    return value ?
      value.filter(mission => mission.mandatory === isMandatory && typeof mission.intro === 'undefined')
      : [];
  }

}
