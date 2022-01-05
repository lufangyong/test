import { Pipe, PipeTransform } from '@angular/core';

/**
 * 文字超出指定长度省略显示
 */
@Pipe({
    name: 'textEllipsis'
})
export class TextEllipsisPipe implements PipeTransform {
    transform(value: string, limit: number = 128): string {
        // let curIdx = 0;
        // let pos = 0;
        if (!value || value.length < limit) {
            return value;
        }
        return value.substring(0, limit) + '...';
        // while (true) {
        //     const charCode = value.charCodeAt(curIdx);
        //     curIdx++;
        //     charCode === 94
        //         ? pos = pos + 2 : charCode > 127
        //             ? pos = pos + 2 : pos++;
        //     if (curIdx >= limit) {
        //         return value.substring(0, pos) + '...';
        //     }
        // }
    }
}
