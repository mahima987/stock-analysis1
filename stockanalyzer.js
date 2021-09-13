const stockPrice = document.getElementById('input1');
const stockNo = document.getElementById('input2');
const recentValue = document.getElementById('input3');

const button = document.getElementById('btn');


button.addEventListener('click',()=>{
    if(stockPrice.value&&stockNo.value&&recentValue.value){
        const price = document.getElementById('box');
       
        price.removeChild(stockPrice);
        price.removeChild(stockNo);
        price.removeChild(recentValue);
        price.removeChild(button);
        //For Loss
        if(+stockPrice.value > +recentValue.value){
            //loss in absolute
            let absLoss = (stockPrice.value  - recentValue.value);
            //loss in percentage
            let perLoss = Math.floor(((+stockPrice.value - +recentValue.value)/recentValue.value)*100);
            
            let title = document.createElement('h2');
            title.innerHTML = "Loss";
            title.classList.add('title');
            price.appendChild(title);


            lossmsg = document.createElement('div');
            lossmsg.innerHTML = `Loss in RS ${absLoss} and Loss in % ${perLoss}😟😟😟`;
            lossmsg.classList.add('display');
            price.appendChild(lossmsg);

            //for loss image
            loss = document.createElement('img');
            loss.setAttribute('src','Loss.gif');
            loss.classList.add('img');
            price.appendChild(loss);

            //if loss is greater than  50%
            if(perLoss >= 50){
                price.removeChild(title);
                price.removeChild(lossmsg);
                price.removeChild(loss);

            const BigLoss = document.createElement('div');
            BigLoss.innerHTML = "BIGLOSS😖😖😖";
            BigLoss.classList.add('title');
            price.appendChild(BigLoss);

            const BigLossImg = document.createElement('img');
            BigLossImg.setAttribute('src','Bigloss.gif');
            BigLossImg.classList.add('img');
            price.appendChild(BigLossImg);

            }
        }
        else if(stockPrice.value === recentValue.value){
            sameValue = document.createElement('div');
            sameValue.innerHTML = `No Profit No Loss`
            sameValue.classList.add('display')
            price.appendChild(sameValue);
        }
        // for profit
        else{
            // profit in rs
            const absProfit = (+recentValue.value - +stockPrice.value);
            // profit in percentage
           const perProfit =Math.floor(((+recentValue.value - +stockPrice.value)/recentValue.value)*100);

           let title1 = document.createElement('h2');
           title1.innerHTML = "Profit";
           title1.classList.add('title');
           price.appendChild(title1);

           profitMsg = document.createElement('div');
           profitMsg.innerHTML = `Profit in RS ${absProfit} and Profit in % ${perProfit}🤑🤑🤑`;
           profitMsg.classList.add('display');
           price.appendChild(profitMsg);

           // img for profit

           profit = document.createElement('img');
           profit.setAttribute('src','profit.gif');
           profit.classList.add('img');
           price.appendChild(profit);

        }


    }
    else{
        alert("please fill all fileds")
    }
        
       

});





