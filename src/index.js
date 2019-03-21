module.exports = function check(str, bracketsConfig) {
  let basicstr = [];
  let addstr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      addstr.push(bracketsConfig[i][1]);
    }
    else {
      basicstr.push(bracketsConfig[i][0]);
      basicstr.push(bracketsConfig[i][1]);
    }
  }
  let arraystr = [];
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < basicstr.length; k++) {
			if (str[i] == basicstr[k] && k % 2 == 0){
        arraystr.push(str[i]);
      }
      else  if (str[i] == basicstr[k] && k % 2 != 0) {
        if (arraystr[arraystr.length-1] == basicstr[k-1]) arraystr.pop();
        else arraystr.push(str[i]);
			} 
		}
		for (let l = 0; l < addstr.length; l++) {
      if (str[i] == addstr[l]) {
        if (arraystr[arraystr.length-1] != addstr[l]) arraystr.push(str[i]);
        else arraystr.pop();
        } 
      }
    }
  if (arraystr.length != 0) return false;
	else return true;
}