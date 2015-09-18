var main = function()
{
    $('.dropdown-toggle').click(function()
    {
       $('.dropdown-menu').toggle();     
    });
    
    //下一個箭頭
    $('.arrow-next').click(function()
    {
        //宣告現在的滑道currentSlide  下一個滑道nextSlide
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        //宣告現在的滑道點點currentDot 下一個滑道點點nextDot
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        
//防止最後一個的下一個是空滑道，需將滑道值回傳到第一個滑道     
        if(nextSlide.length === 0)
        {
            nextSlide = $('.slide').first();    
        }
        
        //fadeOut()淡出效果  fadeIn()淡入效果
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
//防止最後一個的下一個是空點點，需將滑道值回傳到第一個點點
        if(nextDot.length === 0)
        {
            nextDot = $('.dot').first();    
        }
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
    
    
    //上一個箭頭
    $('.arrow-prev').click(function()
    {
        //宣告現在的滑道currentSlide  上一個滑道prevSlide
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();    
        
        //宣告現在的滑道點點currentDot 下一個滑道點點nextDot
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
//防止第一個的下一個是空滑道，需將滑道值回傳到最後一個滑道 
        if(prevSlide.length === 0)
        {
            prevSlide = $('.slide').last();   
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');

//防止第一個的下一個是空點點，需將滑道值回傳到最後一個點點
        if(prevDot.length === 0)
        {
            prevDot = $('.dot').last();    
        }
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
    
    
};

$(document).ready(main);