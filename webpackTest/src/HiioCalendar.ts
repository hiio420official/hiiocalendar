
import {DateConstructorArgs} from "./global";

export class HiioCalendar {
    private WEEKS: number = 6;
    private DAYS: number = 7;

    private _date: Date;
    private _first: HiioCalendar;
    private _last: HiioCalendar;
    private _prev: HiioCalendar;
    private _next: HiioCalendar;
    private _thisYear: HiioCalendar;
    private _list: HiioCalendar[];
    private _matrix: HiioCalendar[][];

    constructor(...args: DateConstructorArgs) {
        if (args.length > 0) {
            args[1] = args[1] - 1;
        }
        this._date = new Date(...args);
    }

    get Y(): number {
        return this._date.getFullYear();
    }

    get M(): number {
        return this._date.getMonth() + 1;
    }

    get D(): number {
        return this._date.getDate();
    }

    get W(): number {
        return this._date.getDay();
    }

    get H(): number {
        return this._date.getHours();
    }

    get m(): number {
        return this._date.getMonth();
    }

    get s(): number {
        return this._date.getSeconds();
    }
    get thisYear():HiioCalendar{
        if(!this._thisYear){
            this._thisYear = new HiioCalendar(this.Y,1,0)
        }

        return this._thisYear;
    }
    get weekOfYear():number{
        const currentDayOfYear = Math.floor( (this.date.getTime() - this.thisYear.date.getTime())/ (24 * 60 * 60 * 1000));
        return Math.ceil((currentDayOfYear + 1) / 7);
    }

    get prevMonth(): HiioCalendar {
        if (!this._prev) {
            this._prev = new HiioCalendar(this.Y, this.M - 1, this.D);
        }
        return this._prev;
    }

    get nextMonth(): HiioCalendar {
        if (!this._next) {
            this._next = new HiioCalendar(this.Y, this.M + 1, this.D);
        }
        return this._next;
    }

    get first(): HiioCalendar {
        if (!this._first) {
            this._first = new HiioCalendar(this.Y, this.M, 1);
        }
        return this._first;
    }

    get last(): HiioCalendar {
        if (!this._last) {
            this._last = new HiioCalendar(this.Y, this.M + 1, 0);
        }
        return this._last;
    }

    get size(): number {
        return this.last.D - this.first.D + 1;
    }

    get list(): HiioCalendar[] {
        if (!this._list) {
            this._list = Array(this.size).fill(0).map((_, i) => new HiioCalendar(this.Y, this.M, i + 1));
        }
        return this._list;
    }

    getMatrix(): HiioCalendar[][] {
        let mat: HiioCalendar[][] = Array(this.WEEKS).fill([]);
        let firstDay: number = this.first.W;
        let firstSize: number = this.DAYS - firstDay;
        let start: number = 0;
        let end: number = firstSize;
        let last: number = 0;
        mat[0] = [...mat[0], ...this.prevMonth.list.slice(this.prevMonth.size - firstDay, this.prevMonth.size + 1)];

        for (let i: number = 0; i < this.WEEKS; i++) {
            mat[i] = [...mat[i], ...this.list.slice(start, end)];
            start = end;
            end = firstSize + ((i + 1) * this.DAYS);
            if (mat[i].length < this.DAYS && mat[i].length !== 0) {
                last = i;
            }
        }

        start = 0;
        for (let i: number = last; i < this.WEEKS; i++) {
            end = this.DAYS - mat[i].length + start;
            mat[i] = [...mat[i], ...this.nextMonth.list.slice(start, end)];
            start = end;
        }
        return mat;
    }

    get matrix(): HiioCalendar[][] {

        if (!this._matrix) {
            this._matrix = this.getMatrix();
        }
        return this._matrix;
    }

    get date(): Date {
        return this._date;
    }


    toString(format?: string): string {
        if (!format) {
            return `${this.Y}-${this.M}-${this.D}`;
        } else {
            let $this = this;
            return format.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function (match: string): string {
                switch (match) {
                    case "yyyy":
                        return String($this.Y);
                    case "yy":
                        return String($this.Y % 1000).padStart(2, '0');
                    case "MM":
                        return String($this.M).padStart(2, '0');
                    case "dd":
                        return String($this.D).padStart(2, '0');
                    // case "E":
                    //     return weekName[d.getDay()];
                    case "HH":
                        return String($this.H).padStart(2, '0');
                    case "hh":
                        return String(($this.H === $this.H % 12) ? $this.H : 12).padStart(2, '0');
                    case "mm":
                        return String($this.m).padStart(2, '0');
                    case "ss":
                        return String($this.s).padStart(2, '0');
                    case "a/p":
                        return $this.H < 12 ? "오전" : "오후";
                    default:
                        return match;
                }
            });
        }
    }

}

