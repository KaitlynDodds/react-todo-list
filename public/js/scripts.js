
$( document ).ready(function() {
    function toggleShowTaskTypes() {
        console.log('toggling');
        $('.type').each(function(i, e) {
            console.dir(e);
            $(e).addClass('show');
        });
    }
    
    $('.type:first-child').on('click', () => console.log('hello'));
});

