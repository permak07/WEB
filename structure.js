// 2.1
function toCamelCase(str){
    let words=str.split('-');
    let result=words[0];
    for (let i=1;i<words.length;i++){
        result+=words[i].at(0).toUpperCase()+words[i].slice(1);
    }
    return result;
}

console.log(toCamelCase("background-color"));
console.log(toCamelCase("list-style-image"));

// 2.2
const original=[9,8,7,6,5,4,3,2,1];

const copy1=[...original]
copy1.reverse();

const copyTemp=original.slice();
const copy2=[];
for (let i=copyTemp.length-1;i>=0;i--){
    copy2.push(copyTemp[i]);
}

console.log("Оригинал:", original);
console.log("Способ 1:", copy1);
console.log("Способ 2:", copy2);

// 2.3
const dict={
    "машина":"car",
    "собака":"dog",
    "самолёт":"plain",
    "апельсин":"orange"
};

function translate(word){
    return dict[word.toLowerCase()] || "Перевод не найден";
}

console.log(translate("Самолёт"));
console.log(translate("машина"));
console.log(translate("кот"));

// 2.4
const week={
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",

    showCurrentDay: function(){
        let dayNumber=new Date().getDay();
        dayNumber=dayNumber===0 ? 7 : dayNumber;
        console.log(`Сегодня: ${this[dayNumber]}`)
    }
};
week.showCurrentDay();

// 2.5
const staff1={
    "Директор":"Иван",
    "Бухгалтер":"Олег",
    "Секретарь":"Елена",
    "Уборщица":"Тамара"
};

const staff2={...staff1}

staff2["Директор"]="Тамара";
staff2["Уборщица"]="Иван";

console.log("Персонал 1:\n"+JSON.stringify(staff1,null,2))
console.log("Персонал 2\n",JSON.stringify(staff2,null,2))

// 2.6
const education={
    subjects: "Математика, Физика, Базы данных, Программирование",

    addSubject: function(newSubject){
        let arr=this.subjects.split(", ");
        if (!arr.includes(newSubject)){
            arr.push(newSubject)
            this.subjects=arr.join(", ");
        }
    },

    removeSubject: function(remSubject){
        let arr=this.subjects.split(", ");
        let index=arr.includes(remSubject)
        if (index!==-1){
            arr.splice(index,1)
            this.subjects=arr.join(", ")
        }
    }
};
education.addSubject("Английский");
console.log(education.subjects); 

education.removeSubject("Физика");
console.log(education.subjects); 