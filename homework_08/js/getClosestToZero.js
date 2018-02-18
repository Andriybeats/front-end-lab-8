function getClosestToZero(){
    var closeToZero = arguments[0];
    for(var i = 0; i < arguments.length; i++)
        {
            if (Math.abs(closeToZero) > Math.abs(arguments[i])){
                closeToZero = arguments[i];
            }
        }
    return closeToZero;
}
