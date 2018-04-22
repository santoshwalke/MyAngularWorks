import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name : 'shorten'
})
export class ShortenPipe implements PipeTransform{
	transform(value : any, tillIndex : number) {
		if(value.length > tillIndex) {
			return value.substr(0, tillIndex) + ' ...';
		}
		return value;
	}
}