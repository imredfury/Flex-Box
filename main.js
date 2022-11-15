let properties = [
    'display:flex',
    'justify-content:space-between',
    'justify-content:center',
    'justify-content:space-around',
    'justify-content:space-evenly',
    'justify-content:flex-start',
    'justify-content:flex-end',
    'flex-wrap:nowprap',
    'flex-wrap:wprap',
    'flex-wrap:wprap-reverse',
    'align-items:center',
    'align-items:flex-start',
    'align-items:flex-end',
    'align-content:center',
    'align-content:start',
    'align-content:end',
    'align-content:space-between',
    'flex-direction:column',
    'flex-direction:column-reverse',
    'flex-direction:row',
    'flex-direction:row-reverse',
];




let root = document.querySelector('.root');

let createBtn = document.createElement('button');
createBtn.className = 'button-create';
createBtn.textContent = 'create-flexbox';

let deleteBtn = document.createElement('button');
deleteBtn.className = 'button-delete';
deleteBtn.textContent = 'delete-flexbox';

let flexBox = document.createElement('div');
flexBox.className = 'flex-box';

let flexBlock = document.createElement('div');
flexBlock.className = 'flex-block';

root.append(createBtn,deleteBtn,flexBox,flexBlock);

createBtn.addEventListener('click', () => {

    if(flexBox.children.length === 0){
        properties.forEach((item) => {
            let flex = document.createElement('button');
            flex.className = 'flex'
            flex.style.margin = 10 + 'px'
            flex.textContent = item
            flex.style.backgroundColor = 'grey';
            flexBox.append(flex);

            flex.addEventListener('click', () => {
                if (!flex.textContent.includes('active')){
                    flexBlock.classList.add(flex.textContent + ';');
                    document.querySelectorAll('.flex').forEach((btn) => {
                        if(btn.textContent.includes(flex.textContent.split(':')[0]) && btn.textContent.includes('active')){
                            btn.style.backgroundColor = 'grey',
                            btn.textContent = btn.textContent.slice(0,btn.textContent.length - 7);
                            flexBlock.classList.remove(btn.textContent + ';')
                        }
                    });
                    flex.textContent += ' active';
                    flex.style.backgroundColor = 'blue'
                } 
                else {
                    flex.textContent = flex.textContent.slice(0,flex.textContent.length - 7);
                    flex.style.backgroundColor = 'grey';
                    flexBlock.classList.remove(flex.textContent + ';')
                }
                flexBlock.style.cssText = flexBlock.className.slice(11);
            })
        })
    }

    for(let i = 1; i < 4; i++){
        let box = document.createElement('div')
        box.className = `box box${i}`
        flexBlock.append(box);
    }
});

deleteBtn.addEventListener('click', () => {

if(flexBlock.children.length > 3){
    Array.from(flexBlock.children).forEach((item,idx,array) => {
        if (idx > array.length - 4){
          item.remove()
        }
    })

} else {
    Array.from(flexBox.children).forEach((item) => {
        item.remove()
       });
       Array.from(flexBlock.children).forEach((item) => {
           item.remove()
          });
}
});