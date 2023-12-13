import {HiioCalendar} from "./HiioCalendar";
import {HiioTask,COMPARE} from "./HiioTask";

let calendar:HiioCalendar = new HiioCalendar();
let taskMatrix :number[][] = Array(6).fill(Array(7).fill(0));

var target = document.querySelector("#calendar");

draw(target);

let a = new HiioTask();
a.start =new HiioCalendar(2023,12,1);
a.end = new HiioCalendar(2023,12,6);
a.id = "123vksdjvn";
let taskList = [a];
taskList.map(task =>{
    taskDraw(task);
})
function draw(target): void {
    var matrix: HiioCalendar[][] = calendar.matrix;
    for (var i: number = 0; i < matrix.length; i++) {
        var row: HTMLDivElement = document.createElement("div");
        row.className = "row";
        row.id = `row_${i}`;
        for (var j: number = 0; j < matrix[i].length; j++) {
            var item: HTMLDivElement = document.createElement("div");
            var d: HiioCalendar = matrix[i][j];
            item.innerHTML = `${d.D}`;
            item.id = `calendar_date_${d.Y}_${d.M}_${d.D}`;
            item.className = "calendar_date";
            row.append(item);
        }
        target.append(row);
    }
}

let calendarDateNode: NodeListOf<Element> = document.querySelectorAll(".calendar_date");
calendarDateNode.forEach((node, idx) => {
    node.addEventListener("mouseenter", e => {

    });
    node.addEventListener("mousedown", e => {
        let weeks: number = Math.floor(idx / 7);
        let days: number = idx % 7;
        let d: HiioCalendar = calendar.matrix[weeks][days]
        a = new HiioTask();
        a.start = d;
        a.end = d;
        a.id = String(Math.random());
    });
    node.addEventListener("mouseup", e => {
        let weeks: number = Math.floor(idx / 7);
        let days: number = idx % 7;
        let d: HiioCalendar = calendar.matrix[weeks][days];
        let _compare: COMPARE = a.compare(a.start, d);
        if (_compare === COMPARE.PREV) {
            a.end = a.start;
            a.start = d;

        } else {
            a.end = d;
        }
        document.querySelectorAll(".task").forEach((node)=>node.remove());
        taskList = [...taskList,a].sort((a,b)=>{
            return b.dateList().length-a.dateList().length;
        });
        console.log(taskList.map(i=>i.dateList().length));
        taskList.map(task =>{

            taskDraw(task);
        })
    })
})

function taskDraw(task:HiioTask ) {
    let dateToWeeks = task.dateToWeeks;
    let id:string = task.id;
    dateToWeeks.map((list:HiioCalendar[], idx) => {
        let len = list.length
        if (len > 0) {
            if(idx ===0){

            }
            let start = list[0];
            let node:Element = document.querySelector(`#calendar_date_${start.Y}_${start.M}_${start.D}`);
            let newNode:HTMLDivElement = document.createElement("div");
            let width:number = ( node.clientWidth*len)/window.innerWidth * 100;

            let total:number = 1;
            let index = taskList.map(i=>i.id).indexOf(id);

            taskList.slice(0,index).map(item=>{
                if(item.id !==id){
                    if(HiioTask.intersect(list.map(i=>i.toString()),item.dateList().map(i=>i.toString()))){
                        total ++;
                    }
                }
            })

            newNode.classList.add("task");
            newNode.style.width = width+"%";
            newNode.style.top = total+"em";
            node.append(newNode);
        }
    });

}

export default HiioCalendar;
