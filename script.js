let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];
const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple'];

let rainbow  = [...hero, ...native, ...destination];
rainbow.reverse();

rainbow.splice(0,2, 'Richard');
rainbow.pop();
rainbow.push('Gave','Battle','In','Vain')



document.write(`<div style="display: flex; justify-content: space-between; margin: 0 auto; width: 500px;">`);

for (let i=0; i<rainbow.length; i++) {
    document.write(`<div style="text-align: center;">
        <div style="background: ${COLORS[i]}; width: 30px; height: 30px; border-radius: 50%; margin: 0 auto"></div>
        <p>${rainbow[i]}</p>
</div>`);
}

document.write(`</div>`);
