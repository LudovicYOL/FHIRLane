import { Injectable } from '@angular/core';

@Injectable()
export class GenJsonPostService {

  constructor() { }

  generateJSONTemp (temp: string): string {
    return '{\n' +
      '\t\t"resourceType": "Observation",\n' +
      '\t\t"status": "final",\n' +
      '\t\t"subject": {\n' +
      '\t\t\t"reference": "Patient/5a12fe978740ca00114092c3"\n' +
      '\t\t},\n' +
      '\t\t"code": {\n' +
      '\t\t\t\t"coding": [\n' +
      '\t\t\t\t\t{\n' +
      '\t\t\t\t\t\t"system": "http://loinc.org",\n' +
      '\t\t\t\t\t\t"code": "8310-5",\n' +
      '\t\t\t\t\t\t"display": "Body temperature",\n' +
      '\t\t\t\t\t\t"_id": "5a12ffd58740ca00114092e0"\n' +
      '\t\t\t\t\t}\n' +
      '\t\t\t\t]\n' +
      '\t\t\t},\n' +
      '\t\t"valueQuantity": {\n' +
      '\t\t\t"value":' + '"'  + temp + '"' + ',\n' +
      '            "system": "http://unitsofmeasure.org",\n' +
      '            "code": "Cel"\n' +
      '\t  }\n' +
      '\t}';
  }

  generateJSONPouls(pouls: string): string {
    return '{\n' +
      '\t\t"resourceType": "Observation",\n' +
      '\t\t"status": "final",\n' +
      '\t\t"subject": {\n' +
      '\t\t\t"reference": "Patient/5a12fe978740ca00114092c3"\n' +
      '\t\t},\n' +
      '\t\t"code": {\n' +
      '\t\t\t\t"coding": [\n' +
      '\t\t\t\t\t {\n' +
      '\t\t\t\t\t\t"system": "http://loinc.org",\n' +
      '\t\t\t\t\t\t"code": "8480-6",\n' +
      '\t\t\t\t\t\t"display": "Systolic blood pressure"\n' +
      '\t\t\t\t\t}\n' +
      '\t\t\t\t]\n' +
      '\t\t\t},\n' +
      '\t\t"valueQuantity": {\n' +
      '\t\t\t"value":' + '"' + pouls + '"' + ',\n' +
      '\t\t\t"unit": "mmHg",\n' +
      '\t\t\t"system": "http://unitsofmeasure.org",\n' +
      '\t\t\t"code": "mm[Hg]"\n' +
      '\t  }\n' +
      '\t}';
  }

  generateJSONTaile(taille: string): string {
    return '{\n' +
      '\t\t"resourceType": "Observation",\n' +
      '\t\t"status": "final",\n' +
      '\t\t"subject": {\n' +
      '\t\t\t"reference": "Patient/5a12fe978740ca00114092c3"\n' +
      '\t\t},\n' +
      '\t\t"code": {\n' +
      '\t\t\t\t"coding": [\n' +
      '\t\t\t\t\t{\n' +
      '\t\t\t\t\t\t"system": "http://loinc.org",\n' +
      '\t\t\t\t\t\t"code": "8302-2",\n' +
      '\t\t\t\t\t\t"display": "Body height"\n' +
      '\t\t\t\t\t}\n' +
      '\t\t\t\t]\n' +
      '\t\t\t},\n' +
      '\t\t"valueQuantity": {\n' +
      '\t\t\t"value":' + '"' + taille + '"' + ',\n' +
      '\t\t\t"unit": "in",\n' +
      '\t\t\t"system": "http://unitsofmeasure.org",\n' +
      '\t\t\t"code": "[in_i]"\n' +
      '\t  }\n' +
      '\t}';
  }

  generateJSONPoids(poids: string): string {
    var date = new Date();
    return '{\n' +
      '\t\t"resourceType": "Observation",\n' +
      '\t\t"status": "final",\n' +
      '\t\t"subject": {\n' +
      '\t\t\t"reference": "Patient/5a12fe978740ca00114092c3"\n' +
      '\t\t},\n' +
      '\t\t"code": {\n' +
      '\t\t\t\t"coding": [\n' +
      '\t\t\t\t\t{\n' +
      '\t\t\t\t\t\t"system": "http://loinc.org",\n' +
      '\t\t\t\t\t\t"code": "29463-7",\n' +
      '\t\t\t\t\t\t"display": "Body Weight",\n' +
      '\t\t\t\t\t\t"_id": "5a12fee38740ca00114092d8"\n' +
      '\t\t\t\t\t}\n' +
      '\t\t\t\t]\n' +
      '\t\t\t},\n' +
      '\t\t"effectiveDateTime":' + '"' + String(date) + '"' + ',\n' +
      '\t\t"valueQuantity": {\n' +
      '\t\t\t"value":' + '"' + poids + '"' + ',\n' +
      '\t\t\t"unit": "lbs",\n' +
      '\t\t\t"system": "http://unitsofmeasure.org",\n' +
      '\t\t\t"code": "[lb_av]"\n' +
      '\t  }\n' +
      '\t}';
  }
}
