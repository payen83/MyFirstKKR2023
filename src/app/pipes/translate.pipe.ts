import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, lang: any): any {

    let langData: any = {
      "MY": {
        "Followers": "Pengikut",
        "Following": "Mengikuti",
        "Likes": "Suka"
      },
      "EN": {
        "Followers": "Followers",
        "Following": "Following",
        "Likes": "Likes"
      }
    }
    return langData[lang][value];
  }

}
