import { PipeTransform, Pipe } from '@angular/core';
import { IBook } from './book';
import { IVolumeInfo } from './volumeInfo';

@Pipe({
    name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
    transform(value: IBook[], filter: string): IBook[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((book: IBook) =>
            book.volumeInfo.title.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
export class AuthorPipe implements PipeTransform {
    transform(value: IVolumeInfo[], filter: string): IVolumeInfo[] {
        return value.authors.replace(/,/, ', ');
    }
}