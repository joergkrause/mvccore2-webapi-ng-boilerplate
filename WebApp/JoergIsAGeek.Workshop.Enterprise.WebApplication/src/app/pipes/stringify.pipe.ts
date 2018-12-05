import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringify' })
export class StringifyPipe implements PipeTransform {

    transform(value: any, ...args: any[]): string {

        const _stringify = JSON.stringify;

        JSON.stringify = function (value, ...args) {
            if (args.length) {
                return _stringify(value);
            } else {
                return _stringify(value, function (key, value) {
                    if (value && key === 'zone' && value['_zoneDelegate']
                        && value['_zoneDelegate']['zone'] === value) {
                        return undefined;
                    }
                    return value;
                });
            }
        };

        return JSON.stringify(value);

    }



}