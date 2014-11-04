/**
 * Portfolio JS 
 *
 * @author Zach Bruggeman <mail@bruggie.com>
 */

 $(document).ready(function () {
     FastClick.attach(document.body);

     setInterval(function () {
         var $active = $('.subtitle.active');
         var $next = $active.next();
         if ($next.length === 0) $next = $('.subtitle').first();

         $active.removeClass('active').addClass('upwards');
         $next.addClass('active');
         setTimeout(function () {
             $active.removeClass('upwards');
         }, 500);
     }, 3000);
 });
