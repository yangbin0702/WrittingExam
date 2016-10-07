/**
 * Created by Administrator on 2016/9/12.
 */
var arr = [1,2,3,4,5];

var isHuWen = function(arr){
    n = arr.length;

    if(n == 1){
        return 1;
    }
    if( arr[0] == arr[n-1]){
        isHuWen()
    }
}
