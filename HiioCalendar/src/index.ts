import {HiioCalendar} from "./HiioCalendar";
import {HiioTask, COMPARE} from "./HiioTask";

let calendar: HiioCalendar = new HiioCalendar();
let taskMatrix: number[][][] = [...new Array(6)].map(_ => [...new Array(7)].map(_ => [...new Array(taskList?.length)].map(_ => 0)));

var target = document.querySelector("#calendar");

draw(target);

let a = new HiioTask();
a.start = new HiioCalendar(2023, 12, 1);
a.end = new HiioCalendar(2023, 12, 6);
a.id = "123vksdjvn";
let taskList = [a];
taskList.map(task => {
    taskDraw(task);
});

let status = false;
let start = null;
let end = null;
function draw(target): void {
    var matrix: HiioCalendar[][] = calendar.matrix;
    for (var i: number = 0; i < matrix.length; i++) {
        var row: HTMLDivElement = document.createElement("div");
        row.className = "row";
        row.id = `row_${i}`;
        var item1: HTMLDivElement = document.createElement("div");
        item1.classList.add("weeks")
        var item2: HTMLDivElement = document.createElement("div");
        item2.classList.add("task_list");
        for (var j: number = 0; j < matrix[i].length; j++) {
            var item: HTMLDivElement = document.createElement("div");
            var d: HiioCalendar = matrix[i][j];
            item.innerHTML = `${d.D}`;
            item.id = `calendar_date_${d.Y}_${d.M}_${d.D}`;
            item.className = "calendar_date";
            item1.append(item)
        }
        row.append(item1);
        row.append(item2);
        target.append(row);
    }
}

let calendarDateNode: NodeListOf<Element> = document.querySelectorAll(".calendar_date");
let taskDateNode: NodeListOf<Element> = document.querySelectorAll(".task");
taskDateNode.forEach((node) => {
    node.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
    });

    node.addEventListener("mouseup", e => {
        e.preventDefault();
        e.stopPropagation();
    });

    node.addEventListener("mousedown", e => {
        e.preventDefault();
        e.stopPropagation();
    });
    node.addEventListener("mousemove", e => {

        e.preventDefault();
        e.stopPropagation();
    })
})
calendarDateNode.forEach((node, idx) => {
    node.addEventListener("mouseenter", e => {
        e.preventDefault();
        e.stopPropagation();
    });
    node.addEventListener("mousedown", e => {
        e.preventDefault();
        e.stopPropagation();
        let weeks: number = Math.floor(idx / 7);
        let days: number = idx % 7;
        let d: HiioCalendar = calendar.matrix[weeks][days];
        a = new HiioTask();
        start = d;
        end = d;
        a.start = start;
        a.end = end;
        a.id = "a_" + String(Math.random()).replace("0.", "");
        status = true

    });
    node.addEventListener("mousemove", e => {
        e.preventDefault();
        e.stopPropagation();
        if (!status) return;
        let weeks: number = Math.floor(idx / 7);
        let days: number = idx % 7;
        end = calendar.matrix[weeks][days];
        if(start.date.getTime() > end.date.getTime()){
            a.start = end;
            a.end = start;
        }else{
            a.end = end;
        }

        document.querySelectorAll("." + a.id).forEach(n=>n.remove());
        taskDraw(a);
    });
    node.addEventListener("mouseup", e => {
        e.preventDefault();
        e.stopPropagation();
        status = false;
        taskList = [...taskList, a].sort((a, b) => {
            return a.start.date.getTime() - b.start.date.getTime();
        });
        init();
        taskList.map(task => {
            taskDraw(task);
        });
        a = null;
    })
})

function taskDraw(task: HiioTask) {
    let dateToWeeks = task.dateToWeeks;
    let id: string = task.id;
    dateToWeeks.map((list: HiioCalendar[], idx) => {
        let len = list.length
        if (len > 0) {

            let start = list[0];

            let node: Element = document.querySelector(`#calendar_date_${start.Y}_${start.M}_${start.D}`);

            let weeks = node.parentElement.parentElement.id.split("_")[1];
            let taskNode:Element = document.querySelector("#"+node.parentElement.parentElement.id +">.task_list")

            let days = start.W;
            let newNode: HTMLDivElement = document.createElement("div");
            newNode.classList.add(id);
            let width: number = (node.clientWidth * len) / window.innerWidth * 100;
            let left:number = (node.clientWidth * days) / window.innerWidth * 100;
            let total: number = taskMatrix[weeks][days].indexOf(0);
            if (!status) {

                for (let i: number = days; i < days + len; i++) {
                    taskMatrix[weeks][i][total] = 1;
                }
            }
            newNode.classList.add("task");
            newNode.style.width = width + "%";
            newNode.style.top = (!status) ? total*24+"px" : "0px";
            newNode.style.left = left+"%";
            let contentNode: HTMLDivElement = document.createElement("div");
            contentNode.classList.add(status?"add_item":"item");
            contentNode.innerText =id
            newNode.append(contentNode);
            taskNode.append(newNode);
        }
    });

}

function init() {
    document.querySelectorAll(".task").forEach((node) => node.remove());
    taskMatrix = [...new Array(6)].map(_ => [...new Array(7)].map(_ => [...new Array(taskList.length)].map(_ => 0)));
}


window.addEventListener("mousemove",e=>console.log(e.currentTarget));

export default HiioCalendar;
