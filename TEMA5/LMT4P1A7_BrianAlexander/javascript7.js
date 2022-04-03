var images = [
    "audi.jpg","mercedes.jpg","Lambo.jpg","citroen.jpg","nissan.jpg","Opel.jpg"
];
var num=0;

function posterior()
{
  var slider =document.getElementById('slide');
  num++;
  
  if(num>=images.length)
  {
    num=0;
    
  }
  slider.src=images[num];
}

function anterior()
{
  var slider =document.getElementById('slide');
  num--;
  
  if(num<0)
  {
    num=images.length-1;
    
  }
  slider.src=images[num];
}   