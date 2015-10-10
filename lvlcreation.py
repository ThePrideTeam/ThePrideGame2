#script to add grass in blank space


f1 = open("samplelvl.csv", "r")
f2 = open("samplelvl_new.txt", "w")

for line in f1:
	sp = line.rstrip('\n').split(',')
	sp_new = []
	for s in sp:
		if s == '':
			sp_new.append('G')
		else:
			sp_new.append(s)
	for i in range(0, len(sp_new) - 1):
		f2.write(sp_new[i] + ',')
	f2.write(sp_new[-1] + '\n')
f1.close()
f2.close()