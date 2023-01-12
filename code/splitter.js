const totalBill = document.querySelector('.totalBill');
const numberOfPeople = document.querySelector('.numberOfPeople');
const tip = document.querySelectorAll('.tip');
const tipPerPerson = document.querySelector('.tipPerPerson');
const totalPerPerson = document.querySelector('.totalPerPerson');
const errorMsg1 = document.querySelector('.errorMsg1');
const errorMsg2 = document.querySelector('.errorMsg2');
const reset = document.querySelector('.reset');
const custom = document.querySelector('.custom');

totalBill.addEventListener('mouseenter', (e) => {
    totalBill.style.border = '2px solid hsl(172, 67%, 45%)';
});
totalBill.addEventListener('mouseleave', (e) => {
    totalBill.style.border = 'none';
});
numberOfPeople.addEventListener('mouseenter', (e) => {
    numberOfPeople.style.border = '2px solid hsl(172, 67%, 45%)';
});
numberOfPeople.addEventListener('mouseleave', (e) => {
    numberOfPeople.style.border = 'none';
});
Array.from(tip).forEach((el)=>{
    el.addEventListener('mouseover', (e) => {
        el.style.background = 'hsl(185, 41%, 84%)';
        el.style.color = 'hsl(183, 100%, 15%)';
    })
    el.addEventListener('mouseleave', (e) => {
        el.style.background = 'hsl(183, 100%, 15%)';
        el.style.color = 'hsl(0, 0%, 100%)';
    })
    el.addEventListener('click', (e) => {
        let target = e.target;
        custom.value = "";
        if(totalBill.value <= 0){
            totalBill.style.border = '1px solid red';
            errorMsg1.style.display = 'flex';
            setTimeout(() =>{
                totalBill.style.border = 'none';
                errorMsg1.style.display = 'none';
            }, 3000);
        }
        if(numberOfPeople.value <= 0){
            numberOfPeople.style.border = '1px solid red';
            errorMsg2.style.display = 'flex';
            setTimeout(() =>{
                numberOfPeople.style.border = 'none';
                errorMsg2.style.display = 'none';
            }, 3000);
        }
        if(totalBill.value && numberOfPeople.value > 0){
            reset.style.opacity = '1';
            reset.disabled = false;
            reset.style.cursor= 'pointer';
            reset.style.background = 'hsl(172, 67%, 45%)';
            reset.addEventListener('mouseover', (e) => {
                reset.style.background = 'hsl(185, 41%, 84%)';
            });
            reset.addEventListener('mouseleave', (e) => {
                reset.style.background = 'hsl(172, 67%, 45%)';
            })
            Array.from(tip).forEach((el)=>{
                el.style.background='hsl(183, 100%, 15%)';
                el.style.color = 'hsl(0, 0%, 100%)';
                el.addEventListener('mouseover', (e) => {
                    el.style.background = 'hsl(185, 41%, 84%)';
                    el.style.color = 'hsl(183, 100%, 15%)';
                })
                el.addEventListener('mouseleave', (e) => {
                    el.style.background = 'hsl(183, 100%, 15%)';
                    el.style.color = 'hsl(0, 0%, 100%)';
                })
            });
            target.style.background = 'hsl(172, 67%, 45%)';
            target.style.color = 'hsl(183, 100%, 15%)';
            target.addEventListener('mouseover', (e) => {
                el.style.background = 'hsl(172, 67%, 45%)';
                el.style.color = 'hsl(183, 100%, 15%)';
            })
            target.addEventListener('mouseleave', (e) => {
                el.style.background = 'hsl(172, 67%, 45%)';
                el.style.color = 'hsl(183, 100%, 15%)';
            })
            let x,y;
            x = ((totalBill.value * el.value)/numberOfPeople.value).toFixed(2);
            tipPerPerson.innerHTML = '<h1>$' + x + '</h1>';
            y = ((totalBill.value/numberOfPeople.value) + ((totalBill.value * el.value)/numberOfPeople.value)).toFixed(2);
            totalPerPerson.innerHTML = '<h1>$' + y + '</h1>';
        }
        custom.addEventListener('click', (e) => {
            el.style.background = 'hsl(183, 100%, 15%)';
            el.style.color = 'hsl(0, 0%, 100%)';
            el.addEventListener('mouseover', (e) => {
                el.style.background = 'hsl(185, 41%, 84%)';
                el.style.color = 'hsl(183, 100%, 15%)';
            })
            el.addEventListener('mouseleave', (e) => {
                el.style.background = 'hsl(183, 100%, 15%)';
                el.style.color = 'hsl(0, 0%, 100%)';
            })
        });
    });

    reset.addEventListener('click', (e) => {
        totalBill.value = '';
        numberOfPeople.value = '';
        custom.value = "";
        reset.disabled = true;
        reset.style.opacity = '0.2';
        reset.style.cursor = 'default';
        el.style.background = 'hsl(183, 100%, 15%)';
        el.style.color = 'hsl(0, 0%, 100%)';
        el.addEventListener('mouseover', (e) => {
            el.style.background = 'hsl(185, 41%, 84%)';
            el.style.color = 'hsl(183, 100%, 15%)';
        })
        el.addEventListener('mouseleave', (e) => {
            el.style.background = 'hsl(183, 100%, 15%)';
            el.style.color = 'hsl(0, 0%, 100%)';
        })
        tipPerPerson.innerHTML = '<h1>$0.00</h1>';
        totalPerPerson.innerHTML = '<h1>$0.00</h1>';
    });
})

custom.addEventListener('keyup', (e) => {
    if(totalBill.value <= 0){
        totalBill.style.border = '1px solid red';
        errorMsg1.style.display = 'flex';
        setTimeout(() =>{
            totalBill.style.border = 'none';
            errorMsg1.style.display = 'none';
        }, 3000);
        custom.value = "";
    }
    if(numberOfPeople.value <= 0){
        numberOfPeople.style.border = '1px solid red';
        errorMsg2.style.display = 'flex';
        setTimeout(() =>{
            numberOfPeople.style.border = 'none';
            errorMsg2.style.display = 'none';
        }, 3000);
        custom.value = "";
    }
    if(totalBill.value && numberOfPeople.value > 0){
        reset.style.opacity = '1';
        reset.disabled = false;
        reset.style.cursor= 'pointer';
        reset.style.background = 'hsl(172, 67%, 45%)';
        reset.addEventListener('mouseover', (e) => {
            reset.style.background = 'hsl(185, 41%, 84%)';
        });
        reset.addEventListener('mouseleave', (e) => {
            reset.style.background = 'hsl(172, 67%, 45%)';
        })
        let x,y;
        x = (((totalBill.value * custom.value)/100)/numberOfPeople.value).toFixed(2);
        tipPerPerson.innerHTML = '<h1>$' + x + '</h1>';
        y = ((totalBill.value/numberOfPeople.value) + (((totalBill.value * custom.value)/100)/numberOfPeople.value)).toFixed(2);
        totalPerPerson.innerHTML = '<h1>$' + y + '</h1>';
    }
});