

console.log("CallDotNet1.razor.js was downloaded automatically because it was imported in CallDotNet1.razor");

export function returnArrayAsync() {
    DotNet.invokeMethodAsync('CallDotNetFromJs', 'ReturnArrayAsync')
        .then(data => {
            console.log(data);
        });
}

export function addHandlers() {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", returnArrayAsync);
}