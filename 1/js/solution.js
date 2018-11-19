
/*Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

*/

var num_list = [1,2,3,4];

function check(num_list, k) {
	var list_len = num_list.length;
	var pair_additions = []

	for (var i = 0; i < list_len; i++) {
		for (var j = 0; j < list_len; j++) {
			if (num_list[i] == num_list[j]) {
				continue
			} else {
				pair_addition = num_list[i] + num_list[j];
				pair_additions.push(pair_addition);
			}
		}
	}

	var uniqize = pa => [...new Set(pa)];
	var pair_additions = uniqize(pair_additions)

	var list_len = pair_additions.length;
	console.log(pair_additions);
	for (var i = 0; i < list_len; i++) {
		if(k == pair_additions[i]) {
			return true
		}
	return false
	}
}

