"""Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

"""



def check(num_list, k):
	pair_additions = []
	#get sums of each two element in list
	for in1, num1 in enumerate(num_list):
		for in2, num2 in enumerate(num_list):
			if(in1==in2):
				continue
			else:
				#print(num1,num2)
				pair_addition = num1 + num2
				pair_additions.append(pair_addition)
				#print(pair_additions)

	#remove dupplications
	pair_additions = list(set(pair_additions))

	#check if k matches with any list item
	for item in pair_additions:
		if(k == item):
			return True

	return False
