let bg = 'light';
document.getElementById('piggy-icon').addEventListener('click', function(){
    if(bg === 'dark'){
        bg = 'light';
        document.body.classList='bg-gray-900';
        
    }
    else{
        bg = 'dark';
        document.body.classList='bg-white';
    }
})