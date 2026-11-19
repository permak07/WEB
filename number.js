// 1.1. Проверка двух натуральных чисел на взаимную простоту
function coprimality(a,b){
    while (b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a===1;
}

console.log(coprimality(14, 15));
console.log(coprimality(14, 21));

// 1.2. Проверка, будет ли простым данное натуральное число
function is_prime(n){
    if (n<=1) return false;
    for (let i=2;i<Math.sqrt(n)+1;i++){
        if (n%i===0) return false;
    }
    return true;
}
console.log(is_prime(16))
console.log(is_prime(17))

// 1.5. Найти все делители натурального числа N
function divisors(n){
    let divs=[1];
    for (let i=2;i<=n;i++)
        if (n%i===0) {
            divs.push(i);
        }
    return divs;
}
console.log(divisors(30))

// 1.10. Вычислить (N)!!
function double_factorial(n){
    if (n<=0) return 1;
    let result=1;
    for (let i=n;i>0;i-=2){
        result*=i;
    }
    return result;
}
console.log(double_factorial(9))
console.log(double_factorial(10))

// 1.15. Найти все целые числа из интервала от N до M, которые делятся на сумму всех своих цифр.
function sum(n) {
    let summa = 0;
    while (n > 0) {
        summa += n % 10;
        n = Math.floor(n / 10);
    }
    return summa;
}

function numders(n,m){
    let nums=[];
    if (n>m) return false;
    for (let i=n;i<=m;i++){
        if (i%sum(i)===0) {
            nums.push(i);
        }
    }
    return nums;
}

console.log(numders(13,39))
console.log(numders(129,156))