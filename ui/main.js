var count=0;
function getCount()
{
    count=1+count;
    doucument.getelementbyid("counter").getinnerhtml=count.toString();
}