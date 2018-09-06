
const navigationListItems = document.querySelectorAll('.navigation ul li');
const expansionButton = document.querySelector(".expand");

let expanded = false;

console.log('yay');

expansionButton.addEventListener('click', event =>
{
    for(let i = 0; i < navigationListItems.length; i++)
    {
        setTimeout(expanded => navigationListItems[i].className = expanded ? "hidden" : "", 15 * (i + 1), expanded);
    }
    expanded = !expanded;
});
