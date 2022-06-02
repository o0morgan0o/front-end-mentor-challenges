console.log('hello world2')

let myHeaders = new Headers();
fetch('/data.json', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
}).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    populateBarChartWithData(data);
})

function scale (number:number, inMin:number, inMax:number, outMin:number, outMax:number) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function populateBarChartWithData(data: any) {
    const barElements = document.querySelectorAll('.spending-bar')
    // find maximum in json amounts
    let maxAmount = 0;
    let maxIndex = -1;
    for (let i = 0; i < data.length; i++) {
        console.log('data:::', data)
        if (data[i].amount > maxAmount) {
            maxAmount = data[i].amount;
            maxIndex = i;
        }
    }
    // const maxPixelHeight = 150;
    const maxHeight = 150 ;

    console.log('maxAmount ', maxAmount)

    for (let i = 0; i < data.length; i++) {
        // calculate percentage per rapport to maxAmount
        let dayAmount = data[i].amount;
        let dayPercentage = dayAmount / maxAmount;
        let heightPixel = dayPercentage * maxHeight;
        console.log('height calculated ', dayAmount, dayPercentage, heightPixel)
        barElements[i].setAttribute('data-amount', `${dayAmount}`)
        barElements[i].innerHTML = `<div style="align-self: start;"></div>` +
            `<div style="height:${heightPixel}px; align-self: end;" ` +
            `class="bar-amount ${i === maxIndex ? 'bar-amount-special' : 'bg-primary'} w-full  "` +
            '><div style="opacity: 0">el</div></div>'

    }

}
