import {HiioCalendar} from "./HiioCalendar";

export enum COMPARE {
    PREV,
    CURRENT,
    NEXT
};

export class HiioTask {
    private _start: HiioCalendar;
    private _end: HiioCalendar;
    private _id:string;
    set start(startDate: HiioCalendar) {
        this._start = startDate;
    }

    set end(endDate: HiioCalendar) {

        this._end = endDate;
    }

    get start(): HiioCalendar {
        return this._start;
    }

    get end(): HiioCalendar {

        return this._end;
    }

    set id(id:string){
        this._id = id;
    }
    get id(){
        return this._id;
    }


    compare(src: HiioCalendar, dist: HiioCalendar): COMPARE {
        let _src: number = src.date.getTime();
        let _dist: number = dist.date.getTime();
        if (_src > _dist) {
            return COMPARE.PREV;
        } else if (_src === _dist) {
            return COMPARE.CURRENT;
        } else {
            return COMPARE.NEXT;
        }
    }

    dateList(): HiioCalendar[] {

        if (!this._start || !this._end) {
            return [];
        }
        let diffTime: number = this.end.date.getTime() - this.start.date.getTime();
        let diffDays: number = diffTime / (1000 * 60 * 60 * 24);
        if (diffDays === 0) {
            return [this._start];
        }
        return [this.start, ...Array(diffDays - 1).fill(0).map((_, i: number) => new HiioCalendar(this.start.Y, this.start.M, this.start.D + i + 1)), this.end];
    }

    get dateToWeeks(): HiioCalendar[][] {
        let mat:HiioCalendar[][] = [];
        let start:number = 0;
        this.dateList().map((item:HiioCalendar):void=>{
            if(mat.length===0){
                mat.push([])
            }
            mat[start] = [...mat[start],item]
            if(item.W===6){
                start++;
                mat = [...mat,[]];
            }
        })
        return mat;
    }

    static intersect(src:string[],dist:string[]):boolean{
        return src.some((item:string)=>dist.includes(item));
    }
}